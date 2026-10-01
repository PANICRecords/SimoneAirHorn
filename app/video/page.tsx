import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function VideoPage() {
  const video = [
    {
      nome: "Cocktail",
      cover: "cocktail",
      link: "https://www.youtube.com/watch?v=gpfe1Ol9WlE&feature=youtu.be",
    },
    {
      nome: "Dolce",
      cover: "dolce",
      link: "https://www.youtube.com/watch?v=DA_JW1Bg_eY",
    },
    {
      nome: "Mentono Tutti",
      cover: "mentono-tutti",
      link: "https://youtube.com/watch?v=t3WuU6wO4DI&feature=youtu.be",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <div className="content-1100 page-content">

        <h1
          className="page-title"
          style={{ marginBottom: "70px" }}
        >
          VIDEO
        </h1>

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
              <Image
                src={`/images/covers/${item.cover}.png`}
                alt={item.nome}
                width={110}
                height={110}
                style={{
                  flexShrink: 0,
                }}
              />

              <h2
                style={{
                  fontSize: "30px",
                }}
              >
                {item.nome}
              </h2>
            </div>

            <a
              href={item.link}
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