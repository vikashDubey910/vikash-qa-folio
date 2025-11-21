import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email").max(255),
  message: z.string().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      contactSchema.parse(data);

      await emailjs.send(
        "service_p5cjvgn",
        "template_ltj61t5",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "81ER_VuH0_SlxnOu2"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
        
        <div className="mb-8 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:dubeyvikash910@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              dubeyvikash910@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+919798094982" className="text-muted-foreground hover:text-primary transition-colors">
              +91-9798094982
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
