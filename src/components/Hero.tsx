import { Button } from "@/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/vikash-profile.jpg";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Vikash Kumar <span className="text-primary">Dubey</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                QA Testing Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recent BCA graduate with a keen interest in software testing. Specialized in manual testing, 
              test case writing, and defect tracking. Looking to contribute quality-focused solutions in a 
              dynamic software development environment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                <Mail className="w-4 h-4" />
                <a href="mailto:dubeyvikash910@gmail.com">Hire Me</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="/assets/vikash-cv.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 text-sm">
              <a href="mailto:dubeyvikash910@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                dubeyvikash910@gmail.com
              </a>
              <a href="tel:+919798094982" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91-9798094982
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;