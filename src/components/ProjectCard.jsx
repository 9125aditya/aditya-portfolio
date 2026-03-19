import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
        {project.desc}
      </p>

      {/* Bottom Section */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-md border border-slate-300 dark:border-slate-600"
            >
              {s}
            </span>
          ))}
        </div>

        {/* View Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow hover:scale-105 transition duration-300"
        >
          View
        </a>
      </div>
    </motion.article>
  )
}