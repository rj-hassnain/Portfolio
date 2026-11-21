import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <ul className="flex gap-5">
        <li><a className="hover:text-foreground" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a className="hover:text-foreground" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a className="hover:text-foreground" href={`mailto:${profile.email}`}>Email</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
