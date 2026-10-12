'use client';
import { useRef } from 'react';

export default function Tilt({ children }) {
  const ref = useRef(null);
  const move = (e) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const leave = () => { ref.current.style.transform = ''; };
  return <div ref={ref} className="ab-tilt" onMouseMove={move} onMouseLeave={leave}>{children}</div>;
}