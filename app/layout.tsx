import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://simoneairhorn.com"),

  title: "PANIC Records | Sito Ufficiale",

  description: "Sito ufficiale di PANIC Records. Scopri SimoneAirHorn.",

  applicationName: "PANIC Records",

  authors: [
    {
      name: "PANIC Records",
    },
  ],

  creator: "PANIC Records",
  publisher: "PANIC Records",

  keywords: [
    "PANIC Records",
    "SimoneAirHorn",
    "Rap Italiano",
    "Trap",
    "Hip Hop",
    "Musica",
    "Artista",
    "Etichetta Discografica",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://simoneairhorn.com",
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://simoneairhorn.com",
    siteName: "PANIC Records",
    title: "PANIC Records | Sito Ufficiale",
    description: "Sito ufficiale di PANIC Records. Scopri SimoneAirHorn.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "PANIC Records",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PANIC Records | Sito Ufficiale",
    description: "Sito ufficiale di PANIC Records. Scopri SimoneAirHorn.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="it">
    <body className="antialiased">
      {children}
    </body>
  </html>
);
}