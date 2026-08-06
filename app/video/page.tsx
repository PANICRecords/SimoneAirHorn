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
          maxWidth: "1100px",
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
          VIDEO
        </h1>

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "35px",
          }}
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
              }}
            >
              <Image
                src={`/images/covers/${item.cover}.png`}
                alt={item.nome}
                width={110}
                height={110}
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
              <button
                style={{
                  background: "#cfff04",
                  color: "#000",
                  border: "none",
                  padding: "14px 34px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
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