import { skillGroups } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const Skills = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <div ref={ref} className="reveal container">
        <p className="section-label">Technical skills</p>
        <h2 className="section-title">Tools I work with</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">{g.title}</h3>
                {g.note && <span className="font-mono text-[11px] text-muted-foreground">{g.note}</span>}
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-md bg-secondary px-2.5 py-1 text-sm text-secondary-foreground">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
