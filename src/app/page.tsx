"use client";

import Image from "next/image";
import { Home as HomeIcon, User, Zap, SquareTerminal, Mail } from "lucide-react";
import { faLinkedin, faGithub, faHtml5, faCss3, faReact, faTailwindCss, faJs, faGit, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      
      <header>
        <nav className="flex items-center justify-between px-2 py-2">
    
            <h1 className="text-xl font-bold">
              JONATHAN SILVA
            </h1>
          

          {/* Menu */}
          <ul className="hidden md:flex gap-6">
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#home">Home</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#sobre">Sobre</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#projetos">Projetos</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors duration-300 "><a className="focus:text-primary focus:underline" href="#contato">Contato</a></li>
          </ul>

          {/* Botão */}
          <a
            className="bg-primary text-neutral px-1 py-1 rounded cursor-pointer hover:bg-neutral"
            href="https://wa.me/5511986332860"
            target="_blank"
          >
            Me Contrate
          </a>

        </nav>

      </header>
       {/* MOBILE MENU (BOTTOM) */}
  <nav className="fixed bottom-0 w-full flex justify-around py-3 bg-[#1C1B1B] md:hidden z-50">
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><HomeIcon />Inicio</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><User />Sobre</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><Zap />Habilidades</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><SquareTerminal />Projetos</a>
  </nav>

      <main className="flex-1 pb-20 md:pb-0">
        {/* Conteúdo */}

        {/* intro */}
        <section className="flex flex-col items-center justify-center mt-10 p-6">
          <Image src="/assets/img/photo.png" 
          alt="Profile" 
          width={200} 
          height={200}
          className="rounded-full border-2 border-primary"/>

          <p className="">Olá, eu sou Jonathan Silva e sou um <span className="text-primary">Dev Front-End</span></p>
          {/* botoes sobre e baixar curriculo */}

          <div className="flex gap-4 my-4 ">
            <a href="#sobre" className="bg-primary text-neutral px-4 py-2 rounded cursor-pointer hover:bg-white transition-all duration-300">Sobre</a>
            <a href="#curriculo" className="bg-primary text-neutral px-4 py-2 rounded cursor-pointer hover:bg-white transition-all duration-300">Baixar Currículo</a>
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
        <section className="mt-5 p-2 flex flex-col items-center">
          <h1 className="text-primary text-2xl md:text-3xl font-bold mx-4 my-4 ">Sobre mim</h1>
          <p className="mx-4 my-4">Formado em Análise e desenvolvimento de sistemas, estou estudando tecnologias front-end como react, react native, nextJS, tailwind e typescript. Criando aplicativos e interfaces modernas e escaláveis</p>

          {/* tecnologias */}
          <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4">
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faHtml5} className="w-10 h-10 md:w-14 md:h-14 text-orange-600" />
              <span className="text-sm text-gray-300">HTML5</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faCss3} className="w-10 h-10 md:w-14 md:h-14 text-blue-500" />
              <span className="text-sm text-gray-300">CSS3</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faJs} className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />
              <span className="text-sm text-gray-300">JavaScript</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faTypescript} className="w-10 h-10 md:w-14 md:h-14 text-blue-600" />
              <span className="text-sm text-gray-300">TypeScript</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faReact} className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />
              <span className="text-sm text-gray-300">React</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faTailwindCss} className="w-10 h-10 md:w-14 md:h-14 text-cyan-500" />
              <span className="text-sm text-gray-300">Tailwind</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faGit} className="w-10 h-10 md:w-14 md:h-14 text-orange-500" />
              <span className="text-sm text-gray-300">Git</span>
            </div>
            <div className="bg-[#1C1B1B] rounded-xl p-4 flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10 md:w-14 md:h-14 text-white" />
              <span className="text-sm text-gray-300">GitHub</span>
            </div>
          </div>
        </section>
        <ProjectsCarousel />

        {/* contato */}
        <section className="mt-5 p-2 flex flex-col items-center">
          <h1 className="text-primary text-2xl md:text-3xl font-bold mx-4 my-4 ">Contato</h1>
          <p className="mx-4 my-4">Entre em contato comigo através dos meus canais de comunicação</p>
          <div className="flex flex-col gap-4 bg-neutral-800 p-4 rounded-xl w-full max-w-md">
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