import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'


export default function Home(){
const [cursor, setCursor] = useState({ x: 0, y: 0 });
const x = useMotionValue(0);
const y = useMotionValue(0);
const springX = useSpring(x, { stiffness: 80, damping: 15 });
const springY = useSpring(y, { stiffness: 80, damping: 15 });


useEffect(() => {
const move = (e) => {
setCursor({ x: e.clientX, y: e.clientY });
x.set(e.clientX / 30);
y.set(e.clientY / 30);
};
window.addEventListener('mousemove', move);
return () => window.removeEventListener('mousemove', move);
}, [x, y]);


return (
<section className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<motion.h1 initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold">Hi, I'm Aditya Singh</motion.h1>
<motion.p initial={{ x:-10, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{delay:0.25}} className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
B.Tech Computer Science student focused on building beautiful, responsive web apps and learning practical cybersecurity.
</motion.p>


<div className="mt-6 flex gap-4">
<Link to="/projects" className="px-5 py-3 rounded-md bg-primary text-white font-medium shadow hover:brightness-95">See Projects</Link>
<a href="/AdityaSinghResume_Final.pdf" download className="px-5 py-3 rounded-md border border-slate-300 dark:border-slate-700">Download Resume</a>
</div>


<div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
<Stat title="College" value="Dr. Akhilesh Das Gupta Institute of Professional Studies" />
<Stat title="Field" value="Web Dev & Cybersecurity" />
<Stat title="Languages" value="C/C++, JavaScript" />
<Stat title="Tools" value="React, Tailwind, Node.js" />
</div>
</div>


<div className="relative">
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
style={{ x: springX, y: springY }}
className="rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900"
>
<img
src="/aditya.jpg"
alt="Aditya Singh"
className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800"
/>
</motion.div>


<motion.div className="absolute -right-8 bottom-0 w-48 h-48 rounded-2xl blur-3xl opacity-30" animate={{ rotate: [0,10,-6,0] }} transition={{ duration: 8, repeat: Infinity }} style={{background: 'linear-gradient(135deg,#0ea5a4,#7c3aed)'}} />
</div>
</section>
)
}


function Stat({title, value}){
return (
<div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
<div className="text-xs text-slate-500 dark:text-slate-400">{title}</div>
<div className="font-medium">{value}</div>
</div>
)
}
import { Link } from 'react-router-dom';