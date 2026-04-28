# Jonathan Silva - Portfolio

<p align="center">
  <img src="public/assets/img/photo.png" alt="Profile" width="150" style="border-radius: 50%;"/>
</p>

<p align="center">
  <a href="https://jonathansilva.dev" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-00D1FF?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio"/>
  </a>
  <a href="https://www.linkedin.com/in/jonathansilva98/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="mailto:bsilva.jonathan@outlook.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</p>

---

## Overview

A modern, responsive portfolio website built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**. Features bilingual support (Portuguese/English), dark/light theme toggle, and an interactive project carousel.

**Live Demo:** [https://jonathan-silva.vercel.app](https://jonathan-silva.vercel.app)

---

## Features

- **Bilingual Support**: Full Portuguese and English translations
- **Theme Toggle**: Dark/Light mode with localStorage persistence
- **Responsive Design**: Mobile-first approach with bottom navigation
- **Interactive Carousel**: Manual project showcase with navigation
- **Smooth Scrolling**: Anchor navigation between sections
- **Fixed Header**: Sticky navigation with scroll offset
- **Project Showcase**: 6 featured projects with descriptions and tech stacks
- **Resume Download**: Direct PDF download functionality
- **Social Links**: Direct links to LinkedIn, GitHub, and Email

---

## Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling

### UI/UX
- **Lucide React** - Modern icon library
- **FontAwesome** - Brand icons (LinkedIn, GitHub, etc.)

### Deployment
- **Vercel** - Production hosting

---

## Project Structure

```
portfolionew/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles & themes
│   └── components/
│       └── ProjectsCarousel.tsx  # Project showcase carousel
├── public/
│   └── assets/
│       ├── img/              # Images (projects, profile)
│       └── docs/             # Resume PDF
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JohnSilva98/portfolionew.git
cd portfolionew
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

---

## Customization

### Adding Projects

Edit `src/components/ProjectsCarousel.tsx` and add to `projetosPT` and `projetosEN` arrays:

```typescript
{
  id: 7,
  titulo: "Your Project",
  descricao: "Project description...",
  imagem: "/assets/img/your-project.png",
  techs: ["Next.js", "React", "Tailwind"],
  demo: "https://your-project.vercel.app/",
  codigo: "https://github.com/yourusername/repo"
}
```

### Updating Resume

Replace `public/assets/docs/Jonathan Da Silva Beserra.pdf` with your resume.

### Colors & Theme

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #00D1FF;
  --secondary: #7000FF;
  --background: #0a0a0a;
}
```

---

## Performance

- **Lighthouse Score**: 95+ Performance
- **Core Web Vitals**: Optimized images with Next.js Image
- **SEO**: Meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is licensed under the MIT License.

---

## Contact

**Jonathan Silva**
- Email: bsilva.jonathan@outlook.com
- LinkedIn: [linkedin.com/in/jonathansilva98](https://www.linkedin.com/in/jonathansilva98/)
- GitHub: [github.com/JohnSilva98](https://github.com/JohnSilva98)

---

<p align="center">
  Made with ❤️ using Next.js & Tailwind CSS
</p>
