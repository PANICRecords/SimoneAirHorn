"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MusicaPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [ordine, setOrdine] = useState<"singoli" | "album">("singoli");

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsMobile(
        width <= 768 || (width <= 1024 && height > width)
      );
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const singoli = [
    {
      nome: "Cocktail",
      cover: "cocktail",
      link: "/musica/cocktail",
    },
    {
      nome: "Dolce",
      cover: "dolce",
      link: "/musica/dolce",
    },
    {
      nome: "El Dorado",
      cover: "el-dorado",
      link: "/musica/el-dorado",
    },
    {
      nome: "Mentono Tutti",
      cover: "mentono-tutti",
      link: "/musica/mentono-tutti",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <div className="content-1300 page-content">

        <h1
          className="page-title"
          style={{ marginBottom: "70px" }}
        >
          MUSICA
        </h1>

        {/* NUOVA USCITA */}

        <h2
          className="section-title"
          style={{ marginBottom: "30px" }}
        >
          NUOVA USCITA
        </h2>

        <div
          className="feature-release"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "25px" : "45px",
            marginBottom: "70px",
          }}
        >
          <Link href="/musica/el-dorado">
            <Image
              src="/images/covers/el-dorado.png"
              alt="El Dorado"
              width={300}
              height={300}
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>

          <div>
            <Link href="/musica/el-dorado">
              <h2
                style={{
                  fontSize: "54px",
                  marginBottom: "20px",
                }}
              >
                EL DORADO
              </h2>
            </Link>

            <Link href="/musica/el-dorado">
              <button className="primary-button">
                ESPLORA
              </button>
            </Link>
          </div>
        </div>

        {/* ORDINA PER */}

        <div
          style={{
            borderTop: "1px solid #333",
            borderBottom: "1px solid #333",
            padding: "25px 0",
            marginBottom: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "1px",
              marginRight: "5px",
            }}
          >
            ORDINA PER
          </span>

          <button
            onClick={() => setOrdine("singoli")}
            style={{
              background:
                ordine === "singoli"
                  ? "#cfff04"
                  : "transparent",
              color:
                ordine === "singoli"
                  ? "#000"
                  : "#fff",
              border: "1px solid #cfff04",
              padding: "10px 22px",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "0.25s",
            }}
          >
            SINGOLI
          </button>

          <button
            onClick={() => setOrdine("album")}
            style={{
              background:
                ordine === "album"
                  ? "#cfff04"
                  : "transparent",
              color:
                ordine === "album"
                  ? "#000"
                  : "#fff",
              border: "1px solid #cfff04",
              padding: "10px 22px",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "0.25s",
            }}
          >
            ALBUM
          </button>
        </div>

        {/* VISTA SINGOLI */}

        {ordine === "singoli" && (
          <>
            {/* SINGOLI */}

            <h2
              className="section-title"
              style={{ marginBottom: "30px" }}
            >
              SINGOLI
            </h2>

            <div
              className="responsive-grid"
              style={{ marginBottom: "90px" }}
            >
              {singoli.map((song) => (
                <div
                  key={song.nome}
                  style={{
                    width: "240px",
                    maxWidth: "100%",
                    textAlign: "center",
                  }}
                >
                  <Link href={song.link}>
                    <Image
                      src={`/images/covers/${song.cover}.png`}
                      alt={song.nome}
                      width={240}
                      height={240}
                      style={{
                        cursor: "pointer",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>

                  <Link href={song.link}>
                    <h3
                      style={{
                        marginTop: "18px",
                        fontSize: "22px",
                        cursor: "pointer",
                      }}
                    >
                      {song.nome}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>

            {/* EP */}

            <h2
              className="section-title"
              style={{ marginBottom: "30px" }}
            >
              EP
            </h2>

            <div
              style={{
                width: "240px",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              <Link href="/musica/up">
                <Image
                  src="/images/covers/up/up.png"
                  alt="UP"
                  width={240}
                  height={240}
                  style={{
                    cursor: "pointer",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>

              <Link href="/musica/up">
                <h3
                  style={{
                    marginTop: "18px",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  UP
                </h3>
              </Link>
            </div>
          </>
        )}

        {/* VISTA ALBUM */}

        {ordine === "album" && (
          <>
            <h2
              className="section-title"
              style={{ marginBottom: "30px" }}
            >
              ALBUM
            </h2>

            <div
              style={{
                width: "240px",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              <Link href="/musica/up">
                <Image
                  src="/images/covers/up/up.png"
                  alt="UP"
                  width={240}
                  height={240}
                  style={{
                    cursor: "pointer",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>

              <Link href="/musica/up">
                <h3
                  style={{
                    marginTop: "18px",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  UP
                </h3>
              </Link>
            </div>
          </>
        )}

      </div>

      <Footer />
    </main>
  );
}