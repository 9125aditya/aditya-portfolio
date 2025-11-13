module.exports = {
content: [
'./index.html',
'./src/**/*.{js,jsx,ts,tsx}'
],
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#0ea5a4',
accent: '#7c3aed',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-6px)' }
}
},
animation: {
float: 'float 6s ease-in-out infinite'
}
}
},
plugins: [],
}