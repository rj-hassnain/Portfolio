import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface Props {
  project: Project;
  /** Card view: show a compact preview. Dialog view shows everything. */
  compact?: boolean;
  limit?: number;
  className?: string;
}

/** Shows real screenshots when provided, otherwise a clean placeholder to replace later. */
const ProjectMedia = ({ project, compact, limit, className = "" }: Props) => {
  const landscape = project.orientation === "landscape";
  const imgs = limit ? project.images.slice(0, limit) : project.images;

  if (imgs.length === 0) {
    return (
      <div className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/40 text-center ${className}`}>
        <ImageIcon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
        <p className="px-4 text-xs text-muted-foreground">{project.placeholderNote}</p>
      </div>
    );
  }

  if (landscape) {
    const shown = compact ? imgs.slice(0, 1) : imgs;
    return (
      <div className={`grid gap-3 ${className}`}>
        {shown.map((i) => (
          <img key={i.src} src={i.src} alt={i.alt} loading="lazy" width={1100} height={640} className={`w-full rounded-lg border border-border object-cover object-top ${compact ? "aspect-video" : ""}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-3 overflow-x-auto ${className}`}>
      {imgs.map((i) => (
        <img key={i.src} src={i.src} alt={i.alt} loading="lazy" width={216} height={414} className="h-64 w-auto shrink-0 rounded-lg border border-border object-cover" />
      ))}
    </div>
  );
};

export default ProjectMedia;
