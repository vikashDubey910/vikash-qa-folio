import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about ensuring software quality and delivering exceptional user experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Master of Computer Applications (MCA)</p>
                    <p className="text-sm text-muted-foreground">IGNOU • Pursuing (Semester 1)</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-sm text-muted-foreground">MMHAP University, Patna • 2025 • 72%</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Languages</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>English</span>
                    <span className="text-sm text-muted-foreground">Proficient</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hindi</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="font-semibold text-xl mb-4">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            As a recent BCA graduate with a strong foundation in software testing, I bring a detail-oriented 
            approach to quality assurance. My hands-on experience with e-commerce and library management system 
            testing has equipped me with practical knowledge of STLC, defect tracking, and various testing 
            methodologies. I am eager to apply my skills in manual testing, test case creation, and bug reporting 
            to contribute to software quality initiatives. Currently pursuing my MCA to further enhance my technical 
            expertise and stay updated with industry best practices.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
