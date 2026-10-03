import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function MerchPage() {
  return (
    <main className="page">
      <Navbar />

      <section
        className="center-page"
        style={{
          minHeight: "calc(100vh - 90px)",
          boxSizing: "border-box",
          paddingBottom: "120px",
        }}
      >
        <div className="center-stack">
          <Image
            src="/images/sito-in-lavorazione.png"
            alt="Sito in lavorazione"
            width={1000}
            height={1000}
            priority
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}