import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContattiPage() {
  return (
    <main className="page">
      <Navbar />

      <style>{`
        @media (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
          .contatti-content {
            padding-left: 8px;
            padding-right: 8px;
          }
        }

        .contatti-title {
          color: #cfff04;
          text-align: left;
        }

        /* Allinea il titolo al contenitore della pagina Concerti su desktop. */
        @media (min-width: 1025px) {
          .contatti-title {
            position: relative;
            left: calc((900px - 1120px) / 2);
            width: min(calc(100vw - 48px), 1120px);
          }
        }

        /* Su tablet il titolo segue il margine usato dalla pagina Concerti. */
        @media (min-width: 601px) and (max-width: 1024px) {
          .contatti-title {
            position: relative;
            left: -8px;
          }
        }

        /* Su telefono resta allineato al margine stretto della pagina Concerti. */
        @media (max-width: 600px) {
          .contatti-title {
            position: relative;
            left: -6px;
          }
        }
      `}</style>

      <div
        className="content-900 page-content contatti-content"
        style={{
          minHeight: "calc(100vh - 90px)",
          boxSizing: "border-box",
          paddingBottom: "120px",
        }}
      >
        <h1
          className="page-title contatti-title"
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
          href="mailto:mgmt@simoneairhorn.com"
          style={{
            color: "white",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          mgmt@simoneairhorn.com
        </a>

        <div style={{ height: "70px" }} />

        {/* INFO */}

        <h2
          className="section-title"
          style={{ marginBottom: "18px" }}
        >
          INFO
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
