import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContattiPage() {
  return (
    <main className="page">
      <Navbar />

      <div className="content-900 page-content">

        <h1
          className="page-title"
          style={{ marginBottom: "80px" }}
        >
          CONTATTI
        </h1>

        {/* BOOKING */}

        <h2
          className="section-title"
          style={{ marginBottom: "18px" }}
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

        <div style={{ height: "70px" }} />

        {/* LABEL */}

        <h2
          className="section-title"
          style={{ marginBottom: "18px" }}
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