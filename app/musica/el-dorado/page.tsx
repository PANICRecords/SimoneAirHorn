"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { canzoni } from "../../../components/musicData";

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
  const pathname = usePathname();

  const suggerite = useMemo(() => {
    const disponibili = canzoni.filter(
      (canzone) => canzone.link !== pathname
    );

    const ordinate = [...disponibili].sort(
      (a, b) => b.data.localeCompare(a.data)
    );

    const ultimaUscita = ordinate[0];

    if (!ultimaUscita) {
      return [];
    }

    const altre = ordinate.filter(
      (canzone) => canzone.link !== ultimaUscita.link
    );

    const casuali = [...altre]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return [
      casuali[0],
      ultimaUscita,
      casuali[1],
    ].filter(Boolean);
  }, [pathname]);

  return (
    <main className="page">
      <Navbar />

      {/* INFORMAZIONI BRANO */}
      <section className="split-layout">

        <div className="split-layout__media">
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
        </div>

        <div className="split-layout__content">

          <h1
            className="page-title page-title--58"
            style={{ marginBottom: "8px" }}
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
            24/07/2026
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
      </section>

      {/* TESTO E CREDITI */}
      <section
        className="content-1150"
        style={{ paddingBottom: "100px" }}
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

      {/* SCOPRI ANCHE */}

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
          SCOPRI ANCHE
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(10px, 3vw, 35px)",
            width: "100%",
          }}
        >
          {suggerite.map((canzone) => (
            <Link
              key={canzone.link}
              href={canzone.link}
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                minWidth: 0,
              }}
            >
              <Image
                src={`/images/covers/${canzone.cover}.png`}
                alt={canzone.nome}
                width={350}
                height={350}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <h3
                style={{
                  marginTop: "14px",
                  fontSize: "clamp(13px, 2.2vw, 22px)",
                  lineHeight: "1.2",
                  overflowWrap: "break-word",
                }}
              >
                {canzone.nome}
              </h3>
            </Link>
          ))}
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