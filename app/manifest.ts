import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PANIC Records",
    short_name: "PANIC",
    description:
      "Sito ufficiale di PANIC Records. Scopri SimoneAirHorn, musica, video, progetti e tutte le ultime novità dell'etichetta.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}