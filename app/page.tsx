import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* About, Experience, Projects, Contact dipasang di Sesi 4–5 */}
      </main>
      <Footer />
    </>
  );
}
