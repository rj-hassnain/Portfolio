import { GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const Education = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="scroll-mt-16 bg-card/40 py-24">
      <div ref={ref} className="reveal container max-w-4xl">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic background</h2>
        <div className="mt-8 flex gap-5 rounded-xl border border-border bg-card p-6">
          <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold">COMSATS University Islamabad, Wah Campus</h3>
            <p className="mt-1 text-primary">Bachelor of Science in Computer Science (BSCS)</p>
            <p className="mt-2 text-muted-foreground">Currently in the seventh semester.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
