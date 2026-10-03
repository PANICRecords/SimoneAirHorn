import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function VideoPage() {
  const video = [
    {
      nome: "Dolce",
      cover: "dolce",
      data: "2026-01-02",
      musica: "/musica/dolce",
      youtube: "https://www.youtube.com/watch?v=DA_JW1Bg_eY",
    },
    {
      nome: "Cocktail",
      cover: "cocktail",
      data: "2025-07-18",
      musica: "/musica/cocktail",
      youtube:
        "https://www.youtube.com/watch?v=gpfe1Ol9WlE&feature=youtu.be",
    },
    {
      nome: "Mentono Tutti",
      cover: "mentono-tutti",
      data: "2025-05-02",
      musica: "/musica/mentono-tutti",
      youtube:
        "https://youtube.com/watch?v=t3WuU6wO4DI&feature=youtu.be",
    },
  ].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <main className="page">
      <Navbar />

      <div className="content-1100 page-content">

        <h2
          className="section-title"
          style={{ marginBottom: "35px" }}
        >
          VIDEO UFFICIALI
        </h2>

        {video.map((item) => (
          <div
            key={item.nome}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "25px",
              paddingBottom: "25px",
              borderBottom: "1px solid #222",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                minWidth: 0,
              }}
            >
              <Link href={item.musica}>
                <Image
                  src={`/images/covers/${item.cover}.png`}
                  alt={item.nome}
                  width={110}
                  height={110}
                  style={{
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                />
              </Link>

              <h2
                style={{
                  fontSize: "30px",
                }}
              >
                {item.nome}
              </h2>
            </div>

            <a
              href={item.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-button">
                GUARDA ORA
              </button>
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}