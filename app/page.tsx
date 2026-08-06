import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <video
          className="backgroundVideo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>
      </section>

      <Footer />
    </main>
  );
}