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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Diogo Veiga | Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diogo Veiga | Portfolio",
    description: "",
    images: ["/opengraph-image"],
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