import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://diogo-cv.vercel.app"),

  title: "Diogo Veiga | Portfolio",

  description: "",

  openGraph: {
    title: "Diogo Veiga | Portfolio",
    description: "",
    url: "https://diogo-cv.vercel.app",
    siteName: "Diogo Veiga | Portfolio",
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Diogo Veiga | Portfolio",
    description: "",
  },

  icons: {
    icon: "/icon",
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