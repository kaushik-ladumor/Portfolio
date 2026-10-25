# Kaushik Ladumor — Portfolio

A responsive personal portfolio built with React and Vite. It presents Kaushik's profile, skills, professional experience, selected projects, education, and contact details in a dark, lime-accented design.

## Live demo

[kaushik-ladumor-portfolio.netlify.app](https://kaushik-ladumor-portfolio.netlify.app/)

## Features

- Responsive desktop and mobile layouts with section-aware navigation
- Ubuntu typography and a dark theme with lime accents
- Animated hero, scroll reveals, and reduced-motion support
- Experience, project, skills, and education sections
- Contact form powered by EmailJS
- Downloadable resume PDF

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React
- EmailJS Browser SDK

## Getting started

Requirements: Node.js and npm versions compatible with the Vite version in `Portfolio/package.json`.

```bash
git clone https://github.com/kaushik-ladumor/Portfolio.git
cd Portfolio/Portfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create a production build:

```bash
npm run build
npm run preview
```

## Contact form setup

The contact form uses EmailJS. Set the service ID, template ID, and public key in `Portfolio/src/components/Contact.jsx` to the values for your EmailJS account.

## Project structure

```text
Portfolio/
├── public/                 # Static assets, portrait, and downloadable resume
├── src/
│   ├── components/         # Portfolio sections and navigation
│   ├── data/               # Portfolio content
│   └── hooks/              # Scroll and intersection-observer hooks
├── index.html
└── package.json
```
