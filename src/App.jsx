import React from 'react'
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
return (
<div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-black transition-colors duration-500">
<Nav />


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