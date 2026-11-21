import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/hassnain-portrait.jpg";
import { profile } from "@/data/portfolio";

const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
    <div className="container relative z-10 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Open to international client work
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build practical software across web, mobile, backend and Shopify, from SAP Business One integrations to custom booking systems. As COO of Innoletics, I also work on the business side of shipping products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">View projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact"><Mail className="mr-2 h-4 w-4" /> Contact me</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-elevated">
            <img src={profileImage} alt="Portrait of Muhammad Hassnain" width={750} height={936} className="aspect-[4/5] w-full rounded-xl object-cover object-top" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
