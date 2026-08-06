import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function MusicaPage() {
  const singoli = [
    {
      nome: "Cocktail",
      cover: "cocktail",
      link: "/musica/cocktail",
    },
    {
      nome: "Dolce",
      cover: "dolce",
      link: "/musica/dolce",
    },
    {
      nome: "El Dorado",
      cover: "el-dorado",
      link: "/musica/el-dorado",
    },
    {
      nome: "Mentono Tutti",
      cover: "mentono-tutti",
      link: "/musica/mentono-tutti",
    },
  ];

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
          maxWidth: "1300px",
          margin: "0 auto",
          paddingTop: "140px",
          paddingBottom: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "70px",
            fontWeight: "bold",
          }}
        >
          MUSICA
        </h1>

        {/* NUOVA USCITA */}

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "30px",
          }}
        >
          NUOVA USCITA
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "45px",
            marginBottom: "100px",
          }}
        >
          <Link href="/musica/el-dorado">
            <Image
              src="/images/covers/el-dorado.png"
              alt="El Dorado"
              width={300}
              height={300}
              style={{
                cursor: "pointer",
              }}
            />
          </Link>

          <div>
            <Link
              href="/musica/el-dorado"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "54px",
                  marginBottom: "20px",
                }}
              >
                EL DORADO
              </h2>
            </Link>

            <Link href="/musica/el-dorado">
              <button
                style={{
                  background: "#cfff04",
                  color: "#000",
                  border: "none",
                  padding: "16px 42px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ESPLORA
              </button>
            </Link>
          </div>
        </div>

        {/* SINGOLI */}

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "30px",
          }}
        >
          SINGOLI
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "35px",
            marginBottom: "90px",
          }}
        >
          {singoli.map((song) => (
            <div
              key={song.nome}
              style={{
                textAlign: "center",
              }}
            >
              <Link href={song.link}>
                <Image
                  src={`/images/covers/${song.cover}.png`}
                  alt={song.nome}
                  width={240}
                  height={240}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </Link>

              <Link
                href={song.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    marginTop: "18px",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  {song.nome}
                </h3>
              </Link>
            </div>
          ))}
        </div>

        {/* EP */}

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "30px",
          }}
        >
          EP
        </h2>

        <div
          style={{
            width: "240px",
            textAlign: "center",
          }}
        >
          <Link href="/musica/up">
            <Image
              src="/images/covers/up/up.png"
              alt="UP"
              width={240}
              height={240}
              style={{
                cursor: "pointer",
              }}
            />
          </Link>

          <Link
            href="/musica/up"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <h3
              style={{
                marginTop: "18px",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              UP
            </h3>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}