import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaSpotify,
  FaYoutube,
  FaAmazon,
  FaDeezer,
} from "react-icons/fa";

import {
  SiThreads,
  SiApplemusic,
  SiTidal,
  SiX,
} from "react-icons/si";

export default function SimoneAirHornPage() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          paddingTop: "150px",
          paddingBottom: "100px",
          display: "flex",
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        {/* COLONNA SINISTRA */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "320px",
          }}
        >
          <Image
            src="/images/artists/simoneairhorn.png"
            alt="SimoneAirHorn"
            width={320}
            height={320}
            priority
            style={{
              objectFit: "cover",
              borderRadius: "18px",
            }}
          />

          {/* SOCIAL */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "28px",
              fontSize: "26px",
            }}
          >
            <a href="https://www.instagram.com/simoneairhorn/" target="_blank" style={iconStyle}><FaInstagram /></a>

            <a href="https://www.tiktok.com/@simoneairhorn" target="_blank" style={iconStyle}><FaTiktok /></a>

            <a href="https://www.facebook.com/share/15hLNcxJMy/?mibextid=LQQJ4d" target="_blank" style={iconStyle}><FaFacebookF /></a>

            <a href="https://www.threads.net/@simoneairhorn" target="_blank" style={iconStyle}><SiThreads /></a>

            <a href="https://x.com/simoneairhorn" target="_blank" style={iconStyle}><SiX /></a>
          </div>

          {/* STREAMING */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "26px",
            }}
          >
            <a href="https://open.spotify.com/intl-it/artist/4Fm9IPvvdPanwtGwnx74wq" target="_blank" style={iconStyle}><FaSpotify /></a>

            <a href="https://music.apple.com/it/artist/simoneairhorn/1696070857" target="_blank" style={iconStyle}><SiApplemusic /></a>

            <a href="https://music.amazon.co.uk/artists/B0CB8SSF57/simoneairhorn" target="_blank" style={iconStyle}><FaAmazon /></a>

            <a href="https://www.youtube.com/@SimoneAirHorn" target="_blank" style={iconStyle}><FaYoutube /></a>

            <a href="https://tidal.com/artist/40510027/u" target="_blank" style={iconStyle}><SiTidal /></a>

            <a href="https://link.deezer.com/s/33V391fNRDmHP4Ek2wZmq" target="_blank" style={iconStyle}><FaDeezer /></a>
          </div>
        </div>

        {/* COLONNA DESTRA */}

        <div
          style={{
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              marginBottom: "20px",
            }}
          >
            SimoneAirHorn
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#d5d5d5",
              lineHeight: "36px",
              maxWidth: "650px",
              marginBottom: "45px",
            }}
          >
            SimoneAirHorn, pseudonimo di Simone Emanuele Melis
            (Cagliari, 13 febbraio 2004), è un rapper,
            cantautore e produttore italiano.
          </p>

          <Link
            href="/musica"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                background: "#cfff04",
                color: "#000",
                border: "none",
                padding: "16px 42px",
                borderRadius: "999px",
                fontWeight: "bold",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              DISCOGRAFIA
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

const iconStyle = {
  color: "white",
  transition: "0.25s",
};