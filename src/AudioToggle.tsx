import React, { useEffect, useRef, useState } from 'react';

type Props = {
  src?: string; // local path (e.g., /assets/recitation.mp3) or remote fallback
};

const AudioToggle: React.FC<Props> = ({ src = '/assets/recitation.mp3' }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.18; // low-volume ambient
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = async () => {
    if (!audioRef.current) return;
    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (e) {
      // autoplay/gesture restrictions may block play; still toggle state
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
