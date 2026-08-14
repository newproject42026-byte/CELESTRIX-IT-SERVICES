import React, { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for 3D parallax deflection
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particle Setup
    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 12), 110);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 200,
        baseZ: Math.random() * 1000 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const focalLength = 400;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.3;
      const offsetY = (mouse.y - height / 2) * 0.3;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;

        // 3D Projection math
        const scale = focalLength / (focalLength + p.z);
        const screenX = (p.x - offsetX) * scale + width / 2;
        const screenY = (p.y - offsetY) * scale + height / 2;
        const screenRadius = Math.max(p.radius * scale * 1.8, 0.5);

        // Draw particle
        const alpha = Math.min(Math.max((1 - p.z / 1200) * 0.8, 0.1), 0.9);
        ctx.beginPath();
        ctx.arc(screenX, screenY, screenRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();

        // Draw connecting 3D constellation edges
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 180) {
            const scale2 = focalLength / (focalLength + p2.z);
            const screenX2 = (p2.x - offsetX) * scale2 + width / 2;
            const screenY2 = (p2.y - offsetY) * scale2 + height / 2;
            const lineAlpha = (1 - dist3D / 180) * 0.25 * alpha;

            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(screenX2, screenY2);
            ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default Background3D;