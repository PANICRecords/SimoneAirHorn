import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const concerti = [
  { giorno: "05", mese: "MAR", locale: "SOHO DISCO CLUB", citta: "Cagliari", soldOut: false },
  { giorno: "18", mese: "MAR", locale: "LE PREMIÈRE", citta: "Genova", soldOut: false },
  { giorno: "19", mese: "MAR", locale: "LIVING", citta: "Barberino del Mugello (FI)", soldOut: false },
  { giorno: "01", mese: "APR", locale: "MADEIRA CLUB", citta: "Modena", soldOut: false },
  { giorno: "02", mese: "APR", locale: "GARDINI SOUND", citta: "Pavia", soldOut: true },
  { giorno: "08", mese: "APR", locale: "LE MUSE BILL", citta: "Imola", soldOut: false },
  { giorno: "28", mese: "APR", locale: "THE MALL", citta: "Alghero", soldOut: false },
  { giorno: "17", mese: "AGO", locale: "PLAZA DISCO", citta: "Como", soldOut: false },
  { giorno: "22", mese: "SET", locale: "VILLA MUSIQUE", citta: "Voghera", soldOut: false },
];

export default function ConcertiPage() {
  return (
    <main className="page">
      <Navbar />

      <section className="concerti-page">
        <header className="concerti-header">
          <h1 className="page-title concerti-titolo">CONCERTI</h1>
          <p>DATE LIVE 2026 - 2027</p>
        </header>

        <div className="concerti-list">
          {concerti.map((concerto) => (
            <article
              className="concerto"
              key={`${concerto.giorno}-${concerto.mese}-${concerto.citta}`}
            >
              <div className="concerto-data" aria-label={`${concerto.giorno} ${concerto.mese}`}>
                <span className="concerto-giorno">{concerto.giorno}</span>
                <span className="concerto-mese">{concerto.mese}</span>
              </div>

              <div className="concerto-info">
                <h2>{concerto.citta.toLocaleUpperCase("it-IT")}</h2>
                <p className="concerto-locale">{concerto.locale} ·</p>
                <p className="concerto-luogo">{concerto.citta}, Italia</p>
              </div>

              <div className="concerto-azioni">
                <a className="concerto-biglietti" href="/404work">BIGLIETTI</a>
                {concerto.soldOut && (
                  <span className="concerto-soldout">SOLD OUT</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        .concerti-page {
          width: min(100% - 48px, 1120px);
          margin: 0 auto;
          padding: 132px 0 72px;
          box-sizing: border-box;
          color: #fff;
        }
        .concerti-header {
          border-bottom: 3px solid #414141;
          padding-bottom: 48px;
        }
        .concerti-header h1 {
          margin: 0 0 28px;
        }
        .concerti-header .concerti-titolo {
          color: #cfff04;
        }
        .concerti-header p {
          margin: 0;
          color: #b8b8b8;
          font-size: clamp(20px, 2.2vw, 30px);
          line-height: 1.25;
          font-weight: 400;
          letter-spacing: 0.2px;
        }
        .concerto {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr) 160px;
          align-items: center;
          column-gap: 28px;
          min-height: 150px;
          padding: 26px 0;
          border-bottom: 2px solid #414141;
          box-sizing: border-box;
        }
        .concerto-data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .concerto-giorno {
          color: #fff;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1;
          font-weight: 600;
        }
        .concerto-mese {
          color: #cfff04;
          font-size: clamp(19px, 2vw, 27px);
          line-height: 1;
          font-weight: 400;
        }
        .concerto-info { min-width: 0; }
        .concerto-info h2 {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(23px, 2.5vw, 32px);
          line-height: 1.1;
          font-weight: 600;
          overflow-wrap: anywhere;
        }
        .concerto-locale, .concerto-luogo {
          margin: 0;
          color: #999;
          font-size: clamp(16px, 1.7vw, 23px);
          line-height: 1.5;
          overflow-wrap: anywhere;
        }
        .concerto-azioni {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          gap: 8px;
          min-width: 0;
        }
        .concerto-biglietti {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 9px 12px;
          box-sizing: border-box;
          border: 1.5px solid #cfff04;
          border-radius: 13px;
          color: #cfff04;
          font-size: clamp(16px, 1.7vw, 23px);
          line-height: 1.1;
          text-align: center;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .concerto-biglietti:hover { background: #cfff04; color: #000; }
        .concerto-soldout {
          color: #ff4545;
          font-size: clamp(13px, 1.3vw, 17px);
          line-height: 1.2;
          text-align: center;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .concerti-page { width: calc(100% - 40px); padding-top: 112px; }
          .concerti-header { padding-bottom: 38px; }
          .concerti-header h1 { margin-bottom: 24px; }
          .concerto {
            grid-template-columns: 76px minmax(0, 1fr) 128px;
            column-gap: 18px;
            min-height: 132px;
            padding: 22px 0;
          }
          .concerto-biglietti {
            min-height: 46px;
            padding: 8px 6px;
            border-radius: 11px;
            font-size: 17px;
          }
        }
        @media (min-width: 601px) and (max-width: 1024px) and (orientation: portrait) {
          .concerti-page { width: calc(100% - 40px); padding-top: 112px; }
          .concerti-header h1 { margin-bottom: 24px; }
          .concerti-header p { font-size: 24px; }
          .concerto {
            grid-template-columns: 68px minmax(0, 1fr) 118px;
            column-gap: 16px;
            min-height: 125px;
            padding: 20px 0;
          }
          .concerto-giorno { font-size: 34px; }
          .concerto-mese { font-size: 21px; }
          .concerto-info h2 { font-size: 25px; margin-bottom: 8px; }
          .concerto-locale, .concerto-luogo { font-size: 18px; line-height: 1.4; }
          .concerto-biglietti { min-height: 44px; font-size: 16px; padding: 8px 5px; }
          .concerto-soldout { font-size: 13px; }
        }

        @media (min-width: 601px) and (max-width: 1024px) and (orientation: landscape) {
          .concerti-page { width: calc(100% - 48px); padding-top: 112px; }
          .concerti-header h1 { margin-bottom: 28px; }
          .concerti-header p { font-size: 26px; }
          .concerto {
            grid-template-columns: 78px minmax(0, 1fr) 130px;
            column-gap: 22px;
            min-height: 130px;
            padding: 22px 0;
          }
          .concerto-giorno { font-size: 36px; }
          .concerto-mese { font-size: 22px; }
          .concerto-info h2 { font-size: 27px; margin-bottom: 8px; }
          .concerto-locale, .concerto-luogo { font-size: 19px; line-height: 1.4; }
          .concerto-biglietti { min-height: 46px; font-size: 17px; }
        }

        @media (max-width: 600px) {
          .concerti-page { width: calc(100% - 28px); padding-top: 88px; padding-bottom: 56px; }
          .concerti-header { padding-bottom: 28px; }
          .concerti-header h1 { margin-bottom: 18px; }
          .concerti-header p { font-size: clamp(17px, 4.4vw, 22px); }
          .concerto {
            grid-template-columns: 48px minmax(0, 1fr) 88px;
            column-gap: 10px;
            min-height: 112px;
            padding: 18px 0;
            border-bottom-width: 2px;
          }
          .concerto-data { gap: 6px; }
          .concerto-giorno { font-size: 27px; }
          .concerto-mese { font-size: 16px; }
          .concerto-info h2 { font-size: clamp(16px, 4.3vw, 20px); margin-bottom: 6px; }
          .concerto-locale, .concerto-luogo { font-size: clamp(12px, 3.2vw, 15px); line-height: 1.4; }
          .concerto-biglietti {
            min-height: 38px;
            padding: 7px 3px;
            border-radius: 9px;
            border-width: 1.5px;
            font-size: 12px;
          }
          .concerto-soldout { font-size: 10px; }
        }
        @media (max-width: 360px) {
          .concerto { grid-template-columns: 52px minmax(0, 1fr) 88px; column-gap: 8px; }
          .concerto-giorno { font-size: 28px; }
          .concerto-mese { font-size: 17px; }
          .concerto-biglietti { font-size: 12px; }
        }
      `}</style>
    </main>
  );
}
