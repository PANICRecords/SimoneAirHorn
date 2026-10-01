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
    <main className="page">
      <Navbar />

      <div className="content-1300 page-content">

        <h1
          className="page-title"
          style={{ marginBottom: "70px" }}
        >
          MUSICA
        </h1>

        {/* NUOVA USCITA */}

        <h2
          className="section-title"
          style={{ marginBottom: "30px" }}
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
          className="feature-release"
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
            <Link href="/musica/el-dorado">
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
              <button className="primary-button">
                ESPLORA
              </button>
            </Link>
          </div>
        </div>

        {/* SINGOLI */}

        <h2
          className="section-title"
          style={{ marginBottom: "30px" }}
        >
          SINGOLI
        </h2>

        <div
          className="responsive-grid"
          style={{ marginBottom: "90px" }}
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
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>

              <Link href={song.link}>
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
          className="section-title"
          style={{ marginBottom: "30px" }}
        >
          EP
        </h2>

        <div
          style={{
            width: "240px",
            maxWidth: "100%",
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
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>

          <Link href="/musica/up">
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