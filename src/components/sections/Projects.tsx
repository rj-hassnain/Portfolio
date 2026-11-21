import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ProjectMedia from "@/components/ProjectMedia";
import { featuredProjects, otherProjects, type Project } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const CategoryTag = ({ project }: { project: Pick<Project, "category"> }) => (
  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{project.category}</span>
);

const CaseStudy = ({ project, featured }: { project: Project; featured?: boolean }) => (
  <Dialog>
    <article className={`flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 ${featured ? "lg:col-span-2 lg:p-8" : ""}`}>
      <div className={featured ? "grid gap-8 lg:grid-cols-[1fr_auto]" : "flex flex-1 flex-col"}>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <CategoryTag project={project} />
            <span className="text-xs text-muted-foreground">{project.status}</span>
          </div>
          <h3 className={`mt-3 font-semibold tracking-tight ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>{project.title}</h3>
          <p className="mt-3 text-muted-foreground">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, featured ? 10 : 6).map((t) => <li key={t}><Badge variant="secondary" className="font-normal">{t}</Badge></li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 pt-2">
            <DialogTrigger asChild>
              <Button>View case study <ArrowUpRight className="ml-1.5 h-4 w-4" /></Button>
            </DialogTrigger>
            {project.links.map((l) => (
              <Button key={l.url} asChild variant="outline">
                <a href={l.url} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />{l.label}</a>
              </Button>
            ))}
          </div>
        </div>
        <ProjectMedia project={project} limit={featured ? 3 : undefined} className={featured ? "max-w-full lg:max-w-[28rem]" : "order-first mb-5"} />
      </div>
    </article>

    <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
      <DialogHeader>
        <CategoryTag project={project} />
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        <DialogDescription>{project.status}</DialogDescription>
      </DialogHeader>
      <div className="space-y-6 text-sm leading-relaxed">
        <ProjectMedia project={project} />
        {project.confidentialNote && <p className="text-xs text-muted-foreground">{project.confidentialNote}</p>}
        <section>
          <h4 className="mb-2 font-semibold">The problem</h4>
          <p className="text-muted-foreground">{project.problem}</p>
        </section>
        <section>
          <h4 className="mb-2 font-semibold">{project.id === "ai-learning" ? "Project direction" : "What I built"}</h4>
          <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
            {project.built.map((b) => <li key={b}>{b.replace(/^Direction: /, "")}</li>)}
          </ul>
        </section>
        <section>
          <h4 className="mb-2 font-semibold">Technologies</h4>
          <div className="flex flex-wrap gap-2">{project.tech.map((t) => <Badge key={t} variant="secondary" className="font-normal">{t}</Badge>)}</div>
        </section>
      </div>
    </DialogContent>
  </Dialog>
);

const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div ref={ref} className="reveal container">
        <p className="section-label">Featured projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="max-w-2xl text-muted-foreground">Client work, academic work and personal projects, each labeled by type.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((p, i) => <CaseStudy key={p.id} project={p} featured={i === 0} />)}
        </div>

        <h3 className="mb-4 mt-16 text-lg font-semibold">More projects</h3>
        <ul className="divide-y divide-border rounded-xl border border-border bg-card">
          {otherProjects.map((p) => (
            <li key={p.title} className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-medium">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.category} · {p.type}</p>
              </div>
              {p.links.map((l) => (
                <Button key={l.url} asChild variant="ghost" size="sm">
                  <a href={l.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title}: ${l.label}`}>
                    {l.label === "Live" ? <ExternalLink className="mr-2 h-4 w-4" /> : <Github className="mr-2 h-4 w-4" />}{l.label}
                  </a>
                </Button>
              ))}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          More on <a className="text-primary underline-offset-4 hover:underline" href="https://github.com/rj-hassnain" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  );
};

export default Projects;
