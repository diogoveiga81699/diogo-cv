import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://diogo-cv.vercel.app"),
  title: "Diogo Veiga | Portfolio",
  description:
    "Portfolio de Diogo Veiga, estudante de Engenharia Informática na UTAD. Projetos, experiência, formação e contactos.",

  openGraph: {
    title: "Diogo Veiga | Portfolio",
    description:
      "Estudante de Engenharia Informática na UTAD. Conhece os meus projetos, experiência e percurso académico.",
    url: "https://diogo-cv.vercel.app",
    siteName: "Diogo Veiga | Portfolio",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Diogo Veiga Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diogo Veiga | Portfolio",
    description:
      "Estudante de Engenharia Informática na UTAD. Projetos, experiência e percurso académico.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
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