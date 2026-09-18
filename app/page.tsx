"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Language = "pt" | "en";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>("pt");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem(
      "language"
    ) as Language | null;

    if (savedTheme === "light") {
      setDarkMode(false);
    }

    if (savedLanguage === "pt" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.toLowerCase();

      if (!browserLanguage.startsWith("pt")) {
        setLanguage("en");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const copyText = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);

    setCopied(label);

    setTimeout(() => {
      setCopied(null);
    }, 1800);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const translations = {
    pt: {
      nav: {
        about: "Sobre",
        education: "Formação",
        experience: "Experiência",
        projects: "Projetos",
        knowledge: "Conhecimentos",
        contact: "Contacto",
      },

      hero: {
        eyebrow: "Estudante de Engenharia Informática",

        description:
          "Estudante de Engenharia Informática na UTAD, interessado em tecnologia, desenvolvimento de software e novas oportunidades para aprender, criar e evoluir.",

        download: "Download CV",
        github: "GitHub",
      },

      about: {
        label: "Sobre mim",

        title: "Curioso por tecnologia e sempre disposto a aprender.",

        paragraphs: [
          "Sou estudante de Engenharia Informática na Universidade de Trás-os-Montes e Alto Douro.",

          "Considero-me uma pessoa responsável, organizada, carismática e com facilidade em trabalhar em equipa.",

          "Procuro oportunidades onde possa continuar a aprender, aplicar os conhecimentos adquiridos no curso e desenvolver experiência profissional.",
        ],
      },

      education: {
        label: "Formação",

        title: "Percurso académico",

        computerEngineering: "Licenciatura em Engenharia Informática",

        university: "Universidade de Trás-os-Montes e Alto Douro",

        universityDate: "2023 — Atual",

        secondaryCourse: "Curso de Ciências Socioeconómicas",

        secondarySchool: "Escola Secundária São Pedro",

        secondaryDate: "2020 — 2023",
      },

      experience: {
        label: "Experiência",

        title: "Experiência profissional",

        items: [
          {
            role: "Operador de Loja",
            company: "Worten — Vila Real",
            year: "2025 — Atual",
          },

          {
            role: "Operador de Loja",
            company: "SportZone — Vila Real",
            year: "2025",
          },

          {
            role: "Voluntariado Jovem para a Natureza e Florestas",
            company: "IPDJ",
            year: "2022 — 2024",
          },
        ],
      },

      projects: {
        label: "Projetos",

        title: "Alguns projetos que desenvolvi.",

        github: "Ver GitHub",

        items: [
          {
            number: "01",
            title: "Moodle CSV Tool",

            description:
              "Aplicação desenvolvida para importar perguntas em CSV, converter conteúdos para Moodle XML e gerir quizzes.",

            tech: ["Python", "Flask"],
          },

          {
            number: "02",
            title: "Text Normalizer",

            description:
              "Ferramenta para extrair, limpar e normalizar texto de documentos, com deteção de idioma e processamento de conteúdo.",

            tech: ["Python", "Streamlit"],
          },

          {
            number: "03",
            title: "Portfolio Website",

            description:
              "Portfolio pessoal criado para apresentar formação, experiência e projetos através de uma experiência web moderna.",

            tech: ["Next.js", "TypeScript"],
          },
        ],
      },

      knowledge: {
        label: "Conhecimentos",

        title: "Áreas abordadas ao longo da licenciatura.",

        items: [
          {
            number: "01",

            title: "Programação & Algoritmos",

            description:
              "Programação procedural, orientada a objetos e funcional, algoritmos e estruturas de dados.",
          },

          {
            number: "02",

            title: "Software & Desenvolvimento",

            description:
              "Engenharia de software, planeamento e desenvolvimento, gestão de projetos e programação multiplataforma.",
          },

          {
            number: "03",

            title: "Dados & Sistemas",

            description:
              "Bases de dados, introdução à ciência dos dados, sistemas operativos e redes de dados.",
          },

          {
            number: "04",

            title: "Computação & Interfaces",

            description:
              "Computação gráfica, interação pessoa-computador e fundamentos de compiladores.",
          },

          {
            number: "05",

            title: "Fundamentos Computacionais",

            description:
              "Matemática discreta, métodos computacionais, métodos estatísticos, álgebra linear e análise matemática.",
          },
        ],
      },

      languages: {
        label: "Idiomas",

        items: [
          {
            language: "Português",
            level: "Nativo",
          },

          {
            language: "Inglês",
            level: "Intermédio",
          },

          {
            language: "Espanhol",
            level: "Básico",
          },

          {
            language: "Francês",
            level: "Básico",
          },
        ],
      },

      contact: {
        label: "Contacto",

        title: "Vamos falar.",

        description:
          "Estou disponível para novas oportunidades, projetos e desafios na área da tecnologia.",

        email: "Email",

        phone: "Telefone",

        location: "Localização",

        github: "GitHub",

        copy: "Copiar",

        copied: "Copiado ✓",

        locationValue: "Vila Real, Portugal",
      },

      themeTitle: "Alterar tema",

      topTitle: "Voltar ao topo",
    },

    en: {
      nav: {
        about: "About",
        education: "Education",
        experience: "Experience",
        projects: "Projects",
        knowledge: "Knowledge",
        contact: "Contact",
      },

      hero: {
        eyebrow: "Computer Engineering Student",

        description:
          "Computer Engineering student at UTAD, interested in technology, software development and new opportunities to learn, build and grow.",

        download: "Download CV",

        github: "GitHub",
      },

      about: {
        label: "About me",

        title: "Curious about technology and always willing to learn.",

        paragraphs: [
          "I am a Computer Engineering student at the University of Trás-os-Montes and Alto Douro.",

          "I consider myself responsible, organized, approachable and comfortable working as part of a team.",

          "I am looking for opportunities where I can continue learning, apply the knowledge gained throughout my degree and build professional experience.",
        ],
      },

      education: {
        label: "Education",

        title: "Academic background",

        computerEngineering:
          "Bachelor's Degree in Computer Engineering",

        university:
          "University of Trás-os-Montes and Alto Douro",

        universityDate: "2023 — Current",

        secondaryCourse: "Socioeconomic Sciences",

        secondarySchool: "São Pedro Secondary School",

        secondaryDate: "2020 — 2023",
      },

      experience: {
        label: "Experience",

        title: "Professional experience",

        items: [
          {
            role: "Retail Assistant",
            company: "Worten — Vila Real",
            year: "2025 — Current",
          },

          {
            role: "Retail Assistant",
            company: "SportZone — Vila Real",
            year: "2025",
          },

          {
            role: "Youth Volunteer for Nature and Forests",
            company: "IPDJ",
            year: "2022 — 2024",
          },
        ],
      },

      projects: {
        label: "Projects",

        title: "Some projects I have developed.",

        github: "View GitHub",

        items: [
          {
            number: "01",

            title: "Moodle CSV Tool",

            description:
              "Application developed to import questions from CSV files, convert content into Moodle XML and manage quizzes.",

            tech: ["Python", "Flask"],
          },

          {
            number: "02",

            title: "Text Normalizer",

            description:
              "Tool designed to extract, clean and normalize text from documents, including language detection and content processing.",

            tech: ["Python", "Streamlit"],
          },

          {
            number: "03",

            title: "Portfolio Website",

            description:
              "Personal portfolio created to present my education, experience and projects through a modern web experience.",

            tech: ["Next.js", "TypeScript"],
          },
        ],
      },

      knowledge: {
        label: "Knowledge",

        title: "Areas covered throughout my degree.",

        items: [
          {
            number: "01",

            title: "Programming & Algorithms",

            description:
              "Procedural, object-oriented and functional programming, algorithms and data structures.",
          },

          {
            number: "02",

            title: "Software & Development",

            description:
              "Software engineering, planning and development, project management and cross-platform programming.",
          },

          {
            number: "03",

            title: "Data & Systems",

            description:
              "Databases, introduction to data science, operating systems and data networks.",
          },

          {
            number: "04",

            title: "Computing & Interfaces",

            description:
              "Computer graphics, human-computer interaction and compiler fundamentals.",
          },

          {
            number: "05",

            title: "Computational Foundations",

            description:
              "Discrete mathematics, computational methods, statistics, linear algebra and mathematical analysis.",
          },
        ],
      },

      languages: {
        label: "Languages",

        items: [
          {
            language: "Portuguese",
            level: "Native",
          },

          {
            language: "English",
            level: "Intermediate",
          },

          {
            language: "Spanish",
            level: "Basic",
          },

          {
            language: "French",
            level: "Basic",
          },
        ],
      },

      contact: {
        label: "Contact",

        title: "Let's talk.",

        description:
          "I am open to new opportunities, projects and challenges in the technology field.",

        email: "Email",

        phone: "Phone",

        location: "Location",

        github: "GitHub",

        copy: "Copy",

        copied: "Copied ✓",

        locationValue: "Vila Real, Portugal",
      },

      themeTitle: "Change theme",

      topTitle: "Back to top",
    },
  };

  const t = translations[language];

  const theme = darkMode
    ? {
        page: "bg-[#080808] text-[#f5f5f5]",

        header: "bg-[#080808]/95 border-white/10",

        card: "bg-[#111111] border-white/10",

        muted: "text-zinc-400",

        subtle: "text-zinc-500",

        border: "border-white/10",

        secondaryButton:
          "border-white/15 text-white hover:border-[#9A6B4A] hover:bg-[#9A6B4A]/15",

        dropdown: "bg-[#111111] border-white/10",

        dropdownHover: "hover:bg-white/5",
      }
    : {
        page: "bg-[#F7F5F2] text-[#171717]",

        header: "bg-[#F7F5F2]/95 border-black/10",

        card: "bg-white border-black/10",

        muted: "text-zinc-600",

        subtle: "text-zinc-500",

        border: "border-black/10",

        secondaryButton:
          "border-black/15 text-black hover:border-[#9A6B4A] hover:bg-[#9A6B4A]/10",

        dropdown: "bg-white border-black/10",

        dropdownHover: "hover:bg-black/5",
      };

  const circleRadius = 22;

  const circleCircumference = 2 * Math.PI * circleRadius;

  const circleOffset =
    circleCircumference -
    (scrollProgress / 100) * circleCircumference;

  const sectionClass = `
    mx-5 max-w-[calc(100%-2.5rem)]
    scroll-mt-28
    border-t
    py-12

    sm:mx-6
    sm:max-w-[calc(100%-3rem)]
    sm:py-20

    md:mx-auto
    md:max-w-6xl
    md:scroll-mt-20
    md:px-6
    md:py-24

    ${theme.border}
  `;

  return (
    <main
      className={`relative min-h-screen transition-colors duration-500 ${theme.page}`}
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none fixed left-1/2 top-[-300px] z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#9A6B4A]/20 blur-[180px]" />

      {/* HEADER */}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${theme.header}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <a
            href="#inicio"
            className="text-lg font-bold tracking-tight sm:text-xl"
          >
            D<span className="text-[#9A6B4A]">V</span>.
          </a>

          {/* MENU DESKTOP */}

          <nav
            className={`hidden items-center gap-7 text-sm md:flex ${theme.muted}`}
          >
            <a
              href="#sobre"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.about}
            </a>

            <a
              href="#formacao"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.education}
            </a>

            <a
              href="#experiencia"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.experience}
            </a>

            <a
              href="#projetos"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.projects}
            </a>

            <a
              href="#conhecimentos"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.knowledge}
            </a>

            <a
              href="#contacto"
              className="transition hover:text-[#B47C55]"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {/* LANGUAGE */}

            <div
              ref={languageMenuRef}
              className="relative"
            >
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-medium transition sm:h-10 sm:px-4 sm:text-sm ${theme.secondaryButton}`}
              >
                {language.toUpperCase()}

                <span
                  className={`text-[9px] transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {languageOpen && (
                <div
                  className={`absolute right-0 top-11 min-w-[150px] overflow-hidden rounded-2xl border shadow-2xl sm:top-12 ${theme.dropdown}`}
                >
                  <button
                    onClick={() => {
                      setLanguage("pt");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full justify-between px-4 py-3 text-sm ${theme.dropdownHover}`}
                  >
                    Português

                    {language === "pt" && (
                      <span className="text-[#9A6B4A]">✓</span>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full justify-between px-4 py-3 text-sm ${theme.dropdownHover}`}
                  >
                    English

                    {language === "en" && (
                      <span className="text-[#9A6B4A]">✓</span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* THEME */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition sm:h-10 sm:w-10 ${theme.secondaryButton}`}
              aria-label={t.themeTitle}
              title={t.themeTitle}
            >
              {darkMode ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}

        <nav
          className={`
            flex overflow-x-auto border-t px-5
            md:hidden
            ${theme.border}
            ${theme.muted}
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          `}
        >
          <div className="flex min-w-max items-center gap-6 py-2.5 text-[11px] font-medium">
            <a
              href="#sobre"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.about}
            </a>

            <a
              href="#formacao"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.education}
            </a>

            <a
              href="#experiencia"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.experience}
            </a>

            <a
              href="#projetos"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.projects}
            </a>

            <a
              href="#conhecimentos"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.knowledge}
            </a>

            <a
              href="#contacto"
              className="whitespace-nowrap transition hover:text-[#B47C55]"
            >
              {t.nav.contact}
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}

      <section
        id="inicio"
        className="
          relative z-10 mx-auto grid max-w-6xl
          grid-cols-[1.4fr_0.75fr] items-center gap-4
          px-5 pb-12 pt-32

          sm:grid-cols-[1.35fr_0.65fr]
          sm:gap-8 sm:px-6 sm:pb-20 sm:pt-36

          md:min-h-[100svh]
          md:grid-cols-[1.25fr_0.75fr]
          md:items-center md:gap-14
          md:pb-24 md:pt-32
        "
      >
        {/* TEXTO */}

        <div className="min-w-0">
          {/* AQUI ESTÁ A CORREÇÃO MOBILE */}
         <div className="mb-3 flex items-center gap-2 sm:mb-6 sm:gap-3">
  <span className="h-px w-5 shrink-0 bg-[#9A6B4A] sm:w-10" />

  <p className="whitespace-nowrap text-[7px] uppercase leading-4 tracking-[0.12em] text-[#B47C55] sm:text-xs sm:tracking-[0.25em] md:text-sm md:tracking-[0.32em]">
    {t.hero.eyebrow}
  </p>
</div>

          <h1 className="text-[2.5rem] font-bold leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-8xl">
            Diogo

            <span
              className={`block ${
                darkMode
                  ? "text-zinc-500"
                  : "text-zinc-400"
              }`}
            >
              Veiga.
            </span>
          </h1>

          <p
            className={`mt-5 max-w-xl text-[12px] leading-5 sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8 ${theme.muted}`}
          >
            {t.hero.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3 md:mt-10 md:gap-4">
            <a
              href="/Diogo_Veiga_CV.pdf"
              download
              className="
                rounded-full bg-[#9A6B4A]
                px-3.5 py-2 text-[11px] font-medium text-white
                transition hover:bg-[#B47C55]
                sm:px-5 sm:py-2.5 sm:text-sm
                md:px-7 md:py-3 md:text-base
              "
            >
              {t.hero.download}
            </a>

            <a
              href="https://github.com/diogoveiga81699"
              target="_blank"
              rel="noreferrer"
              className={`
                rounded-full border
                px-3.5 py-2 text-[11px] font-medium
                transition
                sm:px-5 sm:py-2.5 sm:text-sm
                md:px-7 md:py-3 md:text-base
                ${theme.secondaryButton}
              `}
            >
              {t.hero.github}
            </a>
          </div>
        </div>

        {/* FOTO */}

        <div className="flex min-w-0 justify-end">
          <div className="relative w-full max-w-[135px] sm:max-w-[210px] md:max-w-[310px]">
            <div
              className="
                absolute -inset-1.5 rounded-[1.45rem]
                border border-[#9A6B4A]/15
                sm:-inset-2 sm:rounded-[1.8rem]
                md:-inset-3 md:rounded-[2.4rem]
              "
            />

            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[#9A6B4A]/35 shadow-2xl sm:rounded-[1.6rem] md:rounded-[2rem] ${theme.card}`}
            >
              <Image
                src="/diogo.jpg"
                alt="Diogo Veiga"
                fill
                priority
                sizes="(max-width: 639px) 135px, (max-width: 767px) 210px, 310px"
                className="object-cover object-[center_35%] transition duration-500 hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}

      <section
        id="sobre"
        className={sectionClass}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
          {t.about.label}
        </p>

        <div className="mt-5 grid gap-6 md:mt-6 md:grid-cols-2 md:gap-12">
          <h2 className="max-w-xl text-[2rem] font-semibold leading-[1.12] sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>

          <div
            className={`space-y-3 text-[15px] leading-7 sm:space-y-4 sm:text-base sm:leading-8 ${theme.muted}`}
          >
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}

      <section
        id="formacao"
        className={sectionClass}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
          {t.education.label}
        </p>

        <h2 className="mt-3 text-[2rem] font-semibold sm:mt-4 sm:text-4xl">
          {t.education.title}
        </h2>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          <article
            className={`rounded-3xl border p-5 sm:p-7 ${theme.card}`}
          >
            <p className={`text-xs sm:text-sm ${theme.subtle}`}>
              {t.education.universityDate}
            </p>

            <h3 className="mt-3 text-lg font-semibold sm:text-xl">
              {t.education.computerEngineering}
            </h3>

            <p
              className={`mt-2 text-sm sm:text-base ${theme.muted}`}
            >
              {t.education.university}
            </p>
          </article>

          <article
            className={`rounded-3xl border p-5 sm:p-7 ${theme.card}`}
          >
            <p className={`text-xs sm:text-sm ${theme.subtle}`}>
              {t.education.secondaryDate}
            </p>

            <h3 className="mt-3 text-lg font-semibold sm:text-xl">
              {t.education.secondaryCourse}
            </h3>

            <p
              className={`mt-2 text-sm sm:text-base ${theme.muted}`}
            >
              {t.education.secondarySchool}
            </p>
          </article>
        </div>
      </section>

      {/* EXPERIÊNCIA */}

      <section
        id="experiencia"
        className={sectionClass}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
          {t.experience.label}
        </p>

        <h2 className="mt-3 text-[2rem] font-semibold sm:mt-4 sm:text-4xl">
          {t.experience.title}
        </h2>

        <div className="mt-6 space-y-3 sm:mt-12 sm:space-y-5">
          {t.experience.items.map((experience) => (
            <article
              key={`${experience.company}-${experience.year}`}
              className={`flex flex-col justify-between gap-3 rounded-3xl border p-5 sm:p-7 md:flex-row ${theme.card}`}
            >
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {experience.role}
                </h3>

                <p
                  className={`mt-1 text-sm sm:text-base ${theme.muted}`}
                >
                  {experience.company}
                </p>
              </div>

              <p className={`text-xs sm:text-sm ${theme.subtle}`}>
                {experience.year}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJETOS */}

      <section
        id="projetos"
        className={sectionClass}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
          {t.projects.label}
        </p>

        <div className="mt-3 flex flex-col justify-between gap-3 sm:mt-4 md:flex-row md:items-end">
          <h2 className="text-[2rem] font-semibold leading-tight sm:text-4xl">
            {t.projects.title}
          </h2>

          <a
            href="https://github.com/diogoveiga81699"
            target="_blank"
            rel="noreferrer"
            className={`text-sm underline underline-offset-4 transition hover:text-[#B47C55] ${theme.muted}`}
          >
            {t.projects.github}
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className={`flex min-h-[230px] flex-col rounded-3xl border p-5 transition hover:-translate-y-1 hover:border-[#9A6B4A] sm:min-h-[310px] sm:p-7 ${theme.card}`}
            >
              <p className="text-xs text-[#B47C55] sm:text-sm">
                {project.number}
              </p>

              <h3 className="mt-5 text-xl font-semibold sm:mt-8 sm:text-2xl">
                {project.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7 ${theme.muted}`}
              >
                {project.description}
              </p>

              <div className="mt-auto flex gap-4 pt-5 sm:pt-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#B47C55] sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONHECIMENTOS */}

      <section
        id="conhecimentos"
        className={sectionClass}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
          {t.knowledge.label}
        </p>

        <h2 className="mt-3 max-w-2xl text-[2rem] font-semibold leading-tight sm:mt-4 sm:text-4xl">
          {t.knowledge.title}
        </h2>

        <div className="mt-6 grid gap-x-10 sm:mt-12 md:grid-cols-2">
          {t.knowledge.items.map((item) => (
            <article
              key={item.number}
              className={`grid grid-cols-[32px_1fr] gap-3 border-t py-5 sm:grid-cols-[48px_1fr] sm:gap-4 sm:py-7 ${theme.border}`}
            >
              <p className="text-xs text-[#B47C55] sm:text-sm">
                {item.number}
              </p>

              <div>
                <h3 className="text-base font-semibold sm:text-xl">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7 ${theme.muted}`}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* IDIOMAS */}

        <div
          className={`mt-9 border-t pt-8 sm:mt-16 sm:pt-12 ${theme.border}`}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
            {t.languages.label}
          </p>

          <div className="mt-5 grid gap-1 sm:mt-8 sm:grid-cols-2 sm:gap-2">
            {t.languages.items.map((item) => (
              <div
                key={item.language}
                className={`flex items-center justify-between border-b py-3.5 sm:py-4 ${theme.border}`}
              >
                <p className="text-sm font-medium sm:text-base">
                  {item.language}
                </p>

                <p
                  className={`text-sm sm:text-base ${theme.muted}`}
                >
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className={sectionClass}
      >
        <div
          className={`rounded-[1.5rem] border p-5 sm:rounded-[2rem] sm:p-12 ${theme.card}`}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B47C55] sm:text-sm">
            {t.contact.label}
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold sm:mt-5 sm:text-5xl">
            {t.contact.title}
          </h2>

          <p
            className={`mt-3 max-w-2xl text-sm leading-6 sm:mt-5 sm:text-base ${theme.muted}`}
          >
            {t.contact.description}
          </p>

          <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {/* EMAIL */}

            <div
              className={`rounded-2xl border p-4 sm:p-5 ${theme.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] sm:text-xs ${theme.subtle}`}
                  >
                    {t.contact.email}
                  </p>

                  <a
                    href="mailto:diogocoto77@gmail.com"
                    className="mt-2 block truncate text-sm font-medium transition hover:text-[#B47C55] sm:text-base"
                  >
                    diogocoto77@gmail.com
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText(
                      "email",
                      "diogocoto77@gmail.com"
                    )
                  }
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs transition ${theme.secondaryButton}`}
                >
                  {copied === "email"
                    ? t.contact.copied
                    : t.contact.copy}
                </button>
              </div>
            </div>

            {/* TELEFONE */}

            <div
              className={`rounded-2xl border p-4 sm:p-5 ${theme.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] sm:text-xs ${theme.subtle}`}
                  >
                    {t.contact.phone}
                  </p>

                  <a
                    href="tel:+351969621904"
                    className="mt-2 block text-sm font-medium transition hover:text-[#B47C55] sm:text-base"
                  >
                    +351 969 621 904
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText(
                      "telefone",
                      "+351969621904"
                    )
                  }
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs transition ${theme.secondaryButton}`}
                >
                  {copied === "telefone"
                    ? t.contact.copied
                    : t.contact.copy}
                </button>
              </div>
            </div>

            {/* LOCALIZAÇÃO */}

            <div
              className={`rounded-2xl border p-4 sm:p-5 ${theme.card}`}
            >
              <p
                className={`text-[10px] uppercase tracking-[0.2em] sm:text-xs ${theme.subtle}`}
              >
                {t.contact.location}
              </p>

              <p className="mt-2 text-sm font-medium sm:text-base">
                {t.contact.locationValue}
              </p>
            </div>

            {/* GITHUB */}

            <div
              className={`rounded-2xl border p-4 sm:p-5 ${theme.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] sm:text-xs ${theme.subtle}`}
                  >
                    {t.contact.github}
                  </p>

                  <a
                    href="https://github.com/diogoveiga81699"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block truncate text-sm font-medium transition hover:text-[#B47C55] sm:text-base"
                  >
                    @diogoveiga81699
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText(
                      "github",
                      "https://github.com/diogoveiga81699"
                    )
                  }
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs transition ${theme.secondaryButton}`}
                >
                  {copied === "github"
                    ? t.contact.copied
                    : t.contact.copy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className={`
          mx-5 flex max-w-[calc(100%-2.5rem)]
          flex-col gap-2 border-t py-7 text-xs

          sm:mx-6
          sm:max-w-[calc(100%-3rem)]
          sm:flex-row
          sm:justify-between
          sm:py-8
          sm:text-sm

          md:mx-auto
          md:max-w-6xl
          md:px-6

          ${theme.border}
          ${theme.subtle}
        `}
      >
        <p>© 2026 Diogo Veiga</p>
      </footer>

      {/* SCROLL PROGRESS */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        title={t.topTitle}
        aria-label={t.topTitle}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 56"
          className="-rotate-90"
        >
          <circle
            cx="28"
            cy="28"
            r={circleRadius}
            fill={darkMode ? "#111111" : "#ffffff"}
            stroke={darkMode ? "#2a2a2a" : "#dddddd"}
            strokeWidth="2"
          />

          <circle
            cx="28"
            cy="28"
            r={circleRadius}
            fill="transparent"
            stroke="#9A6B4A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleOffset}
          />
        </svg>
      </button>
    </main>
  );
}