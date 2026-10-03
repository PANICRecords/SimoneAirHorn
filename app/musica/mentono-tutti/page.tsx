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

export default function MentonoTuttiPage() {
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
        </div>

        <div className="split-layout__content">

          <h1
            className="page-title page-title--58"
            style={{ marginBottom: "8px" }}
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
            02/05/2025
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
{`Uhh, non mi ama o mi ama?
Click Clown (Ah)
Ahh, ahh, ahh, ahh

E non mi parla
Perchè con me lei è arrabbiata
Tu cercavi un flow mentre io cercavo un’altra
Flow ne ho abbastanza
Che lo spazio non basta
Qua mentono tutti (uhh)
Dentro al barrio,
In chiesa e in centro
Lo sai che fanno bla bla
Non mi chiama,
La chiamo, richiama
Però dopo riattacca

Contatto Dior
C’ho una boutique
Cresce il conto in banca,
Salgo UP
Faccio bowling, to bullish
Piove in Massachu-
Come in tutti i posti che non è il luogo
E manco i soldi, sei tu
E tutti ridono fra qua nessuno piange
Sinchè non controllano e c’hanno vuote le tasche
E c’hanno vuote le banche,
Spesi per i Balmain
Avevo buchi nei jeans, jeans, jeans,
Nelle scarpe
Rubavo per registrare
Forse hai un brand
Ma menti a un fra solo per il cash
Tu cerchi un flow,
Io la mia ex
Perchè è ancora incazzata con me

E non mi parla
Perchè è arrabbiata
Cercavi un flow mentre io cercavo un’altra
Flow ne ho abbastanza
Che lo spazio non basta
Qua mentono tutti (uhh)
Dentro al barrio,
In chiesa e in centro
Lo sai che fanno bla bla
Non mi chiama,
La chiamo, richiama
Però dopo riattacca

Ahi, non amo
Fra non voglio un grammy voglio tutto il palco
Sei sceso col jet io son sceso col cargo
Non sto nella gara che sennò la sfaso
Tipo che non voglio essere manco paragonato
Forse cerco la gloria soltanto per poi mostrarla
O solo per dimostrare che se voglio posso averla
Non voglio avere una stella,
Essere io la stella
Col ritmo che mi balla
E dice: "È forte come una roccia"

E non mi parla
Perchè è arrabbiata
Cercavi un flow mentre io cercavo un’altra
Flow ne ho abbastanza
Che lo spazio non basta
Qua mentono tutti (uhh)
Dentro al barrio,
In chiesa e in centro
Lo sai che fanno bla bla (Click Clown)
Non mi chiama,
La chiamo, richiama
Però dopo riattacca
Si - Si, Ah (Click Clown)
Si - Si - Simoneee
Non mi ama o mi ama?
Let's, let's
Let's go (let's go, let's go)`}
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