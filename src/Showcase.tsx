import React, { useRef, useState, useEffect } from 'react';
import './App.css';

type ShowcaseProps = {
  before?: string;
  after?: string;
  altBefore?: string;
  altAfter?: string;
};

const Showcase: React.FC<ShowcaseProps> = ({ before, after, altBefore = 'Before', altAfter = 'After' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      setPos(pct);
    };

    const onUp = () => (dragging.current = false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="before-after" ref={containerRef} aria-hidden>
      <img src={before} alt={altBefore} className="ba-image ba-before" />
      <div className="ba-after-wrap" style={{ width: `${pos}%` }}>
        <img src={after} alt={altAfter} className="ba-image ba-after" />
      </div>
      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        role="slider"
        aria-valuemin={5}
        aria-valuemax={95}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
      />
    </div>
  );
};

export default Showcase;
