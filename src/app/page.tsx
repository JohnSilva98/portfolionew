"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Home as HomeIcon, User, SquareTerminal, Mail, Sun, Moon, Download } from "lucide-react";
import { faLinkedin, faGithub, faHtml5, faCss3, faReact, faTailwindCss, faJs, faGit, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsCarousel from "@/components/ProjectsCarousel";

// Sistema de traduções
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      hireMe: "Me Contrate"
    },
    hero: {
      greeting: "Olá, eu sou Jonathan Silva e sou um",
      role: "Dev Front-End",
      aboutBtn: "Sobre",
      resumeBtn: "Baixar Currículo"
    },
    about: {
      title: "Sobre mim",
      description: "Formado em Análise e desenvolvimento de sistemas, estou estudando tecnologias front-end como react, react native, nextJS, tailwind e typescript. Criando aplicativos e interfaces modernas e escaláveis"
    },
    projects: {
      title: "Projetos",
      subtitle: "Confira alguns dos principais projetos que realizei durante minha trajetória",
      demoBtn: "Demonstração",
      codeBtn: "Ver Código"
    },
    contact: {
      title: "Contato",
      subtitle: "Entre em contato comigo através dos meus canais de comunicação"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      greeting: "Hello, I'm Jonathan Silva and I'm a",
      role: "Front-End Dev",
      aboutBtn: "About",
      resumeBtn: "Download Resume"
    },
    about: {
      title: "About Me",
      description: "Graduated in Systems Analysis and Development, I'm studying front-end technologies such as React, React Native, NextJS, Tailwind and TypeScript. Creating modern and scalable applications and interfaces."
    },
    projects: {
      title: "Projects",
      subtitle: "Check out some of the main projects I've done during my journey",
      demoBtn: "Live Demo",
      codeBtn: "View Code"
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch with me through my communication channels"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = translations[lang];


  // Download currículo
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/docs/Jonathan Da Silva Beserra.pdf";
    link.download = "Jonathan_Silva_Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-1 flex-col min-h-screen">
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-neutral-800">
        <nav className="flex items-center justify-between px-4 py-3">
    
            <h1 className="text-xl font-bold">
              JONATHAN SILVA
            </h1>
          

          {/* Menu */}
          <ul className="hidden md:flex gap-6">
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#home">{t.nav.home}</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#sobre">{t.nav.about}</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#projetos">{t.nav.projects}</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#contato">{t.nav.contact}</a></li>
          </ul>

          {/* Botões de Idioma, Tema e Contrate */}
          <div className="flex items-center gap-3">
            {/* Toggle Idioma */}
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm"
              title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <span className="text-lg">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
              <span className="hidden sm:inline">{lang === "pt" ? "PT" : "EN"}</span>
            </button>

       

            {/* Botão Contrate */}
            <a
              className="bg-primary text-neutral px-3 py-2 rounded cursor-pointer hover:bg-primary/80 transition-colors duration-300 text-sm font-medium"
              href="https://wa.me/5511986332860"
              target="_blank"
            >
              {t.nav.hireMe}
            </a>
          </div>

        </nav>

      </header>
       {/* MOBILE MENU (BOTTOM) */}
  <nav className="fixed bottom-0 w-full flex justify-around py-3 bg-neutral md:hidden z-50 border-t border-neutral-800">
    <a href="#home" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary text-xs"><HomeIcon className="w-5 h-5"/>{t.nav.home}</a>
    <a href="#sobre" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary text-xs"><User className="w-5 h-5"/>{t.nav.about}</a>
    <a href="#projetos" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary text-xs"><SquareTerminal className="w-5 h-5"/>{t.nav.projects}</a>
    <a href="#contato" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary text-xs"><Mail className="w-5 h-5"/>{t.nav.contact}</a>
  </nav>

      <main className="flex-1 pt-16 pb-20 md:pb-0">
        {/* Conteúdo */}

        {/* intro */}
        <section id="home" className="flex flex-col items-center justify-center mt-10 p-6 scroll-mt-20">
          <Image src="/assets/img/photo.png" 
          alt="Profile" 
          width={200} 
          height={200}
          className="rounded-full border-2 border-primary"/>

          <p className="">{t.hero.greeting} <span className="text-primary">{t.hero.role}</span></p>
          {/* botoes sobre e baixar curriculo */}

          <div className="flex gap-4 my-4 flex-wrap justify-center">
            <a href="#sobre" className="bg-primary text-neutral px-4 py-2 rounded cursor-pointer hover:bg-white transition-all duration-300">{t.hero.aboutBtn}</a>
            <button 
              onClick={downloadResume}
              className="bg-primary text-neutral px-4 py-2 rounded cursor-pointer hover:bg-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t.hero.resumeBtn}
            </button>
          </div>

          {/* social links */}
          <div className="flex gap-4 my-2 ">
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300 flex items-center justify-center w-12 h-12 md:w-16 md:h-16" href="https://www.linkedin.com/in/jonathansilva98/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-3xl md:text-4xl" /></a>
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300 flex items-center justify-center w-12 h-12 md:w-16 md:h-16" href="https://github.com/JohnSilva98" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-3xl md:text-4xl" /></a>
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300 flex items-center justify-center w-12 h-12 md:w-16 md:h-16" href="mailto:bsilva.jonathan@outlook.com" target="_blank">
              <Mail className="w-12 h-12 md:w-12 md:h-12 shrink" />
            </a>
          </div>
        </section>
        {/* sobre */}
        <section id="sobre" className="mt-5 p-2 flex flex-col items-center scroll-mt-20">
          <h1 className="text-primary text-2xl md:text-3xl font-bold mx-4 my-4 ">{t.about.title}</h1>
          <p className="mx-4 my-4 max-w-2xl text-center">{t.about.description}</p>

          {/* tecnologias */}
          <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4">
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faHtml5} className="w-10 h-10 md:w-14 md:h-14 text-orange-600" />
              <span className="text-sm text-gray-300">HTML5</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faCss3} className="w-10 h-10 md:w-14 md:h-14 text-blue-500" />
              <span className="text-sm text-gray-300">CSS3</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faJs} className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />
              <span className="text-sm text-gray-300">JavaScript</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faTypescript} className="w-10 h-10 md:w-14 md:h-14 text-blue-600" />
              <span className="text-sm text-gray-300">TypeScript</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faReact} className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />
              <span className="text-sm text-gray-300">React</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faTailwindCss} className="w-10 h-10 md:w-14 md:h-14 text-cyan-500" />
              <span className="text-sm text-gray-300">Tailwind</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faGit} className="w-10 h-10 md:w-14 md:h-14 text-orange-500" />
              <span className="text-sm text-gray-300">Git</span>
            </div>
            <div className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10 md:w-14 md:h-14 text-white" />
              <span className="text-sm text-gray-300">GitHub</span>
            </div>
          </div>
        </section>
        <section id="projetos" className="w-full scroll-mt-20">
          <ProjectsCarousel translations={t.projects} lang={lang} />
        </section>

        {/* contato */}
        <section id="contato" className="mt-5 p-2 flex flex-col items-center scroll-mt-20">
          <h1 className="text-primary text-2xl md:text-3xl font-bold mx-4 my-4 ">{t.contact.title}</h1>
          <p className="mx-4 my-4">{t.contact.subtitle}</p>
          <div className="flex flex-col gap-4 bg-tertiary p-4 rounded-xl w-full max-w-md">
            <a href="mailto:bsilva.jonathan@outlook.com" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Mail className="w-12 h-12 md:w-12 md:h-12" />
            bsilva.jonathan@outlook.com
          </a>
          <a href="https://www.linkedin.com/in/jonathansilva98/" target="_blank" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
            LinkedIn
          </a>
          </div>
        
        </section>
        

      </main>

    </div>
  );
}