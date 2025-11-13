import React from 'react'


export default function Footer(){
return (
<footer className="py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
<div className="container mx-auto px-4 text-center text-sm text-slate-600 dark:text-slate-400">
© {new Date().getFullYear()} Aditya Singh — Built with React & Tailwind • <a href="https://linkedin.com/in/aditya-singh-a1867a324" className="underline">LinkedIn</a>
</div>
</footer>
)
}