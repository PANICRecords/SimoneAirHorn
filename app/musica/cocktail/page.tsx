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

export default function CocktailPage() {
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
          src="/images/covers/cocktail.png"
          alt="Cocktail"
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
            COCKTAIL{" "}
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

          <p style={textStyle}>18/07/2025</p>

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
              link="https://open.spotify.com/intl-it/track/50KeE9A3vYuRF4vVUVqpoa?si=2eS7fD1sTAeCiOajI13IDw&nd=1&dlsi=2f414602916c4518"
            />

            <Platform
              icon={<SiApplemusic />}
              name="Apple Music"
              link="https://music.apple.com/it/album/cocktail-single/1824380914"
            />

            <Platform
              icon={<FaAmazon />}
              name="Amazon Music"
              link="https://music.amazon.it/tracks/B0FGJ48288?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_NwHpSywVWvMYasM8MS899MRrH"
            />

            <Platform
              icon={<FaYoutube />}
              name="YouTube"
              link="https://www.youtube.com/watch?v=gpfe1Ol9WlE&feature=youtu.be"
            />

            <Platform
              icon={<FaDeezer />}
              name="Deezer"
              link="https://www.deezer.com/en/track/3442774211?host=0&utm_campaign=clipboard-generic&utm_source=user_sharing&utm_content=track-3442774211&deferredFl=1&universal_link=1"
            />

            <Platform
              icon={<SiTidal />}
              name="TIDAL"
              link="https://tidal.com/album/445811918/track/445811919"
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