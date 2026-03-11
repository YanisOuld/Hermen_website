import { useEffect, useRef } from 'react';
import '../styles/bg.css';

// Ripple origins + durations — must match CSS exactly
const RIPPLES = [
  { x: 0.72, y: 0.18, duration: 12000, delay:      0 },
  { x: 0.20, y: 0.65, duration: 16000, delay:  -5000 },
  { x: 0.55, y: 0.80, duration: 14000, delay:  -9000 },
  { x: 0.85, y: 0.50, duration: 18000, delay:  -3000 },
  { x: 0.35, y: 0.25, duration: 13000, delay: -11000 },
  { x: 0.10, y: 0.40, duration: 17000, delay:  -7000 },
  { x: 0.72, y: 0.18, duration: 12000, delay:  -6000 },
  { x: 0.20, y: 0.65, duration: 16000, delay: -13000 },
  { x: 0.55, y: 0.80, duration: 14000, delay:  -4000 },
];

const MAX_RADIUS = 280; // half of 560px from CSS

function rnd(min, max) { return min + Math.random() * (max - min); }

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, rafId;
    let last = performance.now();

    // Dots that are currently visible
    const dots = [];

    // Per-ripple: track last known radius to detect the moment it sweeps a spot
    const rippleState = RIPPLES.map(() => ({
      lastR:    0,
      // Each ripple has a few candidate angles where dots might appear
      targets:  Array.from({ length: 2 }, () => ({
        angle:    rnd(0, Math.PI * 2),
        triggered: false,
        // trigger when ripple radius crosses this value
        triggerR:  rnd(40, MAX_RADIUS * 0.85),
      })),
    }));

    function resize() {
      if (!canvas) return;
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function spawnDot(cx, cy, angle, r) {
      // Place dot exactly on the ripple circumference
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      const fade = rnd(2.5, 5);
      dots.push({ x, y, lit: fade, fade, size: rnd(1, 1.8) });
      // Keep total dots manageable
      if (dots.length > 40) dots.shift();
    }

    function getRippleRadius(ripple, now) {
      // Mirror the CSS keyframe: 0→560px over `duration` ms, looping
      const elapsed = ((now + ripple.delay) % ripple.duration + ripple.duration) % ripple.duration;
      const progress = elapsed / ripple.duration; // 0→1
      // CSS: opacity kicks in at 8%, expands to 560px at 100%
      if (progress < 0.0) return 0;
      return progress * MAX_RADIUS * 2; // 0 → 560px (full diameter = 560, radius = 280)
    }

    function draw(now) {
      const dt = (now - last) / 1000;
      last = now;
      ctx.clearRect(0, 0, W, H);

      // ── Check ripples for dot spawn ──
      RIPPLES.forEach((ripple, i) => {
        const cx = ripple.x * W;
        const cy = ripple.y * H;
        const r  = getRippleRadius(ripple, now);
        const state = rippleState[i];

        state.targets.forEach(target => {
          // Ripple just crossed the trigger radius
          if (!target.triggered && state.lastR < target.triggerR && r >= target.triggerR) {
            if (Math.random() > 0.90) {
              spawnDot(cx, cy, target.angle, target.triggerR);
            }
            target.triggered = true;
          }
          // Reset for next loop
          if (r < target.triggerR * 0.1) {
            target.triggered = false;
            target.triggerR  = rnd(40, MAX_RADIUS * 0.85);
            target.angle     = rnd(0, Math.PI * 2);
          }
        });

        state.lastR = r;
      });

      // ── Draw dots ──
      dots.forEach(dot => {
        if (dot.lit <= 0) return;
        dot.lit -= dt;

        const t     = Math.max(dot.lit / dot.fade, 0);
        const alpha = t * 0.12;

        // Soft glow
        const glow = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 4);
        if (glow) {
          glow.addColorStop(0, `rgba(210,100,20,${alpha * 0.5})`);
          glow.addColorStop(1, 'rgba(210,100,20,0)');
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot — small
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,100,20,${alpha})`;
        ctx.fill();

        // Tiny crosshair
        if (t > 0.25) {
          const cAlpha = ((t - 0.25) / 0.75) * 0.12;
          const cSize  = dot.size * 3;
          ctx.strokeStyle = `rgba(210,100,20,${cAlpha})`;
          ctx.lineWidth   = 0.6;
          ctx.beginPath();
          ctx.moveTo(dot.x - cSize, dot.y); ctx.lineTo(dot.x + cSize, dot.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y - cSize); ctx.lineTo(dot.x, dot.y + cSize);
          ctx.stroke();
        }
      });

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="bg">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="ripple rp-1" />
      <div className="ripple rp-1b" />
      <div className="ripple rp-2" />
      <div className="ripple rp-2b" />
      <div className="ripple rp-3" />
      <div className="ripple rp-3b" />
      <div className="ripple rp-4" />
      <div className="ripple rp-5" />
      <div className="ripple rp-6" />

      <canvas ref={canvasRef} className="bg-dots-canvas" />

      <div className="grain" />
    </div>
  );
}