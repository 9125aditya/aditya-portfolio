import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav({ dark, setDark }) {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 🔥 Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src="/aditya.jpg"
            alt="Aditya Singh"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              rotate: [0, 10, -10, 0],
              scale: 1.1,
              transition: { duration: 1 },
            }}
          />
          <div>
            <div className="font-semibold">Aditya Singh</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              B.Tech CSE • Web Developer
            </div>
          </div>
        </Link>

        {/* 🔗 Links */}
        <div className="flex items-center gap-4">
          <Link to="/projects" className={navLink(location, "/projects")}>
            Projects
          </Link>
          <Link to="/about" className={navLink(location, "/about")}>
            About
          </Link>
          <Link to="/contact" className={navLink(location, "/contact")}>
            Contact
          </Link>

          {/* 📄 Resume */}
          <a
            href="/AdityaSinghResume_Final.pdf"
            download
            className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Resume
          </a>

          {/* 🌙 Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? "☀️" : "🌙"}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

// ✅ Active link styling
function navLink(location, path) {
  const base = "text-sm px-2 py-1 rounded-md transition";

  return location.pathname === path
    ? base + " bg-slate-100 dark:bg-slate-800 font-medium"
    : base +
        " text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800";
}