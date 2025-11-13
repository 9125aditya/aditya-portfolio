import React from 'react'
import { motion } from 'framer-motion'


export default function ProjectCard({project}){
return (
<motion.article whileHover={{ y: -6 }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
<h3 className="text-lg font-semibold mb-2">{project.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.desc}</p>
<div className="flex items-center gap-3">
{project.stack.map(s => <span key={s} className="text-xs px-2 py-1 rounded-md border">{s}</span>)}
<a href={project.link} className="ml-auto text-sm underline">View</a>
</div>
</motion.article>
)
}