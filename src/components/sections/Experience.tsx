import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const Experience = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="scroll-mt-16 bg-card/40 py-24">
      <div ref={ref} className="reveal container max-w-4xl">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked and learned</h2>
        <ol className="mt-10 space-y-0 border-l border-border">
          {experience.map((e) => (
            <li key={e.org} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-semibold">{e.org}</h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-1 text-primary">{e.role}</p>
              <p className="mt-3 text-muted-foreground">{e.description}</p>
              {e.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t) => <Badge key={t} variant="secondary" className="font-normal">{t}</Badge>)}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
