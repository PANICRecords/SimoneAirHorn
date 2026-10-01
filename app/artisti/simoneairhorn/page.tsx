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
    <main className="page">
      <Navbar />

      <section className="split-layout">

        {/* COLONNA SINISTRA */}

        <div className="split-layout__media">

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

          <div className="icon-row icon-row--social">
            <a
              href="https://www.instagram.com/simoneairhorn/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@simoneairhorn"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com/share/15hLNcxJMy/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.threads.net/@simoneairhorn"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <SiThreads />
            </a>

            <a
              href="https://x.com/simoneairhorn"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <SiX />
            </a>
          </div>

          {/* STREAMING */}

          <div className="icon-row icon-row--platforms">
            <a
              href="https://open.spotify.com/intl-it/artist/4Fm9IPvvdPanwtGwnx74wq"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaSpotify />
            </a>

            <a
              href="https://music.apple.com/it/artist/simoneairhorn/1696070857"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <SiApplemusic />
            </a>

            <a
              href="https://music.amazon.co.uk/artists/B0CB8SSF57/simoneairhorn"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaAmazon />
            </a>

            <a
              href="https://www.youtube.com/@SimoneAirHorn"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaYoutube />
            </a>

            <a
              href="https://tidal.com/artist/40510027/u"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <SiTidal />
            </a>

            <a
              href="https://link.deezer.com/s/33V391fNRDmHP4Ek2wZmq"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              <FaDeezer />
            </a>
          </div>
        </div>

        {/* COLONNA DESTRA */}

        <div className="split-layout__content">

          <h1 className="page-title page-title--58">
            SimoneAirHorn
          </h1>

          <p
            className="body-large"
            style={{
              maxWidth: "650px",
              marginBottom: "45px",
            }}
          >
            SimoneAirHorn, pseudonimo di Simone Emanuele Melis
            (Cagliari, 13 febbraio 2004), è un rapper,
            cantautore e produttore italiano.
          </p>

          <Link href="/musica">
            <button className="primary-button">
              DISCOGRAFIA
            </button>
          </Link>

        </div>

      </section>

      <Footer />
    </main>
  );
}

const iconStyle = {
  color: "white",
  transition: "0.25s",
};