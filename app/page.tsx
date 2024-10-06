import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="container flex-grow flex flex-col justify-center items-center gap-4 py-12">
        <h2 className="text-2xl font-medium">Awra web apps boilerplate</h2>
        <p className="text-xl font-medium">READ ME: IMPORTANT</p>
        <p className="text-center">Start by editing app/page.tsx file.</p>
        <p className="text-center">
          Mobile menu is already configured in the project. You may check it
          using the responsive mode in the browser. It can be used or removed as
          required by the project.
        </p>
      </section>
      <Footer />
    </main>
  );
}
