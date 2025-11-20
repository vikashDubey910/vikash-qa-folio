import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/vikash-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Decorative circles and shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-300" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-700" />
      
      {/* Abstract line decorations */}
      <svg className="absolute top-32 right-10 w-24 h-24 text-primary/30 animate-bounce" viewBox="0 0 100 100">
        <path d="M 10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
      
      <svg className="absolute bottom-32 left-20 w-32 h-32 text-accent/30" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="50" cy="30" r="3" fill="currentColor" />
        <circle cx="80" cy="20" r="3" fill="currentColor" />
      </svg>

      <div className="container max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-wider text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                Welcome to my Portfolio
              </span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Hello, I'm <br />
                <span className="text-primary">Vikash Kumar</span><br />
                <span className="text-foreground">Dubey</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                QA Testing Engineer
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Recent BCA graduate with a keen interest in software testing. Specialized in manual testing, 
              test case writing, and defect tracking. Looking to contribute quality-focused solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
                <a href="mailto:dubeyvikash910@gmail.com">Hire Me</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-all border-2" asChild>
                <a href="/assets/vikash-cv.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:dubeyvikash910@gmail.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image with decorations */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Orange decorative circle */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary rounded-full opacity-80 animate-bounce" style={{ animationDuration: '3s' }} />
              
              {/* Small decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse" />
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-primary rounded-full opacity-40" />
              <div className="absolute top-1/3 -right-4 w-6 h-6 bg-accent rounded-full opacity-50 animate-pulse delay-500" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
                <img 
                  src={profileImage} 
                  alt="Vikash Kumar Dubey - QA Testing Engineer"
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                />
                
                {/* Experience badge */}
                <div className="absolute bottom-8 -right-4 bg-card border-2 border-primary px-6 py-3 rounded-full shadow-lg animate-pulse">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative lines */}
              <svg className="absolute -top-12 right-0 w-20 h-20 text-primary/40" viewBox="0 0 100 100">
                <path d="M 10 10 L 90 10 M 10 30 L 70 30 M 10 50 L 90 50" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;