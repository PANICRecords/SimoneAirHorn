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
    <main className="page">
      <Navbar />

      {/* INFORMAZIONI BRANO */}

      <section className="split-layout">

        <div className="split-layout__media">
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
        </div>

        <div className="split-layout__content">

          <h1
            className="page-title page-title--58"
            style={{ marginBottom: "8px" }}
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

          <h3
            style={{
              color: "#cfff04",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            DATA DI USCITA
          </h3>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "28px",
            }}
          >
            18/07/2025
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

          <p
            style={{
              fontSize: "22px",
              marginBottom: "28px",
            }}
          >
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

      </section>

      {/* TESTO E CREDITI */}

      <section
        className="content-1150"
        style={{
          paddingBottom: "100px",
        }}
      >

        <h2
          className="content-title"
          style={{
            color: "#cfff04",
            marginBottom: "35px",
          }}
        >
          TESTO
        </h2>

        <div
          className="body-medium"
          style={{
            whiteSpace: "pre-line",
            marginBottom: "80px",
          }}
        >
{`Tu mi hai ucciso
Pure questa notte,
Bevo e aspiro (bevo e aspiro)
Oh yeah
Pure questa notte (oh yeah)

Ma io sarò il primo
Te l’ho detto al mare con un Co-Cocktail
Sai non mento avviso così sai già che,
Se torni piangendo
Io, manco apro rido
Io, manco apro rido (ah)
Ma io sono in giro
Pure questa notte
Ti penso e ti scrivo non rispondere
Che mi illudo sempre
E tu mi ami a volte,
Si soltanto a volte

Scoppio il beat e fa boom
Mamma, quanto sei cool
Ti porterei in Olanda
O in Francia
Dimmi dove vuoi tu
Ama me non il suv
Han pompato nel sub
Il mio disco non il suo,
Gli dispiace ed è giù
Siamo rari e son guai
Dici passeranno i guai
Tu resta con me non sai
Che ti penso sempre vedi, baby
Anche se non so come stai
È che sei un sogno da life
Lei invece solo da like
Sei bella se mi sorridi,
Quando dico: "Non ci lasceremo mai"

Ma io sarò il primo
Te l’ho detto al mare con un Co-Cocktail
Sai non mento avviso così sai già che,
Se torni piangendo
Io, manco apro rido,
Io, manco apro rido (ah)
Ma io sono in giro
Pure questa notte
Ti penso e ti scrivo non rispondere
Che mi illudo sempre
E tu mi ami a volte,
Si soltanto a volte

Urlano sembra il Far West,
Sogno Punta Cana, ma
Puntano me
Non scendo da un po’ in città
Ma dalla regia
Dicono che ho le abilità
Che sarebbe una follia
Sprecare la mia unica chance
Ora che sai il perché
Non siamo scappati da qua
Se facevo la star
Non potevo portarti alla spa
Tu volevi di più, più
Ma è il mio DNA
Bevi un cocktail al bar

Te l’ho detto al mare con un Co-Cocktail
(Te l’ho detto al mare con un Co-Cocktail)
Ti penso e ti scrivo
E non mento avviso così sai già che
(E non mento avviso così sai già che)
Let's, let's,
Let's go

Ma io sono in giro
Pure questa notte
Ti penso e ti scrivo non rispondere
Che mi illudo sempre
E tu mi ami a volte,
Si soltanto a volte

T-Ti ho fatta stare
Così male
Che sei andata via
Senza salutare,
Non tornerai più
Non tornerai mai più`}
        </div>

        <h2
          className="content-title"
          style={{
            color: "#cfff04",
            marginBottom: "35px",
          }}
        >
          CREDITI
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            color: "#d5d5d5",
            fontSize: "19px",
            lineHeight: "1.8",
          }}
        >
          <div>
            <strong style={{ color: "#fff" }}>
              ESEGUITO DA
            </strong>
            <br />
            SimoneAirHorn
          </div>

          <div>
            <strong style={{ color: "#fff" }}>
              COMPOSITORE ORIGINALE
            </strong>
            <br />
            Simone Emanuele Melis
          </div>

          <div>
            <strong style={{ color: "#fff" }}>
              AUTORE ORIGINALE
            </strong>
            <br />
            Simone Emanuele Melis
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