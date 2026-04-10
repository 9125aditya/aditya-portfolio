import React from 'react'


export default function About(){
return (
<section className="max-w-3xl">
<h2 className="text-2xl font-bold">About Me</h2>
<p className="mt-4 text-slate-700 dark:text-slate-300">
I’m Aditya Singh, a Computer Science student passionate about building clean, functional, and user-friendly web experiences. I enjoy turning ideas into reality using modern tools like React, Tailwind CSS, and Vite, while continuously improving my design and problem-solving skills.
</p>
<p className="mt-4 text-slate-700 dark:text-slate-300">
Alongside development, I also love exploring cybersecurity — especially understanding how systems work, how they break, and how to secure them. I’ve completed hands-on cyber simulations, gaining practical experience in threat analysis and defensive strategies.
</p>
<p className="mt-4 text-slate-700 dark:text-slate-300">
I’m always curious, always learning, and always excited to take on new projects that challenge my creativity and technical ability.
</p>



<h3 className="mt-6 font-semibold">Tech Stack</h3>

<div className="mt-4 space-y-4">

  {/* Languages */}
  <div>
    <h4 className="font-medium">Languages</h4>
    <div className="mt-2 flex flex-wrap gap-2">
      {['JavaScript','Java', 'C/C++', 'HTML5', 'CSS3'].map(s => (
        <span key={s} className="px-3 py-1 text-sm border rounded-md">{s}</span>
      ))}
    </div>
  </div>

  {/* Frontend */}
  <div>
    <h4 className="font-medium">Frontend</h4>
    <div className="mt-2 flex flex-wrap gap-2">
      {['React.js', 'React Native', 'Tailwind CSS'].map(s => (
        <span key={s} className="px-3 py-1 text-sm border rounded-md">{s}</span>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div>
    <h4 className="font-medium">Backend</h4>
    <div className="mt-2 flex flex-wrap gap-2">
      {['Node.js', 'Express.js', 'MongoDB'].map(s => (
        <span key={s} className="px-3 py-1 text-sm border rounded-md">{s}</span>
      ))}
    </div>
  </div>

  {/* Tools */}
  <div>
    <h4 className="font-medium">Tools</h4>
    <div className="mt-2 flex flex-wrap gap-2">
      {['Git & GitHub', 'Postman', 'VS Code'].map(s => (
        <span key={s} className="px-3 py-1 text-sm border rounded-md">{s}</span>
      ))}
    </div>
  </div>

</div>


<h3 className="mt-6 font-semibold">Interests</h3>
<p className="mt-2 text-slate-700 dark:text-slate-300">Cricket, Basketball, Hackathons, Team Sports and Continuous Learning.</p>
</section>
)
}