import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

import {
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaDeezer,
} from "react-icons/fa";

import {
  SiApplemusic,
  SiTidal,
} from "react-icons/si";

export default function UpPage() {
  return (
    <main className="page">
      <Navbar />

      {/* INFORMAZIONI BRANO */}
      <section className="split-layout">

        <div className="split-layout__media">

          <Image
            src="/images/covers/up/up.png"
            alt="UP"
            width={320}
            height={320}
            priority
            style={{
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />

          {/* TRACKLIST */}
          <div
            style={{
              width: "320px",
              maxWidth: "100%",
              marginTop: "35px",
            }}
          >
            <h3
              style={{
                color: "#cfff04",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              TRACKLIST
            </h3>

            <div
              style={{
                borderTop: "1px solid #222",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                }}
              >
                <span
                  style={{
                    color: "#888",
                    fontSize: "16px",
                    minWidth: "25px",
                  }}
                >
                  01
                </span>

                <span style={{ fontSize: "19px" }}>
                  Flexo
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                }}
              >
                <span
                  style={{
                    color: "#888",
                    fontSize: "16px",
                    minWidth: "25px",
                  }}
                >
                  02
                </span>

                <span style={{ fontSize: "19px" }}>
                  Cortina d'Ampezzo
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                }}
              >
                <span
                  style={{
                    color: "#888",
                    fontSize: "16px",
                    minWidth: "25px",
                  }}
                >
                  03
                </span>

                <span style={{ fontSize: "19px" }}>
                  Panico
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                }}
              >
                <span
                  style={{
                    color: "#888",
                    fontSize: "16px",
                    minWidth: "25px",
                  }}
                >
                  04
                </span>

                <span style={{ fontSize: "19px" }}>
                  UP
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="split-layout__content">

          <h1
            className="page-title page-title--58"
            style={{ marginBottom: "8px" }}
          >
            UP{" "}
            <span
              style={{
                color: "#888",
                fontSize: "28px",
                fontWeight: "normal",
              }}
            >
              (EP)
            </span>
          </h1>

          <p
            style={{
              color: "#999",
              fontSize: "24px",
              marginBottom: "45px",
            }}
          >
            SimoneAirHorn
          </p>

          <h3
            style={{
              color: "#cfff04",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            DATA DI USCITA
          </h3>

          <p style={{ fontSize: "22px", marginBottom: "28px" }}>
            2025
          </p>

          <h3
            style={{
              color: "#cfff04",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            ETICHETTA
          </h3>

          <p style={{ fontSize: "22px", marginBottom: "28px" }}>
            PANIC Records
          </p>

          <h3
            style={{
              color: "#cfff04",
              fontSize: "18px",
              marginBottom: "10px",
              marginTop: "45px",
            }}
          >
            ASCOLTA SU
          </h3>

          <div className="platform-grid">

            <Platform
              icon={<FaSpotify />}
              name="Spotify"
              link="https://open.spotify.com/intl-it/album/3dHvBxWbEULVYPNH18Dvg2"
            />

            <Platform
              icon={<SiApplemusic />}
              name="Apple Music"
              link="https://music.apple.com/us/album/up-ep/1788927972"
            />

            <Platform
              icon={<FaAmazon />}
              name="Amazon Music"
              link="https://music.amazon.it/albums/B0DSCD9WPY?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_gyCTukBjmYuBcX5zncmHNR8zh"
            />

            <Platform
              icon={<FaYoutube />}
              name="YouTube"
              link="https://www.youtube.com/playlist?list=PLX9y_el4kIHeVi2gERIq_cmtAAHYGKyr5"
            />

            <Platform
              icon={<FaDeezer />}
              name="Deezer"
              link="https://link.deezer.com/s/30tRzyw82A6suAoHKX2KI"
            />

            <Platform
              icon={<SiTidal />}
              name="TIDAL"
              link="https://tidal.com/album/409619719"
            />

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}

function Platform({
  icon,
  name,
  link,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
      }}
    >
      <span
        style={{
          fontSize: "28px",
        }}
      >
        {icon}
      </span>

      {name}
    </a>
  );
}