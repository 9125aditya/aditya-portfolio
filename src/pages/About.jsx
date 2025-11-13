import React from 'react'


export default function About(){
return (
<section className="max-w-3xl">
<h2 className="text-2xl font-bold">About Me</h2>
<p className="mt-4 text-slate-700 dark:text-slate-300">
I'm a B.Tech Computer Science & Engineering student at Dr. Akhilesh Das Gupta Institute of Professional Studies (2024–2028).
I enjoy turning ideas into pixel-perfect, responsive web experiences and diving into cybersecurity challenges. I participated in Deloitte Australia's Cyber Job Simulation and built real projects such as a responsive restaurant website.
</p>


<h3 className="mt-6 font-semibold">Skills</h3>
<div className="mt-2 flex flex-wrap gap-2">
{['HTML','CSS','React','Tailwind CSS','Node.js','C/C++','JavaScript','GitHub','Figma'].map(s => (
<span key={s} className="px-3 py-1 text-sm border rounded-md">{s}</span>
))}
</div>


<h3 className="mt-6 font-semibold">Interests</h3>
<p className="mt-2 text-slate-700 dark:text-slate-300">Cricket, Basketball, Hackathons, Team Sports and Continuous Learning.</p>
</section>
)
}