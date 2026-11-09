"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CollectionProps = {
  color: string;
  images: string[];
};

function ProductDisplay({
  color,
  images,
}: {
  color: string;
  images: string[];
}) {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);

  const rotationRef = useRef(0);
  const draggingRef = useRef(false);
  const lastX = useRef(0);
  const displayRef = useRef<HTMLDivElement>(null);

  // Mantiene la profondità sempre pari a metà della larghezza reale:
  // così le quattro facce restano proporzionate su ogni schermo.
  useEffect(() => {
    const element = displayRef.current;
    if (!element) return;

    const updateDepth = () => {
      const width = element.getBoundingClientRect().width;
      element.style.setProperty("--depth", `${width / 2}px`);
    };

    updateDepth();

    const observer = new ResizeObserver(updateDepth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!draggingRef.current) {
        rotationRef.current -= 0.2;
        setRotation(rotationRef.current);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    draggingRef.current = true;
    setDragging(true);
    lastX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!draggingRef.current) return;

    const delta = event.clientX - lastX.current;
    lastX.current = event.clientX;

    rotationRef.current += delta * 0.5;
    setRotation(rotationRef.current);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  return (
    <div
      ref={displayRef}
      className={`shop-display ${dragging ? "dragging" : ""}`}
      style={{ "--display-color": color } as React.CSSProperties}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="shop-display-inner"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {images.map((image, index) => (
          <div
            className={`shop-display-face face-${index + 1}`}
            key={image}
          >
            <Image
              src={image}
              alt={`Collezione - immagine ${index + 1}`}
              fill
              sizes="(max-width: 700px) 94vw, 520px"
              draggable={false}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionSection({ color, images }: CollectionProps) {
  return (
    <section className="shop-collection">
      <ProductDisplay color={color} images={images} />
    </section>
  );
}

export default function ShopPage() {
  return (
    <main className="page shop-page">

      <Navbar />

      <div className="content-1300 page-content shop-content">

        {/* LOGO E COLLABORAZIONE */}

        <header className="shop-intro">

          <Image
            src="/images/shop/logo-i-i-p-x-s.png"
            alt="Italy in Panic"
            width={650}
            height={200}
            priority
            className="shop-logo"
          />


          {/* IMMAGINE COMING SOON */}

          <Image
            src="/images/shop/coming-soon.png"
            alt="Coming Soon"
            width={700}
            height={150}
            priority
            className="shop-coming-soon-image"
          />

        </header>

        {/* LINEA LUNGA SOTTO COMING SOON */}

        <div className="shop-wide-divider" />

        {/* BASIC COLLECTION */}

        <CollectionSection
          color="#CFFF04"
          images={[
            "/images/shop/shop1.png",
            "/images/shop/shop2.png",
            "/images/shop/shop3.png",
            "/images/shop/shop4.png",
          ]}
        />

        {/* LINEA CORTA TRA LE DUE COLLEZIONI */}

        <div className="shop-section-divider" />

        {/* LOADING EDITION */}

        <CollectionSection
          color="#39FF14"
          images={[
            "/images/shop/shop5.png",
            "/images/shop/shop6.png",
            "/images/shop/shop7.png",
            "/images/shop/shop8.png",
          ]}
        />

      </div>

      <Footer />

      <style>{`

        /* PAGINA */

        .shop-page {
          background: #000;
          color: #fff;
          overflow: hidden;
        }

        .shop-content {
          padding-top: 78px;
          padding-bottom: 100px;
        }

        /* LOGO */

        .shop-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 85px;
        }

        .shop-logo {
          display: block;
          width: min(75%, 320px);
          height: auto;
          object-fit: contain;
        }
/* IMMAGINE COMING SOON */

        .shop-coming-soon-image {
          display: block;
          width: min(78%, 580px);
          height: auto;
          object-fit: contain;
          margin: -32px auto 0;
        }

        /* LINEA LUNGA SOTTO COMING SOON */

        .shop-wide-divider {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 1px;
          margin: -25px 0 65px;
          background: linear-gradient(
            90deg,
            transparent,
            #CFFF04 8%,
            #CFFF04 92%,
            transparent
          );
          box-shadow: 0 0 8px rgba(207, 255, 4, 0.25);
        }

        /* COLLEZIONI */

        .shop-collection {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 360px;
          margin: 0 auto;
        }

        /* ESPOSITORE CENTRALE */

        .shop-display {
          --depth: 260px;

          position: relative;
          width: min(90%, 520px);
          aspect-ratio: 16 / 9;
          perspective: 1400px;
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
          flex-shrink: 0;
        }

        .shop-display.dragging {
          cursor: grabbing;
        }

        .shop-display-inner {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .shop-display-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 2px solid var(--display-color);
          background: #080808;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .face-1 {
          transform: rotateY(0deg) translateZ(var(--depth));
        }

        .face-2 {
          transform: rotateY(90deg) translateZ(var(--depth));
        }

        .face-3 {
          transform: rotateY(180deg) translateZ(var(--depth));
        }

        .face-4 {
          transform: rotateY(270deg) translateZ(var(--depth));
        }

        .shop-section-divider {
          width: min(75%, 650px);
          height: 1px;
          margin: 95px auto;
          background: linear-gradient(
            90deg,
            transparent,
            #CFFF04,
            transparent
          );
          box-shadow: 0 0 8px rgba(207, 255, 4, 0.25);
        }

        /* TABLET ORIZZONTALE E SCHERMI MEDI */

        @media (min-width: 701px) and (max-width: 1100px) {

          .shop-display {
            width: min(85%, 480px);
          }

          .shop-coming-soon-image {
            width: min(72%, 500px);
            margin-top: -32px;
          }

          .shop-collection {
            min-height: 320px;
          }

        }

        /* IPAD E TABLET IN VERTICALE */

        @media (min-width: 701px) and (max-width: 1024px) and (orientation: portrait) {

          .shop-content {
            padding-left: 28px;
            padding-right: 28px;
            box-sizing: border-box;
          }

          .shop-intro {
            margin-bottom: 70px;
          }

          .shop-coming-soon-image {
            width: min(68%, 460px);
            margin-top: -28px;
          }

        }

        /* TABLET IN ORIZZONTALE */

        @media (min-width: 701px) and (max-width: 1200px) and (orientation: landscape) {

          .shop-coming-soon-image {
            width: min(62%, 480px);
            margin-top: -28px;
          }

        }

        /* TABLET VERTICALE E FINESTRE PIU' STRETTE */

        @media (min-width: 701px) and (max-width: 900px) {

          .shop-collection {
            flex-direction: column;
            min-height: auto;
            gap: 22px;
          }

          .shop-display {
            width: min(88%, 560px);
          }

          .shop-section-divider {
            margin: 75px auto;
          }

        }

        /* SMARTPHONE */

        @media (max-width: 700px) {

          .shop-content {
            width: 100%;
            max-width: 100%;
            padding: 76px 12px 65px;
            box-sizing: border-box;
          }

          .shop-intro {
            width: 100%;
            margin-bottom: 65px;
          }

          .shop-logo {
            width: min(78%, 260px);
          }
.shop-coming-soon-image {
            width: min(82%, 350px);
            margin-top: -24px;
          }

          .shop-wide-divider {
            margin: -15px 0 45px;
          }

          .shop-collection {
            flex-direction: column;
            min-height: auto;
            gap: 22px;
          }

          .shop-display {
            width: 100%;
            max-width: 560px;
          }

          .shop-section-divider {
            width: min(75%, 650px);
            margin: 65px auto;
          }

        }

        /* TELEFONO IN ORIZZONTALE: RIDUCE GLI SPAZI VERTICALI */

        @media (max-width: 950px) and (max-height: 500px) and (orientation: landscape) {

          .shop-content {
            padding-top: 18px;
            padding-bottom: 40px;
          }

          .shop-intro {
            margin-bottom: 38px;
          }

          .shop-logo {
            width: min(34vw, 210px);
          }
.shop-coming-soon-image {
            width: min(55vw, 340px);
            margin-top: -18px;
          }

          .shop-wide-divider {
            margin: -10px 0 35px;
          }

          .shop-collection {
            flex-direction: row;
            min-height: 220px;
            gap: 0;
          }

          .shop-display {
            width: min(62%, 420px);
          }

          .shop-section-divider {
            margin: 40px auto;
          }

        }

        /* ACCESSIBILITA' E DISPOSITIVI TOUCH */

        @media (hover: none) {
          .shop-display {
            cursor: grab;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shop-display-inner {
            will-change: auto;
          }
        }

      
      `}</style>

    </main>
  );
}