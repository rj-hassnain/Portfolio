import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onScroll = () => { if (window.scrollY < 200) setActive(""); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav aria-label="Main" className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight hover:text-primary transition-colors" aria-label="Muhammad Hassnain, home">
          mh<span className="text-primary">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "true" : undefined}
                className={`px-3 py-2 text-sm rounded-md transition-colors hover:text-foreground ${active === i.id ? "text-foreground" : "text-muted-foreground"}`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="md:hidden container pb-4 space-y-1">
          {navItems.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navigation;
