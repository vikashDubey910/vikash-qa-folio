import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
 const handleDownloadCV = () => {
    const link = document.createElement("a");
  link.href = "https://vikashdubey910.github.io/assets/VIKASH_QA_RESUME.pdf";
    link.download = "VIKASH_QA_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://i.postimg.cc/Znwxn071/Whats-App-Image-2025-11-20-at-9-50-13-AM.jpg"
            alt="Vikash Kumar Dubey"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Vikash Kumar Dubey
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          QA Testing Engineer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Specializing in manual testing, test case creation, and defect tracking. 
          BCA graduate with hands-on experience in e-commerce and library management system testing.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={handleDownloadCV} className="gap-2">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
