"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="page shop-page">
      <Navbar />

      <div className="shop-content">
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

        <section className="shop-experiences" aria-label="Scegli la tua esperienza">
          <article className="shop-card">
            <Image
              src="/images/shop/shopmusic.png"
              alt="Music — collezione musicale e vinile UP"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 700px) 48vw, (max-width: 1024px) 48vw, 50vw"
              className="shop-card-image"
            />
            <Link
              href="/shop/coming-soon"
              className="shop-card-button"
              aria-label="Scopri la sezione Music — Coming Soon"
            >
              <Image
                src="/images/shop/shopacquistapulsante.png"
                alt="Coming Soon"
                width={1920}
                height={1080}
                sizes="(max-width: 700px) 28vw, 20vw"
                className="shop-button-image"
              />
            </Link>
          </article>

          <article className="shop-card">
            <Image
              src="/images/shop/shopmerch.png"
              alt="Merch — abbigliamento ufficiale"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 700px) 48vw, (max-width: 1024px) 48vw, 50vw"
              className="shop-card-image"
            />
            <Link
              href="/shop/coming-soon"
              className="shop-card-button"
              aria-label="Scopri la sezione Merch — Coming Soon"
            >
              <Image
                src="/images/shop/shopacquistapulsante.png"
                alt="Coming Soon"
                width={1920}
                height={1080}
                sizes="(max-width: 700px) 28vw, 20vw"
                className="shop-button-image"
              />
            </Link>
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

        .shop-card-button {
          position: absolute;
          z-index: 2;
          top: 82%;
          left: 50%;
          display: block;
          width: 32%;
          aspect-ratio: 4.18 / 1;
          transform: translateX(-50%);
          overflow: hidden;
          cursor: pointer;
          pointer-events: auto;
        }

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
          pointer-events: none;
        }

        /* TABLET: due schede affiancate, con proporzioni compatte. */
        @media (max-width: 1024px) {
          .shop-content {
            width: 100%;
            max-width: none;
            padding: 0 0 55px;
          }

          .shop-hero {
            width: 100%;
            height: auto;
            aspect-ratio: auto;
            overflow: visible;
            margin: 0 auto 12px;
          }

          .shop-hero-image {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            transform: none;
            object-fit: contain;
          }

          .shop-experiences {
            width: calc(100% - 40px);
            max-width: 1200px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(8px, 1.5vw, 16px);
          }

          .shop-card {
            aspect-ratio: 16 / 9;
            border-width: 2px;
            border-radius: clamp(9px, 1.5vw, 18px);
          }

          .shop-card-image {
            object-fit: contain;
          }

          .shop-card-button {
            top: 80%;
            width: 42%;
          }

          .shop-card-button::before {
            inset: 2px;
          }
        }

        /* SMARTPHONE: le due schede restano AFFIANCATE. */
        @media (max-width: 700px) {
          .shop-content {
            padding: 0 0 34px;
          }

          .shop-hero {
            margin-bottom: 5px;
          }

          .shop-experiences {
            width: calc(100% - 20px);
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .shop-card {
            min-width: 0;
            aspect-ratio: 1.42 / 1;
            border-width: 1.5px;
            border-radius: 8px;
          }

          .shop-card-image {
            object-fit: cover;
            object-position: center;
          }

          .shop-card-button {
            top: 79%;
            width: 58%;
            aspect-ratio: 4.18 / 1;
          }

          .shop-card-button::before {
            inset: 1px;
          }
        }

        /* Smartphone molto stretti: mantieni le colonne senza far collassare i pulsanti. */
        @media (max-width: 380px) {
          .shop-experiences {
            width: calc(100% - 16px);
            gap: 6px;
          }

          .shop-card {
            aspect-ratio: 1.28 / 1;
            border-radius: 7px;
          }

          .shop-card-button {
            width: 64%;
          }
        }

        /* TABLET VERTICALE: conserva le due colonne. */
        @media (min-width: 701px) and (max-width: 1024px) and (orientation: portrait) {
          .shop-content {
            padding-bottom: 50px;
          }

          .shop-hero {
            margin-bottom: 10px;
          }

          .shop-experiences {
            width: calc(100% - 48px);
            gap: 14px;
          }

          .shop-card-button {
            width: 36%;
          }
        }

        /* TABLET E SMARTPHONE ORIZZONTALI. */
        @media (max-width: 1024px) and (orientation: landscape) {
          .shop-content {
            padding-bottom: 35px;
          }

          .shop-hero {
            margin-bottom: 8px;
          }

          .shop-experiences {
            width: min(90%, 1200px);
            gap: 12px;
          }

          .shop-card-button {
            width: 34%;
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
