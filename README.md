# Startup Website - INXCODE

A **single-page startup website** built with **React, Vite, and Tailwind CSS** for the INXCODE internship task.  

## Features
- Header, Hero, About, Services, Portfolio, Contact, Footer  
- Mobile-first responsive design  
- Contact form with basic validation  
- Portfolio section with hover animations  

## Project Structure
```
inxcode-website/
├─ public/               # Static assets like favicon
├─ src/
│  ├─ assets/            # Images and icons
│  ├─ components/        # Header, Hero, About, Services, Portfolio, Contact, Footer
│  ├─ data/              # JSON for services and portfolio
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ README.md
```

## Setup Instructions
1. Clone the repository:
```
git clone https://github.com/MDharshan27/Startup-Website-INXCODE.git
```

2.Install dependencies:
```
npm install
```
3.Run development server:
```
npm run dev
```
4.Build for production:
```
npm run build
```
5.Preview production build:
```
npm run preview
```

##Decisions Made
- Used Vite for fast React setup and HMR.
- Tailwind CSS for responsive utility-first styling.
- Components kept modular for scalability.
- Minimal React state; JSON used for data-driven sections.

##Live Demo
https://startup-website-inxcode.netlify.app

##GitHub Repository
https://github.com/MDharshan27/Startup-Website-INXCODE
