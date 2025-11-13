import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Bella Vista Restaurant Website',
    desc: 'Responsive restaurant website with menus, contact form, and modern UI.',
    stack: ['HTML', 'CSS', 'Tailwind'],
    link: 'https://bellavista-aditya.netlify.app/', // 🔗 live website
  },
  {
    title: 'Cyber Job Simulation (Deloitte)',
    desc: 'Practical cybersecurity simulation exercises focusing on threat analysis.',
    stack: ['Security', 'Simulation'],
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_bTwo9KZeHm8xFo6CE_1750925550437_completion_certificate.pdf', // 🔗 certificate link
  },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-8 text-sm text-slate-600 dark:text-slate-400">
        More projects are in progress — I love building small, focused web apps and learning security tooling.
      </div>
    </section>
  )
}
