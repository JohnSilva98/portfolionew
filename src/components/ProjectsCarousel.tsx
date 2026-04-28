"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projetos = [
  {
    id: 1,
    titulo: "Controle Financeiro",
    descricao: "Aplicativo para controle de finanças pessoais com gráficos e relatórios.",
    imagem: "/assets/img/easynizze.png",
    techs: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    demo: "https://easynizze.vercel.app/",
    codigo: "https://github.com/JohnSilva98/mywallet"
  },
  {
    id: 2,
    titulo: "FIPElog",
    descricao: "Aplicativo para consulta de preços de veículos baseado na tabela FIPE.",
    imagem: "/assets/img/fipelog.png",
    techs: ["Next.js", "React", "Tailwind"],
    demo: "https://fipelog.vercel.app/",
    codigo: "https://github.com/JohnSilva98/fipelog"
  },
  {
    id: 3,
    titulo: "NRK Garage",
    descricao: "Painel administrativo para oficinas inspirado em kanban.(utilize as seguintes credenciais ficticias para acessar: email:admin@nrkgarage.com senha:123456",
    imagem: "/assets/img/nrkgarage.png",
    techs: ["React", "TypeScript", "Next.js","Tailwind"],
    demo: "https://nrkgarage.vercel.app/",
    codigo: "https://github.com/JohnSilva98/nrkgarage"
  },
  {
    id: 4,
    titulo: "CryptoDash",
    descricao: "Dashboard moderna de criptomoedas que usa a API coingecko para consultar valores.",
    imagem: "/assets/img/cryptodash.png",
    techs: ["React", "TypeScript", "Recharts", "Next.js","Tailwind"],
    demo: "https://cryptodash-roan.vercel.app/",
    codigo: "https://github.com/JohnSilva98/cryptodash"
  },
  {
    id: 5,
    titulo: "Calculador de Idade",
    descricao: "Calculador de idade com base na data de nascimento.",
    imagem: "/assets/img/ageCalculator.png",
    techs: ["HTML","CSS", "JavaScript"],
    demo: " https://calc-ageapp.vercel.app/",
    codigo: "https://github.com/JohnSilva98/age-calculator-app-main"
  },
  {
    id: 6,
    titulo: "Chronodoro - pomodoro tracker",
    descricao: "Aplicativo de gerenciamento de tempo baseado no método Pomodoro.",
    imagem: "/assets/img/chronodoro.png",
    techs: [ "TypeScript", "Next.js","Tailwind","Toastify","Lucide React"],
    demo: "https://chronodoro.vercel.app/",
    codigo: "https://github.com/JohnSilva98/chronodoro"
  }
];

interface ProjectsCarouselProps {
  translations: {
    title: string;
    subtitle: string;
    demoBtn: string;
    codeBtn: string;
  };
  lang: "pt" | "en";
}

// Projetos em português
const projetosPT = [
  {
    id: 1,
    titulo: "Controle Financeiro",
    descricao: "Aplicativo para controle de finanças pessoais com gráficos e relatórios.",
    imagem: "/assets/img/easynizze.png",
    techs: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    demo: "https://easynizze.vercel.app/",
    codigo: "https://github.com/JohnSilva98/mywallet"
  },
  {
    id: 2,
    titulo: "FIPElog",
    descricao: "Aplicativo para consulta de preços de veículos baseado na tabela FIPE.",
    imagem: "/assets/img/fipelog.png",
    techs: ["Next.js", "React", "Tailwind"],
    demo: "https://fipelog.vercel.app/",
    codigo: "https://github.com/JohnSilva98/fipelog"
  },
  {
    id: 3,
    titulo: "NRK Garage",
    descricao: "Painel administrativo para oficinas inspirado em kanban. (Use credenciais: admin@nrkgarage.com / 123456)",
    imagem: "/assets/img/nrkgarage.png",
    techs: ["React", "TypeScript", "Next.js", "Tailwind"],
    demo: "https://nrkgarage.vercel.app/",
    codigo: "https://github.com/JohnSilva98/nrkgarage"
  },
  {
    id: 4,
    titulo: "CryptoDash",
    descricao: "Dashboard moderna de criptomoedas que usa a API CoinGecko para consultar valores.",
    imagem: "/assets/img/cryptodash.png",
    techs: ["React", "TypeScript", "Recharts", "Next.js", "Tailwind"],
    demo: "https://cryptodash-roan.vercel.app/",
    codigo: "https://github.com/JohnSilva98/cryptodash"
  },
  {
    id: 5,
    titulo: "Calculador de Idade",
    descricao: "Calculador de idade com base na data de nascimento.",
    imagem: "/assets/img/ageCalculator.png",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://calc-ageapp.vercel.app/",
    codigo: "https://github.com/JohnSilva98/age-calculator-app-main"
  },
  {
    id: 6,
    titulo: "Chronodoro",
    descricao: "Aplicativo de gerenciamento de tempo baseado no método Pomodoro.",
    imagem: "/assets/img/chronodoro.png",
    techs: ["TypeScript", "Next.js", "Tailwind", "Toastify", "Lucide React"],
    demo: "https://chronodoro.vercel.app/",
    codigo: "https://github.com/JohnSilva98/chronodoro"
  }
];

