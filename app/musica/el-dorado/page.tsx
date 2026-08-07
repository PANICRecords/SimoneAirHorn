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

export default function ElDoradoPage() {
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
          src="/images/covers/el-dorado.png"
          alt="El Dorado"
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
            EL DORADO{" "}
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

          <p style={textStyle}>24/07/2026</p>

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
              link="https://open.spotify.com/intl-it/track/42EXyRrg8xN2KQaEcGA1dT"
            />

            <Platform
              icon={<SiApplemusic />}
              name="Apple Music"
              link="https://music.apple.com/us/album/el-dorado/6785601758?i=6785601772"
            />

            <Platform
              icon={<FaAmazon />}
              name="Amazon Music"
              link="https://music.amazon.co.uk/albums/B0H6YCZWC3?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_bEwwmih2pg2lcMvqo5rhZtKaK"
            />

            <Platform
              icon={<FaYoutube />}
              name="YouTube"
              link="https://youtu.be/uRDpOR3UaLc?si=nvFr3hEHoLanzmeQ"
            />

            <Platform
              icon={<FaDeezer />}
              name="Deezer"
              link="https://www.deezer.com/it/album/1017381411?host=0&utm_campaign=clipboard-generic&utm_source=user_sharing&utm_content=album-1017381411&deferredFl=1"
            />

            <Platform
              icon={<SiTidal />}
              name="TIDAL"
              link="https://tidal.com/album/538351374"
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
{`Anche un giorno intero è importante, non spreco nada (wow)
Quindi col maltempo non resto rinchiuso in casa
Mi riposerò poi dopo, nell’aldilà
Che c’ho una missione tosta, ho un percorso e non faccio bla bla

Anche un giorno intero è importante, non spreco nada
Quindi col maltempo non resto rinchiuso in casa
Mi riposerò poi dopo, nell’aldilà
Che c’ho una missione tosta, ho un percorso e non faccio bla bla
Corro 500 chilometri senza fiato
So che se non tento non perdo, ma poi che faccio
La mappa l'ho in testa vado fuori città
Non fallisco la ricerca, ti giuro trovo El Dorado
Si scenderò ad El Dorado (no-o-o)

Guarda chi c’hai intorno, sono amici o è una banda?
Non sai che la gang se muori, lí ti lascia
Ti darei un consiglio ma non mi frega niente
Tanto la famiglia l’ho già selezionata (uh, uh)
Lei che è innamorata me lo dice anche in inglese
Io insulto due inglesi, si perché l’hanno guardata
Senti i BPM, me li giostro, sentinelle
Ma buongiorno gente, nuovo giorno nuova traccia
Piuttosto non parlo se non devo dire niente
Chiudi quella bocca perché sta solo arieggiando
Non chiedermi scusa sai che odio chi si pente
L’hai fatto lo stesso anche sapendo che lo odiavo

Non volevo un Dior dorato
Non volevo i soldi solo trovare El Dorado (oh no)
Con lei in una casa al lago
Senza alcun rimpianto e felice per tutto l’anno

Anche un giorno intero è importante, non spreco nada
Quindi col maltempo non resto rinchiuso in casa
Mi riposerò poi dopo, nell’aldilà
Che c’ho una missione tosta, ho un percorso e non faccio bla bla
Corro 500 chilometri senza fiato
So che se non tento non perdo, ma poi che faccio
La mappa l'ho in testa vado fuori città
Non fallisco la ricerca, ti giuro trovo El Dorado
Si scenderò ad El Dorado

L’hai presa un po’ sottogamba,
Il troppo sicuro inciampa
Sei attratto da cose, io sono in gita in montagna
Siamo a Cinecittà, non cambio la musica è sacra
Ho così libertà di scelta
Che potrei pure lasciarla
Ma ogni piede c’ha la sua scarpa,
Il cattivo c’ha una taglia
Non sarò uno schiavo a cui metteranno una targa,
Proprio come ad una macchina infatti studio una tattica
Non puoi aver la tunica se poi vivi nell’attico

Non volevo un Dior dorato
Non volevo i soldi solo trovare El Dorado (oh no)
Con lei in una casa al lago
Senza alcun rimpianto e felice per tutto l’anno

Anche un giorno intero è importante, non spreco nada
Quindi col maltempo non resto rinchiuso in casa
Mi riposerò poi dopo, nell’aldilà
Che c’ho una missione tosta, ho un percorso e non faccio bla bla
Corro 500 chilometri senza fiato
So che se non tento non perdo, ma poi che faccio
La mappa l'ho in testa vado fuori città
Non fallisco la ricerca, ti giuro trovo El Dorado
Si scenderò ad El Dorado

Si Si Simoneee
Senti i BPM, me li giostro, sentinelle
Ma buongiorno gente, nuovo giorno nuova traccia
Ehh
Eh`}
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