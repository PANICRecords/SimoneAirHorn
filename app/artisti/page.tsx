import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ArtistiPage() {
  return (
    <main className="page">
      <Navbar />

      <section className="center-page">
        <div className="center-stack">
          <Image
            src="/images/artists/simoneairhorn.png"
            alt="SimoneAirHorn"
            width={350}
            height={450}
            priority
          />

          <h1 className="page-title">
            SIMONEAIRHORN
          </h1>

          <Link href="/artisti/simoneairhorn">
            <button className="primary-button">
              SCOPRI
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}