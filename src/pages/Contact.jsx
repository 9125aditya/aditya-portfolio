import React from 'react'


export default function Contact(){
return (
<section className="max-w-2xl">
<h2 className="text-2xl font-bold">Get in touch</h2>
<p className="mt-3 text-slate-600 dark:text-slate-400">I'm open to internships, freelance projects and collaborations. Reach out via email or LinkedIn.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<ContactCard label="Email" value="aditya912singh@gmail.com" />
<ContactCard label="Phone" value="8851529310" />
<ContactCard label="LinkedIn" value="linkedin.com/in/aditya-singh-a1867a324" link="https://linkedin.com/in/aditya-singh-a1867a324" />
<ContactCard label="Location" value="India" />
</div>


<form className="mt-8 grid gap-3">
<input placeholder="Name" className="p-3 rounded-md border" />
<input placeholder="Email" className="p-3 rounded-md border" />
<textarea placeholder="Message" className="p-3 rounded-md border" rows={5} />
<button type="button" className="px-4 py-2 bg-primary text-white rounded-md w-fit">Send Message</button>
</form>
</section>
)
}


function ContactCard({label, value, link}){
return (
<div className="p-4 border rounded-md bg-white dark:bg-slate-800">
<div className="text-xs text-slate-500">{label}</div>
{link ? <a href={link} className="font-medium underline">{value}</a> : <div className="font-medium">{value}</div>}
</div>
)
}