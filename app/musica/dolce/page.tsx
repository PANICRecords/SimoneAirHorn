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

export default function DolcePage() {
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
          src="/images/covers/dolce.png"
          alt="Dolce"
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
            DOLCE{" "}
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

          <p style={textStyle}>02/01/2026</p>

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
              link="https://open.spotify.com/intl-it/track/6b5xsqhgB9yFF5ptu1MZDr?si=h2WD7uslQ-qT0NsACJKpRQ&nd=1&dlsi=b64768ca28b04735"
            />

            <Platform
              icon={<SiApplemusic />}
              name="Apple Music"
              link="https://music.apple.com/it/album/dolce/1862495516?i=1862495518"
            />

            <Platform
              icon={<FaAmazon />}
              name="Amazon Music"
              link="https://music.amazon.com/albums/B0G8DXDG1Y?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_wWHdWdoBlckvancTp6wPfZKYo"
            />

            <Platform
              icon={<FaYoutube />}
              name="YouTube"
              link="https://www.youtube.com/watch?v=DA_JW1Bg_eY"
            />

            <Platform
              icon={<FaDeezer />}
              name="Deezer"
              link="https://link.deezer.com/s/323ajKieeVA80ZpvXkNkc"
            />

            <Platform
              icon={<SiTidal />}
              name="TIDAL"
              link="https://tidal.com/album/482901483/track/482901484"
            />
                </div>
    </div>
  </div>

  <section
    style={{
      maxWidth: "1150px",
      margin: "0 auto",
      padding: "0 20px 100px",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        color: "#cfff04",
        marginBottom: "35px",
      }}
    >
      TESTO
    </h2>

    <div
      style={{
        whiteSpace: "pre-line",
        lineHeight: "2",
        color: "#d5d5d5",
        fontSize: "19px",
        marginBottom: "80px",
      }}
    >
{`Mi inganni mille volte
Forse è perché c’hai quel viso dolce
Sei una bomba che esplode
Pensi solo ai soldi, a fare storie,
E sembri pure dolce
Dici: “Sì”, dopo: “No”
Non lo so, se sei qui
Non mi frega più troppo
Se ti porterà in Porsche
Se anche ti perderò

S-S-Siamo punto e a capo che scazzo
Ogni tuo momento è filmato (oh no)
Non ammetti niente, sei il capo
Vuoi le carte e il capo firmato (oh no)
Se ora perdessi la Premier
Tiferesti ancora per me (o no?)
Se rimanessi solo te
O se non potessi darti un granché
Non impari e i giorni passano
Lo fai apposta ma io già lo so
Me ne stavo solo in cameretta
Mi scrivevi sempre
Ed io pensavo ai flow
Tutti quanti che mi parlano,
Mi chiedon: “Quando c’è la farai”
Poi ci sei tu che urli e fai uno show
Non mi importa se dici: "Goodbye"

Mi inganni mille volte
Forse è perché c’hai quel viso dolce
Sei una bomba che esplode
Pensi solo ai soldi, a fare storie,
E sembri pure dolce
Dici: “Sì”, dopo: “No”
Non lo so, se sei qui
Non mi frega più troppo
Se ti porterà in Porsche
Se anche ti perderò

P-P-Pensi ai Dior
Con te butto il tempo che ho,
Butto tutto così mi scorderò
Odi se dico no
Ci proviamo ma è un flop
E poi sei leale quanto un gigoló
Quindi meglio di no
Dici: “Parlami”
Ma continuerà a restare un: “No”
Sono i fatti che mi parlano
Lo fai apposta ma io già lo so
(Sono i fatti che mi parlano)
Parto lontano, cambio Stato
(Sono i fatti che mi parlano)
Sei una stella ma il problema poi è il tuo animo
Stavo chiuso in cameretta, chiudevano le porte
Tu fai la stronza
Sono i fatti che mi parlano (uh, uh)

Mi inganni mille volte
Forse è perché c’hai quel viso dolce
Sei una bomba che esplode
Pensi solo ai soldi, a fare storie,
E sembri pure dolce
Dici: “Sì”, dopo: “No” (che sound)
Non lo so, se sei qui
Non mi frega più troppo
Se ti porterà in Porsche
Se anche ti perderò

Dici: “Parlami”
Ma continuerà a restare un: “No”
Urli e sbatti hai già distrutto il posto,
Dopo piangi ed io ci cascherò (oh, ohh)
Dici: “Resta qui”
Tutti ballano io non ballerò (oh, ohh)
Ma a te importa quando balli te
Fai la vittima se dico: “No”
O-O-Ora mollami (uh)
Non ti cerco e non ti chiamerò (ahah)
Tanto prima o poi mi ucciderai, (dalle, alle, ahh)
Vinci sempre come fanno i cops
Sei nel mio CD, (CD)
Solo un pezzo è rimasto di noi (ahh)
Se ti nominano dico: “Boh” (ah)

Perché hai quel viso dolce
Mi inganni mille volte
Forse è perché c’hai quel viso dolce (Si, Si, Simoneee)
Sei una bomba che esplode
Pensi solo ai soldi, a fare storie,
E sembri pure dolce
Dici: “Sì”, dopo: “No”
Non lo so, se sei qui
Non mi frega più troppo
Se ti porterà in Porsche
Se anche ti perderò`}
    </div>

    <h2
      style={{
        fontSize: "42px",
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
        <strong style={{ color: "#fff" }}>ESEGUITO DA</strong>
        <br />
        SimoneAirHorn
      </div>

      <div>
        <strong style={{ color: "#fff" }}>COMPOSITORE ORIGINALE</strong>
        <br />
        Simone Emanuele Melis
      </div>

      <div>
        <strong style={{ color: "#fff" }}>AUTORE ORIGINALE</strong>
        <br />
        Simone Emanuele Melis
      </div>
    </div>
  </section>

  <Footer />
</main>  );
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