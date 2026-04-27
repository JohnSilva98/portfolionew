import Image from "next/image";
import { Home as HomeIcon, User, Zap, SquareTerminal, Mail } from "lucide-react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
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
  <nav className="fixed bottom-0 w-full flex justify-around py-3 bg-[#1C1B1B] md:hidden ">
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><HomeIcon />Inicio</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><User />Sobre</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><Zap />Habilidades</a>
    <a href="#" className="flex flex-col items-center hover:text-secondary transition-colors duration-300 focus:text-primary"><SquareTerminal />Projetos</a>
  </nav>

      <main className="flex-1">
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
          <div className="flex gap-4 my-3 ">
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300" href="https://www.linkedin.com/in/jonathansilva98/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 md:w-12 md:h-12" /></a>
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300" href="https://github.com/JohnSilva98" target="_blank"><FontAwesomeIcon icon={faGithub} className="w-8 h-8 md:w-12 md:h-12" /></a>
            <a className="text-[#00D1FF] hover:text-secondary transition-colors duration-300" href="mailto:bsilva.jonathan@outlook.com" target="_blank">
              <Mail className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </div>
        </section>
        {/* sobre */}
        <section>
          <h1>Sobre mim</h1>
        </section>
      </main>

    </div>
  );
}