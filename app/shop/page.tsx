"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function ShopPage() {
  return (
    <main className="page shop-page">
      <Navbar />

      <div className="shop-content">
        {/* INTESTAZIONE COMPLETA: LOGO, SHOP E SOTTOTITOLO */}
        <header className="shop-hero">
          <Image
            src="/images/shop/shoplogoc.png"
            alt="Italy in Panic x SimoneAirHorn — Shop, scegli la tua esperienza"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="shop-hero-image"
          />
        </header>

        {/* LE DUE ESPERIENZE: SEMPRE AFFIANCATE */}
        <section className="shop-experiences" aria-label="Scegli la tua esperienza">
          <article className="shop-card">
            <Image
              src="/images/shop/shopmusic.png"
              alt="Music — collezione musicale e vinile UP"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 700px) 50vw, 50vw"
              className="shop-card-image"
            />
            <div className="shop-card-button" aria-hidden="true">
              <Image
                src="/images/shop/shopacquistapulsante.png"
                alt=""
                width={1920}
                height={1080}
                sizes="(max-width: 700px) 50vw, 50vw"
                className="shop-button-image"
              />
            </div>
          </article>

          <article className="shop-card">
            <Image
              src="/images/shop/shopmerch.png"
              alt="Merch — abbigliamento ufficiale"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 700px) 50vw, 50vw"
              className="shop-card-image"
            />
            <div className="shop-card-button" aria-hidden="true">
              <Image
                src="/images/shop/shopacquistapulsante.png"
                alt=""
                width={1920}
                height={1080}
                sizes="(max-width: 700px) 50vw, 50vw"
                className="shop-button-image"
              />
            </div>
          </article>
        </section>
      </div>

      <Footer />

      <style>{`
        .shop-page {
          min-height: 100vh;
          overflow: hidden;
          background: #000;
          color: #fff;
        }

        .shop-content {
          width: 100%;
          max-width: 1520px;
          margin: 0 auto;
          padding: 0 0 90px;
          box-sizing: border-box;
        }

        /* INTESTAZIONE: lasciata invariata */
        .shop-hero {
          position: relative;
          width: 100%;
          aspect-ratio: 1920 / 620;
          overflow: hidden;
          margin: 0 auto 4px;
        }

        .shop-hero-image {
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          transform: translateY(-50%);
          object-fit: contain;
        }

        /* Si riducono soltanto i due riquadri, non l'intestazione. */
        .shop-experiences {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: clamp(10px, 1.2vw, 20px);
          width: 80%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .shop-card {
          position: relative;
          min-width: 0;
          aspect-ratio: 2.05 / 1;
          overflow: hidden;
          border: 3px solid #CFFF04;
          border-radius: clamp(12px, 2vw, 28px);
          background: #000;
          box-sizing: border-box;
          isolation: isolate;
        }

        .shop-card-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /*
          Il file del pulsante è una tavola 1920x1080 con il pulsante
          al centro. La tavola viene ingrandita e ritagliata dentro
          una piccola finestra: resta visibile soltanto il pulsante.
          Il nero si fonde con il fondo nero del riquadro.
        */
        .shop-card-button {
          position: absolute;
          z-index: 2;
          top: 82%;
          left: 50%;
          width: 32%;
          aspect-ratio: 4.18 / 1;
          transform: translateX(-50%);
          overflow: hidden;
          pointer-events: none;
        }

        /* Fondo nero soltanto all'interno della sagoma del pulsante.
           Fuori dalla sagoma resta visibile l'immagine sottostante. */
        .shop-card-button::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 5px;
          border-radius: 999px;
          background: #000;
        }

        .shop-button-image {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center 43%;
          mix-blend-mode: screen;
        }

        /* Tablet: i riquadri restano affiancati e si riducono insieme. */
        @media (max-width: 900px) {
          .shop-content {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 65px;
          }

          .shop-experiences {
            width: 86%;
            gap: 12px;
          }

          .shop-card {
            border-width: 2px;
          }
        }

        /* Tablet verticale */
        @media (min-width: 701px) and (max-width: 1024px) and (orientation: portrait) {
          .shop-experiences {
            width: 86%;
            gap: 12px;
          }
        }

        /* Smartphone: stessa disposizione a due colonne. */
        @media (max-width: 700px) {
          .shop-content {
            width: 100%;
            padding: 0 0 45px;
          }

          .shop-experiences {
            width: 88%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
          }

          .shop-card {
            border-width: 1.5px;
            border-radius: 10px;
          }

          .shop-card-button {
            top: 82%;
            width: 32%;
          }
        }

        /* Smartphone in orizzontale: composizione invariata. */
        @media (max-width: 950px) and (max-height: 500px) and (orientation: landscape) {
          .shop-content {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 35px;
          }

          .shop-experiences {
            width: 86%;
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shop-page * {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
