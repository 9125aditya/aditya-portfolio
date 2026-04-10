import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  // ✅ GLOBAL THEME STATE (MAIN FIX)
  const [dark, setDark] = useState(false)

  // ✅ Load theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved === "dark") {
      setDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // ✅ Apply theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-cosmicBg text-black dark:text-white transition-colors duration-300">
      
      {/* ✅ PASS STATE TO NAV */}
      <Nav dark={dark} setDark={setDark} />

      <main className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

function PageWrapper({ children }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}