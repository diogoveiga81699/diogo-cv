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
    const savedLanguage = localStorage.getItem("language") as Language | null;

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
          { language: "Português", level: "Nativo" },
          { language: "Inglês", level: "Intermédio" },
          { language: "Espanhol", level: "Básico" },
          { language: "Francês", level: "Básico" },
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

      footer: {
        built: "Desenvolvido com Next.js",
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
        computerEngineering: "Bachelor's Degree in Computer Engineering",
        university: "University of Trás-os-Montes and Alto Douro",
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
          { language: "Portuguese", level: "Native" },
          { language: "English", level: "Intermediate" },
          { language: "Spanish", level: "Basic" },
          { language: "French", level: "Basic" },
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

      footer: {
        built: "Built with Next.js",
      },

      themeTitle: "Change theme",
      topTitle: "Back to top",
    },
  };

  const t = translations[language];

  const theme = darkMode
    ? {
        page: "bg-[#080808] text-[#f5f5f5]",
        header: "bg-[#080808]/80 border-white/10",
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
        header: "bg-[#F7F5F2]/80 border-black/10",
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
    circleCircumference - (scrollProgress / 100) * circleCircumference;

  return (
    <main
      className={`relative min-h-screen transition-colors duration-500 ${theme.page}`}
    >
      <div className="pointer-events-none fixed left-1/2 top-[-300px] z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#9A6B4A]/20 blur-[180px]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${theme.header}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-lg font-bold tracking-tight">
            D<span className="text-[#9A6B4A]">V</span>.
          </a>

          <nav className={`hidden items-center gap-7 text-sm md:flex ${theme.muted}`}>
            <a href="#sobre" className="hover:text-[#B47C55]">
              {t.nav.about}
            </a>
            <a href="#formacao" className="hover:text-[#B47C55]">
              {t.nav.education}
            </a>
            <a href="#experiencia" className="hover:text-[#B47C55]">
              {t.nav.experience}
            </a>
            <a href="#projetos" className="hover:text-[#B47C55]">
              {t.nav.projects}
            </a>
            <a href="#conhecimentos" className="hover:text-[#B47C55]">
              {t.nav.knowledge}
            </a>
            <a href="#contacto" className="hover:text-[#B47C55]">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div ref={languageMenuRef} className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium ${theme.secondaryButton}`}
              >
                {language.toUpperCase()}
                <span
                  className={
                    languageOpen
                      ? "rotate-180 text-[10px]"
                      : "text-[10px]"
                  }
                >
                  ▼
                </span>
              </button>

              {languageOpen && (
                <div
                  className={`absolute right-0 top-12 min-w-[160px] overflow-hidden rounded-2xl border shadow-2xl ${theme.dropdown}`}
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

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${theme.secondaryButton}`}
              aria-label={t.themeTitle}
              title={t.themeTitle}
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-24 pt-32 md:grid-cols-[1.25fr_0.75fr]"
      >
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#9A6B4A]" />

            <p className="text-sm uppercase tracking-[0.32em] text-[#B47C55]">
              {t.hero.eyebrow}
            </p>
          </div>

          <h1 className="text-6xl font-bold tracking-[-0.05em] sm:text-8xl">
            Diogo
            <span
              className={`block ${
                darkMode ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              Veiga.
            </span>
          </h1>

          <p className={`mt-7 max-w-2xl text-lg leading-8 ${theme.muted}`}>
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Diogo_Veiga_CV.pdf"
              download
              className="rounded-full bg-[#9A6B4A] px-7 py-3 font-medium text-white transition hover:bg-[#B47C55]"
            >
              {t.hero.download}
            </a>

            <a
              href="https://github.com/diogoveiga81699"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border px-7 py-3 font-medium transition ${theme.secondaryButton}`}
            >
              {t.hero.github}
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[310px]">
            <div className="absolute -inset-3 rounded-[2.4rem] border border-[#9A6B4A]/15" />

            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#9A6B4A]/35 shadow-2xl ${theme.card}`}
            >
              <Image
                src="/diogo.jpg"
                alt="Diogo Veiga"
                fill
                priority
                className="object-cover object-[center_35%] transition duration-500 hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#9A6B4A]/10 blur-2xl" />
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
          {t.about.label}
        </p>

        <div className="mt-7 grid gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            {t.about.title}
          </h2>

          <div className={`space-y-5 leading-8 ${theme.muted}`}>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="formacao"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
          {t.education.label}
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          {t.education.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className={`rounded-3xl border p-7 ${theme.card}`}>
            <p className={theme.subtle}>
              {t.education.universityDate}
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              {t.education.computerEngineering}
            </h3>

            <p className={`mt-2 ${theme.muted}`}>
              {t.education.university}
            </p>
          </article>

          <article className={`rounded-3xl border p-7 ${theme.card}`}>
            <p className={theme.subtle}>
              {t.education.secondaryDate}
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              {t.education.secondaryCourse}
            </h3>

            <p className={`mt-2 ${theme.muted}`}>
              {t.education.secondarySchool}
            </p>
          </article>
        </div>
      </section>

      <section
        id="experiencia"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
          {t.experience.label}
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          {t.experience.title}
        </h2>

        <div className="mt-12 space-y-5">
          {t.experience.items.map((experience) => (
            <article
              key={`${experience.company}-${experience.year}`}
              className={`flex flex-col justify-between gap-5 rounded-3xl border p-7 md:flex-row ${theme.card}`}
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className={`mt-1 ${theme.muted}`}>
                  {experience.company}
                </p>
              </div>

              <p className={theme.subtle}>
                {experience.year}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projetos"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
          {t.projects.label}
        </p>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold">
            {t.projects.title}
          </h2>

          <a
            href="https://github.com/diogoveiga81699"
            target="_blank"
            rel="noreferrer"
            className={`text-sm underline underline-offset-4 ${theme.muted}`}
          >
            {t.projects.github}
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className={`flex min-h-[310px] flex-col rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-[#9A6B4A] ${theme.card}`}
            >
              <p className="text-sm text-[#B47C55]">
                {project.number}
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className={`mt-4 leading-7 ${theme.muted}`}>
                {project.description}
              </p>

              <div className="mt-auto flex gap-4 pt-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-[#B47C55]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="conhecimentos"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
          {t.knowledge.label}
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold">
          {t.knowledge.title}
        </h2>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {t.knowledge.items.map((item) => (
            <article
              key={item.number}
              className={`grid grid-cols-[48px_1fr] gap-4 border-t py-7 ${theme.border}`}
            >
              <p className="text-sm text-[#B47C55]">
                {item.number}
              </p>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className={`mt-3 max-w-xl leading-7 ${theme.muted}`}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-16 border-t pt-12 ${theme.border}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
            {t.languages.label}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.languages.items.map((item) => (
              <div
                key={item.language}
                className={`flex items-center justify-between border-b py-4 ${theme.border}`}
              >
                <p className="font-medium">
                  {item.language}
                </p>

                <p className={theme.muted}>
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className={`mx-auto max-w-6xl border-t px-6 py-24 ${theme.border}`}
      >
        <div className={`rounded-[2rem] border p-8 sm:p-12 ${theme.card}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-[#B47C55]">
            {t.contact.label}
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            {t.contact.title}
          </h2>

          <p className={`mt-5 max-w-2xl ${theme.muted}`}>
            {t.contact.description}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className={`rounded-2xl border p-5 ${theme.card}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${theme.subtle}`}
                  >
                    {t.contact.email}
                  </p>

                  <a
                    href="mailto:diogocoto77@gmail.com"
                    className="mt-2 block font-medium hover:text-[#B47C55]"
                  >
                    diogocoto77@gmail.com
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText("email", "diogocoto77@gmail.com")
                  }
                  className={`rounded-lg border px-3 py-2 text-xs ${theme.secondaryButton}`}
                >
                  {copied === "email"
                    ? t.contact.copied
                    : t.contact.copy}
                </button>
              </div>
            </div>

            <div className={`rounded-2xl border p-5 ${theme.card}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${theme.subtle}`}
                  >
                    {t.contact.phone}
                  </p>

                  <a
                    href="tel:+351969621904"
                    className="mt-2 block font-medium hover:text-[#B47C55]"
                  >
                    +351 969 621 904
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText("telefone", "+351969621904")
                  }
                  className={`rounded-lg border px-3 py-2 text-xs ${theme.secondaryButton}`}
                >
                  {copied === "telefone"
                    ? t.contact.copied
                    : t.contact.copy}
                </button>
              </div>
            </div>

            <div className={`rounded-2xl border p-5 ${theme.card}`}>
              <p
                className={`text-xs uppercase tracking-[0.2em] ${theme.subtle}`}
              >
                {t.contact.location}
              </p>

              <p className="mt-2 font-medium">
                {t.contact.locationValue}
              </p>
            </div>

            <div className={`rounded-2xl border p-5 ${theme.card}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${theme.subtle}`}
                  >
                    {t.contact.github}
                  </p>

                  <a
                    href="https://github.com/diogoveiga81699"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-medium hover:text-[#B47C55]"
                  >
                    @diogoveiga81699
                  </a>
                </div>

                <button
                  onClick={() =>
                    copyText(
                      "github",
                      "https://github.com/diogoveiga81699",
                    )
                  }
                  className={`rounded-lg border px-3 py-2 text-xs ${theme.secondaryButton}`}
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

      <footer
        className={`mx-auto flex max-w-6xl justify-between border-t px-6 py-8 text-sm ${theme.border} ${theme.subtle}`}
      >
        <p>© 2026 Diogo Veiga</p>
        <p>{t.footer.built}</p>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition hover:scale-110"
        title={t.topTitle}
      >
        <svg width="56" height="56" className="-rotate-90">
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