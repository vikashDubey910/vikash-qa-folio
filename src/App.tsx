import { Toaster } from "@/components/ui/toaster";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
