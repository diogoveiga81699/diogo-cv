import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diogo Veiga | Portfolio",
  description:
    "Portfolio de Diogo Veiga, estudante de Engenharia Informática na UTAD. Projetos, experiência, formação e contactos.",
  metadataBase: new URL("https://diogo-cv.vercel.app"),

  openGraph: {
    title: "Diogo Veiga | Portfolio",
    description:
      "Estudante de Engenharia Informática na UTAD. Conhece os meus projetos, experiência e percurso académico.",
    url: "https://diogo-cv.vercel.app",
    siteName: "Diogo Veiga | Portfolio",
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diogo Veiga | Portfolio",
    description:
      "Estudante de Engenharia Informática na UTAD. Projetos, experiência e percurso académico.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}