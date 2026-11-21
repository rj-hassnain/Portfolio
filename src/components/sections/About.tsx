import { useReveal } from "@/hooks/useReveal";

const points = [
  { title: "Build", text: "Web apps, mobile apps, backend APIs, Shopify customizations and enterprise integrations." },
  { title: "Operate", text: "As COO of Innoletics I handle the business and operations side of a developing software company." },
  { title: "Learn", text: "Currently exploring automation workflows, n8n, Claude-based automation and MCP fundamentals." },
];

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <div ref={ref} className="reveal container">
        <p className="section-label">About</p>
        <h2 className="section-title">Developer who also thinks in business terms</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a software developer with hands-on experience in web development, mobile apps, backend systems, Shopify customization and enterprise software integration.
            </p>
            <p>
              My client work includes a Shopify booking system and a mobile app integrated with SAP Business One, alongside academic and personal projects. I'm a BSCS student at COMSATS University Islamabad, Wah Campus.
            </p>
            <p>
              I'm interested in building products, solving real business problems and working with international clients and founders.
            </p>
          </div>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
