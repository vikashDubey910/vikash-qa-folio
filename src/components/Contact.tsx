import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for opportunities to contribute as a QA Engineer. Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all">
            <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:dubeyvikash910@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    dubeyvikash910@gmail.com
                  </p>
                </div>
              </a>
              
              <a href="tel:+919798094982" className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    +91-9798094982
                  </p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Patna, Bihar, India
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="font-semibold text-xl mb-6">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking entry-level QA positions where I can apply my testing skills 
              and grow as a quality assurance professional. Whether it's manual testing, test case 
              creation, or defect tracking, I'm eager to contribute to your team's success.
            </p>
            <div className="space-y-4">
              <Button className="w-full gap-2" size="lg" asChild>
                <a href="mailto:dubeyvikash910@gmail.com">
                  <Send className="w-4 h-4" />
                  Send Me an Email
                </a>
              </Button>
              <Button variant="outline" className="w-full gap-2" size="lg" asChild>
                <a href="/assets/vikash-cv.pdf" download>
                  <Mail className="w-4 h-4" />
                  Request Full CV
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
