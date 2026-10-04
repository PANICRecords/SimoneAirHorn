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