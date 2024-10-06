import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="container flex-grow flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium">Awra web apps boilerplate</h2>
        <p>Start by editing app/page.tsx file.</p>
      </section>
      <Footer />
    </main>
  );
}
