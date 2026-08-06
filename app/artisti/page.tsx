import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ArtistiPage() {
  return (
    <main className="page">
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Image
            src="/images/artists/simoneairhorn.png"
            alt="SimoneAirHorn"
            width={350}
            height={450}
            style={{
              objectFit: "cover",
              borderRadius: "20px",
            }}
            priority
          />

          <h1
            style={{
              color: "white",
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            SIMONEAIRHORN
          </h1>

          <Link
            href="/artisti/simoneairhorn"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                backgroundColor: "#cfff04",
                color: "#000",
                border: "none",
                padding: "16px 42px",
                borderRadius: "999px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              SCOPRI
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}