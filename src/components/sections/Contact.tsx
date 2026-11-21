import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init('FdkErHMYRcml8ehBe');
  }, []);

  const ref = useReveal<HTMLDivElement>();
  const contactInfo = [
    { icon: Mail, label: "Email", value: profile.email, link: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Muhammad Hassnain", link: profile.linkedin },
    { icon: Github, label: "GitHub", value: "rj-hassnain", link: profile.github },
    { icon: MapPin, label: "Location", value: profile.location, link: null as string | null },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const send = emailjs.send("service_xxiz3i1", "template_8g6xuwm", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Hassnain",
      });
      // Don't let the form hang if the email service is slow or down.
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 15000));
      await Promise.race([send, timeout]);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-card/40 py-24">
      <div ref={ref} className="reveal container max-w-5xl">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's talk about your project</h2>
        <p className="max-w-2xl text-muted-foreground">
          Open to client projects, collaborations and conversations with founders and developers. Send a message below or reach out directly.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <ul className="space-y-3">
            {contactInfo.map(({ icon: Icon, label, value, link }) => {
              const inner = (
                <>
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span><span className="block text-xs text-muted-foreground">{label}</span><span className="break-all">{value}</span></span>
                </>
              );
              return (
                <li key={label}>
                  {link ? (
                    <a href={link} {...(link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" autoComplete="name" required value={formData.name} onChange={handleInputChange} /></div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleInputChange} /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} /></div>
            <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange} /></div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <Send className="mr-2 h-4 w-4" />{isSubmitting ? "Sending..." : "Send message"}
            </Button>
            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm">
                  Message sent. Thank you, I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm">
                  Failed to send. The server is busy right now. Please contact me directly at{" "}
                  <a className="font-medium underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}
            </div>
            <p className="text-center text-xs text-muted-foreground">Or email me directly at <a className="text-primary hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
