import React, { useEffect, useRef, useState } from 'react';

type Props = {
  src?: string; // local path (e.g., /assets/recitation.mp3) or remote fallback
};

const AudioToggle: React.FC<Props> = ({ src = '/assets/recitation.mp3' }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Try to load the audio file; if it doesn't exist or cannot play, we'll use WebAudio fallback.
    const a = new Audio();
    a.src = src;
    a.loop = true;
    a.volume = 0.18;
    audioRef.current = a;

    const onErr = () => {
      // cleanup audioRef since file not available
      audioRef.current = null;
    };

    // attempt to load metadata; if it errors, we'll fallback later on play
    a.addEventListener('error', onErr);

    return () => {
      a.removeEventListener('error', onErr);
      audioRef.current?.pause();
      audioRef.current = null;
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      if (gainRef.current) {
        gainRef.current.disconnect();
        gainRef.current = null;
      }
      if (ctxRef.current) {
        try { ctxRef.current.close(); } catch {}
        ctxRef.current = null;
      }
    };
  }, [src]);

  const startFallback = async () => {
    if (ctxRef.current) return;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const gain = ctx.createGain();
    gain.gain.value = 0.02; // very low ambient level
    gain.connect(ctx.destination);
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 220; // low hum
    osc.connect(gain);
    osc.start();
    ctxRef.current = ctx;
    oscRef.current = osc;
    gainRef.current = gain;
  };

  const stopFallback = () => {
    if (oscRef.current) {
      try { oscRef.current.stop(); } catch {}
      oscRef.current.disconnect();
      oscRef.current = null;
    }
    if (gainRef.current) {
      gainRef.current.disconnect();
      gainRef.current = null;
    }
    if (ctxRef.current) {
      try { ctxRef.current.close(); } catch {}
      ctxRef.current = null;
    }
  };

  const toggle = async () => {
    // Prefer HTMLAudio if it's loaded and can play
    if (playing) {
      if (audioRef.current) {
        audioRef.current.pause();
      } else {
        stopFallback();
      }
      setPlaying(false);
      return;
    }

    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setPlaying(true);
        return;
      } catch (e) {
        // fall through to fallback
      }
    }

    // Start WebAudio fallback
    try {
      await startFallback();
      setPlaying(true);
    } catch (e) {
      setPlaying(false);
    }
  };

  return (
    <button className={`audio-toggle ${playing ? 'on' : ''}`} onClick={toggle} aria-pressed={playing} title="Toggle ambient recitation audio">
      {playing ? '🔊 Ambient On' : '🔈 Ambient Off'}
    </button>
  );
};

export default AudioToggle;