// Projetos em inglês
const projetosEN = [
  {
    id: 1,
    titulo: "Financial Control",
    descricao: "Application for personal finance management with charts and reports.",
    imagem: "/assets/img/easynizze.png",
    techs: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    demo: "https://easynizze.vercel.app/",
    codigo: "https://github.com/JohnSilva98/mywallet"
  },
  {
    id: 2,
    titulo: "FIPElog",
    descricao: "Application for vehicle price consultation based on FIPE table.",
    imagem: "/assets/img/fipelog.png",
    techs: ["Next.js", "React", "Tailwind"],
    demo: "https://fipelog.vercel.app/",
    codigo: "https://github.com/JohnSilva98/fipelog"
  },
  {
    id: 3,
    titulo: "NRK Garage",
    descricao: "Administrative dashboard for workshops inspired by kanban. (Use credentials: admin@nrkgarage.com / 123456)",
    imagem: "/assets/img/nrkgarage.png",
    techs: ["React", "TypeScript", "Next.js", "Tailwind"],
    demo: "https://nrkgarage.vercel.app/",
    codigo: "https://github.com/JohnSilva98/nrkgarage"
  },
  {
    id: 4,
    titulo: "CryptoDash",
    descricao: "Modern cryptocurrency dashboard using CoinGecko API to check prices.",
    imagem: "/assets/img/cryptodash.png",
    techs: ["React", "TypeScript", "Recharts", "Next.js", "Tailwind"],
    demo: "https://cryptodash-roan.vercel.app/",
    codigo: "https://github.com/JohnSilva98/cryptodash"
  },
  {
    id: 5,
    titulo: "Age Calculator",
    descricao: "Age calculator based on birth date.",
    imagem: "/assets/img/ageCalculator.png",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://calc-ageapp.vercel.app/",
    codigo: "https://github.com/JohnSilva98/age-calculator-app-main"
  },
  {
    id: 6,
    titulo: "Chronodoro",
    descricao: "Time management application based on the Pomodoro method.",
    imagem: "/assets/img/chronodoro.png",
    techs: ["TypeScript", "Next.js", "Tailwind", "Toastify", "Lucide React"],
    demo: "https://chronodoro.vercel.app/",
    codigo: "https://github.com/JohnSilva98/chronodoro"
  }
];

export default function ProjectsCarousel({ translations, lang }: ProjectsCarouselProps) {
  const [projetoAtual, setProjetoAtual] = useState(0);

  // Selecionar array de projetos baseado no idioma
  const projetos = lang === "pt" ? projetosPT : projetosEN;

  const proximoProjeto = () => {
    setProjetoAtual((prev) => (prev + 1) % projetos.length);
  };

  const projetoAnterior = () => {
    setProjetoAtual((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  const projeto = projetos[projetoAtual];

  return (
    <section className="mt-5 p-2 flex flex-col items-center w-full max-w-4xl mx-auto">
      <h1 className="text-primary text-2xl md:text-3xl font-bold">{translations.title}</h1>
      <p className="text-gray-300 mb-6">{translations.subtitle}</p>

      {/* Carrossel */}
      <div className="relative w-full flex justify-center">
        {/* Botão anterior */}
        <button
          onClick={projetoAnterior}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral/80 hover:bg-neutral text-white p-2 rounded-full transition-colors -ml-2 md:-ml-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Card do projeto */}
        <div className="bg-[#1C1B1B] rounded-2xl overflow-hidden mx-8 md:mx-12">
          {/* Imagem */}
          <div className="relative w-full aspect-video bg-neutral-800">
            <Image
              src={projeto.imagem}
              alt={projeto.titulo}
              fill
              className="object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-6">
            <h2 className="text-primary text-xl md:text-2xl font-bold mb-2">{projeto.titulo}</h2>
            <p className="text-gray-300 mb-4">{projeto.descricao}</p>

            {/* Techs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projeto.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="flex sm:flex-row flex-col gap-4">
              <a
                href={projeto.demo}
                target="_blank"
                className="flex items-center gap-2 bg-primary text-neutral px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {translations.demoBtn}
              </a>
              <a
                href={projeto.codigo}
                target="_blank"
                className="flex items-center gap-2 bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-600 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                {translations.codeBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={proximoProjeto}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral/80 hover:bg-neutral text-white p-2 rounded-full transition-colors -mr-2 md:-mr-4"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 mt-4">
        {projetos.map((_, index) => (
          <button
            key={index}
            onClick={() => setProjetoAtual(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === projetoAtual ? "bg-primary" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
