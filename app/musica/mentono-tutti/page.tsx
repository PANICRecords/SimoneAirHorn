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

export default function MentonoTuttiPage() {
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
        <Image
          src="/images/covers/mentono-tutti.png"
          alt="Mentono Tutti"
          width={320}
          height={320}
          priority
          style={{
            borderRadius: "18px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              marginBottom: "8px",
            }}
          >
            MENTONO TUTTI{" "}
            <span
              style={{
                color: "#888",
                fontSize: "28px",
                fontWeight: "normal",
              }}
            >
              (Singolo)
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

          <h3 style={titleStyle}>DATA DI USCITA</h3>

          <p style={textStyle}>02/05/2025</p>

          <h3 style={titleStyle}>ETICHETTA</h3>

          <p style={textStyle}>PANIC Records</p>

          <h3
            style={{
              ...titleStyle,
              marginTop: "45px",
            }}
          >
            ASCOLTA SU
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, max-content)",
              gap: "18px 35px",
            }}
          >
            <Platform
              icon={<FaSpotify />}
              name="Spotify"
              link="https://open.spotify.com/intl-it/track/6aF8ulWghDZlRmwbJHtpOW?si=ocfFCL13R_6uEZURjqQNBg&nd=1&dlsi=f24f38d3d3cf4241"
            />

            <Platform
              icon={<SiApplemusic />}
              name="Apple Music"
              link="https://music.apple.com/it/album/mentono-tutti/1807149952?i=1807149955"
            />

            <Platform
              icon={<FaAmazon />}
              name="Amazon Music"
              link="https://music.amazon.com/albums/B0F3YQPDBP?trackAsin=B0F3YXV931&do=play"
            />

            <Platform
              icon={<FaYoutube />}
              name="YouTube"
              link="https://youtube.com/watch?v=t3WuU6wO4DI&feature=youtu.be"
            />

            <Platform
              icon={<FaDeezer />}
              name="Deezer"
              link="https://www.deezer.com/it/track/3314287951"
            />

            <Platform
              icon={<SiTidal />}
              name="TIDAL"
              link="https://tidal.com/album/428706632/track/428706633"
            />
          </div>
        </div>
      </div>

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

const titleStyle = {
  color: "#cfff04",
  fontSize: "18px",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "22px",
  marginBottom: "28px",
};