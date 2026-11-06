import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContattiPage() {
  return (
    <main className="page contatti-page">
      <Navbar />

      <div className="content-900 page-content contatti-content">
        <h1 className="page-title contatti-title">CONTATTI</h1>

        <div className="contatti-sections">
          {/* BOOKING & MANAGEMENT */}
          <section className="contatti-item">
            <h2 className="section-title contatti-heading">
              BOOKING &amp; MANAGEMENT
            </h2>
            <a
              className="contatti-email"
              href="mailto:mgmt@simoneairhorn.com"
            >
              mgmt@simoneairhorn.com
            </a>
          </section>

          {/* INFO */}
          <section className="contatti-item">
            <h2 className="section-title contatti-heading">INFO</h2>
            <a
              className="contatti-email"
              href="mailto:panicrecords13@gmail.com"
            >
              panicrecords13@gmail.com
            </a>
          </section>
        </div>
      </div>

      <Footer />

      <style>{`
        .contatti-page {
          min-height: 100vh;
        }

        .contatti-content {
          box-sizing: border-box;
          min-height: calc(100vh - 90px);
          padding-bottom: 120px;
        }

        /* Titolo e contatti condividono lo stesso asse di allineamento. */
        .contatti-title {
          color: #cfff04;
          text-align: left;
          width: 100%;
          margin: 0 0 72px;
        }

        .contatti-sections {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 58px;
          width: 100%;
        }

        .contatti-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          min-width: 0;
        }

        .contatti-heading {
          margin: 0 0 16px;
          text-align: left;
        }

        .contatti-email {
          display: inline-block;
          max-width: 100%;
          color: #fff;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.45;
          text-decoration: none;
          overflow-wrap: anywhere;
          word-break: normal;
          transition: color 0.2s ease;
        }

        .contatti-email:hover {
          color: #cfff04;
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .contatti-content {
            padding-bottom: 100px;
          }

          .contatti-title {
            margin-bottom: 62px;
          }

          .contatti-sections {
            gap: 48px;
          }
        }

        /* Smartphone, sia verticale sia orizzontale */
        @media (max-width: 600px) {
          .contatti-content {
            min-height: calc(100vh - 75px);
            padding-bottom: 80px;
          }

          .contatti-title {
            margin-bottom: 48px;
          }

          .contatti-sections {
            gap: 40px;
          }

          .contatti-heading {
            margin-bottom: 12px;
          }

          .contatti-email {
            font-size: clamp(17px, 4.5vw, 21px);
          }
        }

        /* Smartphone in orizzontale: riduce gli spazi verticali. */
        @media (max-width: 900px) and (orientation: landscape) {
          .contatti-content {
            padding-bottom: 65px;
          }

          .contatti-title {
            margin-bottom: 38px;
          }

          .contatti-sections {
            gap: 30px;
          }
        }
      `}</style>
    </main>
  );
}
