import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 15 });
  const springY = useSpring(y, { stiffness: 80, damping: 15 });

  // cursor tracking
  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      x.set(e.clientX / 30);
      y.set(e.clientY / 30);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  // ⭐ animated starfield background
  useEffect(() => {
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      d: Math.random() * 0.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.d;
        if (s.y > canvas.height) s.y = 0;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-cosmicBg text-white">

      {/* ✨ STARFIELD BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <canvas id="stars" className="w-full h-full"></canvas>
      </div>

      {/* 🧠 CYBER GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-gridMove opacity-20"></div>

      {/* 🌈 FLOATING ORBS */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-40"
          style={{
            width: `${120 + i * 60}px`,
            height: `${120 + i * 60}px`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, #7C3AED, transparent 70%)"
                : "radial-gradient(circle, #00FFFF, transparent 70%)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 40 - i * 10, -30, 0],
            y: [0, -20 + i * 10, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🧩 MAIN CONTENT */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center px-6">
        <div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-cosmicBlue drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
          >
            Hi, I'm Aditya Singh
          </motion.h1>

          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-lg text-gray-300 max-w-xl"
          >
            B.Tech Computer Science student passionate about building responsive web apps, exploring cybersecurity, and crafting futuristic designs.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/projects"
              className="px-5 py-3 rounded-md bg-cosmicPurple text-white font-medium shadow-glow hover:scale-105 transition-transform"
            >
              See Projects
            </Link>
            <a
              href="/AdityaSinghResume_Final.pdf"
              download
              className="px-5 py-3 rounded-md border border-cosmicPurple text-cosmicPurple hover:bg-cosmicPurple hover:text-white transition-all"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
            <Stat title="College" value="Dr. Akhilesh Das Gupta Institute of Professional Studies" />
            <Stat title="Field" value="Web Dev & Cybersecurity" />
            <Stat title="Languages" value="C/C++, JavaScript" />
            <Stat title="Tools" value="React, Tailwind, Node.js" />
          </div>
        </div>

        {/* 💫 PROFILE IMAGE WITH CURSOR MOTION */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ x: springX, y: springY }}
            className="rounded-full p-2 shadow-[0_0_40px_rgba(124,58,237,0.7)] bg-gradient-to-br from-cosmicPurple to-cosmicBlue"
          >
            <img
              src="/aditya.jpg"
              alt="Aditya Singh"
              className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="p-3 bg-cosmicGray/60 backdrop-blur-sm border border-cosmicPurple/30 rounded-lg hover:shadow-glow transition-all">
      <div className="text-xs text-cosmicBlue uppercase tracking-wide">{title}</div>
      <div className="font-medium text-gray-200">{value}</div>
    </div>
  );
}
