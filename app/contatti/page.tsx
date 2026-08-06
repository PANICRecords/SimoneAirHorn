import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContattiPage() {
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
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "140px",
          paddingBottom: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "80px",
            fontWeight: "bold",
          }}
        >
          CONTATTI
        </h1>

        {/* BOOKING */}

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "18px",
          }}
        >
          BOOKING & MANAGEMENT
        </h2>

        <a
          href="mailto:events.panicrecords@gmail.com"
          style={{
            color: "white",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          events.panicrecords@gmail.com
        </a>

        <div
          style={{
            height: "70px",
          }}
        />

        {/* LABEL */}

        <h2
          style={{
            color: "#cfff04",
            marginBottom: "18px",
          }}
        >
          LABEL
        </h2>

        <a
          href="mailto:panicrecords13@gmail.com"
          style={{
            color: "white",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          panicrecords13@gmail.com
        </a>
      </div>
      <Footer />
    </main>
  );
}