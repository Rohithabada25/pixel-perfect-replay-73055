import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import resume from "@/assets/resume.docx.asset.json";
import invento from "@/assets/invento.jpg";
import oorurate from "@/assets/oorurate.jpg";
import library from "@/assets/library.jpg";

const TITLE = "Bada Rohitha | Full Stack Developer Intern Portfolio";
const DESC =
  "B.Tech AI & ML student and full stack developer skilled in React, Flask, Python, MySQL and REST APIs. Projects, internships and certifications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "rohithabada25@gmail.com";
const LINKEDIN = "https://linkedin.com/in/bada-rohitha-26002a320";
const GITHUB = "https://github.com/Rohithabada25";

const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const skills = [
  { group: "Programming Languages", items: [["Python", 85], ["Java", 70], ["C", 65], ["SQL", 75]] },
  { group: "Web Development", items: [["React", 75], ["HTML", 85], ["Full-Stack Development", 70], ["REST API Integration", 75]] },
  { group: "Backend & Database", items: [["Flask", 75], ["REST APIs", 75], ["MySQL", 75]] },
  { group: "Tools & Core Concepts", items: [["Git & GitHub", 80], ["Visual Studio Code", 85], ["Data Structures & Algorithms", 70], ["Web Application Security", 60]] },
] as const;

const projects = [
  {
    title: "Invento – Inventory Management System",
    img: invento,
    tech: ["React", "Flask", "Python", "MySQL", "REST APIs"],
    points: [
      "Built a full-stack inventory system with React, Flask, and MySQL to manage stock, purchases, and sales in one application.",
      "Implemented product search, quantity sorting, and low-stock detection to flag items that need restocking.",
      "Developed purchase/sales tracking, dashboard summaries, and report generation for at-a-glance business insights.",
      "Integrated the React frontend with the Flask backend via REST APIs; added an in-app Help Guide for onboarding.",
    ],
    github: "https://github.com/Rohithabada25/Invento-Inventory-Management-System",
  },
  {
    title: "OoruRate – Farmer Crop Price Comparison Platform",
    img: oorurate,
    tech: ["Rashtriya Innovation Challenge", "Team Leader"],
    points: [
      "Led a team to build a working prototype that compares crop prices across markets and estimates net earnings.",
      "Designed shared-transport suggestions aimed at lowering farmers’ logistics costs.",
      "Added local-language voice input and manual entry to make the platform accessible to farmers.",
    ],
  },
  {
    title: "Library Management System",
    img: library,
    tech: ["Python", "JSON"],
    points: ["Built a Python library application with JSON-based storage that preserves records across sessions."],
    github: "https://github.com/Rohithabada25/Library_management_system",
  },
];

const internships = [
  {
    role: "Python Programming Intern",
    org: "Oasis Infobyte (AICTE OIB-SIP)",
    date: "May 2026 – June 2026",
    points: [
      "Built three Python applications (BMI Calculator, Password Generator, Weather App) in a one-month internship.",
      "Earned Star Performer recognition.",
    ],
    link: "https://github.com/Rohithabada25/OIBSIP-Python-Programming",
  },
  {
    role: "Data Structures and Algorithms Intern",
    org: "Corizo",
    date: "August 2026 – September 2026",
    points: ["Strengthened problem-solving skills by solving DSA problems in Python through structured training."],
  },
];

const achievements = [
  "Smart India Hackathon 2026 – Team Algo Sphere: Led the team in designing the SIF Risk Detection System, which analyzes free-text safety reports, maps them to IOGP Life-Saving Rules, detects recurring risk patterns, and ranks sites for intervention. Selected in the college-level internal round.",
  "Rashtriya Innovation Challenge, Ratan Tata Innovation Hub, AP: Led the OoruRate prototype team.",
  "HackWithHyderabad 3.0: Collaborated with a team in an 8-hour hackathon at Microsoft Office, Hyderabad (Oct 2026).",
  "Aikyam Change Agent: Received a Certificate of Recognition (March 2026).",
];

const certs = [
  "Web Application Security and Exploitation Techniques – IIT Hyderabad (ISEA Phase-III), September 2026",
  "Mobile App Development Workshop (Flutter, Firebase, APIs) – HSB Technologies at BWEC, July 2026",
  "Getting Started with AI – IBM SkillsBuild, April 2026",
  "Generative AI Mastermind – Outskill",
];

const extras = [
  "Completed the NCC “B” Certificate as an NCC Cadet.",
  "Represented ANU in inter-collegiate Athletics (Dec 2024), Cross Country (Oct 2026); 400m, Amaravati Championship 2026.",
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {children}
    </section>
  );
}

const btn = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5";
const btnPrimary = `${btn} bg-gradient-brand text-primary-foreground shadow-glow`;
const btnGhost = `${btn} glass text-foreground hover:border-primary`;

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            <span className="text-gradient">BR</span>
          </a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-primary">
                {n}
              </a>
            ))}
          </div>
          <a href={resume.url} download="Bada_Rohitha_Resume.docx" className="text-sm font-medium text-primary">
            Resume ↓
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-20">
          <p className="reveal mb-4 text-sm uppercase tracking-[0.3em] text-primary">Hello, I'm</p>
          <h1 className="reveal text-5xl font-bold leading-tight md:text-7xl">Bada Rohitha</h1>
          <p className="reveal mt-4 text-xl font-medium md:text-2xl">
            <span className="text-gradient">Full Stack Developer Intern</span>
          </p>
          <p className="reveal mt-2 text-muted-foreground">React · Flask · Python · MySQL · REST APIs</p>
          <p className="reveal mt-6 max-w-2xl text-lg text-muted-foreground">
            Third-year B.Tech (AI & ML) student who builds end-to-end web applications — seeking a full stack
            developer internship to build reliable, user-focused software.
          </p>
          <p className="reveal mt-3 text-sm text-muted-foreground">Bapatla, Andhra Pradesh, India</p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a href={resume.url} download="Bada_Rohitha_Resume.docx" className={btnPrimary}>
              Download Resume
            </a>
            <a href="#contact" className={btnGhost}>
              Contact Me
            </a>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass p-6 md:col-span-2">
              <h3 className="mb-3 text-lg font-semibold">Professional Summary</h3>
              <p className="leading-relaxed text-muted-foreground">
                Third-year B.Tech (AI & ML) student and aspiring full stack developer who builds end-to-end web
                applications with React, Flask, Python, MySQL, and REST APIs. Developed Invento, an inventory
                management system with sales tracking and low-stock detection; completed Python and Data Structures
                and Algorithms internships (Star Performer, Oasis Infobyte) and web application security training at
                IIT Hyderabad. Team Leader in Smart India Hackathon 2026 and the Rashtriya Innovation Challenge.
                Seeking a full stack developer internship to build reliable, user-focused software.
              </p>
            </div>
            <div className="glass space-y-4 p-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-primary">Education</h3>
                <p className="mt-1">B.Tech in AI & ML</p>
                <p className="text-sm text-muted-foreground">BWEC, Bapatla · CGPA 7.9 · Expected 2028</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-primary">Interests</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Full-stack development, REST APIs, Web application security, Problem solving
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="glass p-6 transition hover:shadow-glow">
                <h3 className="mb-5 font-semibold">{s.group}</h3>
                <div className="space-y-4">
                  {s.items.map(([name, v]) => (
                    <div key={name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{name}</span>
                        <span className="text-muted-foreground">{v}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="glass flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-glow">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640} className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="my-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <List items={p.points} />
                  <div className="mt-auto flex gap-3 pt-6">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className={btnGhost}>
                        GitHub
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">Prototype project</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience & Certifications">
          <div className="grid gap-6 md:grid-cols-2">
            {internships.map((i) => (
              <div key={i.role} className="glass p-6">
                <p className="text-xs uppercase tracking-wider text-primary">{i.date}</p>
                <h3 className="mt-2 text-lg font-semibold">{i.role}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{i.org}</p>
                <List items={i.points} />
                {i.link && (
                  <a href={i.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-primary">
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="glass p-6">
              <h3 className="mb-4 font-semibold">Hackathons & Achievements</h3>
              <List items={achievements} />
            </div>
            <div className="glass p-6">
              <h3 className="mb-4 font-semibold">Certifications & Training</h3>
              <List items={certs} />
            </div>
            <div className="glass p-6">
              <h3 className="mb-4 font-semibold">Extracurricular & Leadership</h3>
              <List items={extras} />
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <ol className="relative ml-3 border-l border-primary/40">
            {[
              { t: "Expected 2028", h: "Bachelor of Technology in Artificial Intelligence and Machine Learning", d: "Bapatla Women’s Engineering College (BWEC), Bapatla, Andhra Pradesh · Acharya Nagarjuna University · CGPA: 7.9" },
              { t: "Intermediate", h: "Class XII (Intermediate)", d: "Score: 97.3%" },
              { t: "Class X", h: "Secondary School Certificate (Class X)", d: "Score: 85.4%" },
            ].map((e) => (
              <li key={e.h} className="mb-8 ml-8">
                <span className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-gradient-brand shadow-glow" />
                <div className="glass p-6">
                  <p className="text-xs uppercase tracking-wider text-primary">{e.t}</p>
                  <h3 className="mt-1 text-lg font-semibold">{e.h}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass space-y-4 p-6">
              <p className="text-muted-foreground">Open to internships and entry-level opportunities. Let's talk!</p>
              <p><span className="text-primary">Email:</span> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p><span className="text-primary">Phone:</span> <a href="tel:+918121249444">8121249444</a></p>
              <p><span className="text-primary">LinkedIn:</span> <a href={LINKEDIN} target="_blank" rel="noreferrer">linkedin.com/in/bada-rohitha-26002a320</a></p>
              <p><span className="text-primary">GitHub:</span> <a href={GITHUB} target="_blank" rel="noreferrer">github.com/Rohithabada25</a></p>
            </div>
            <form onSubmit={onSubmit} className="glass space-y-4 p-6">
              {[["name", "Your name", "text"], ["email", "Your email", "email"]].map(([n, p, t]) => (
                <input key={n} name={n} type={t} required placeholder={p} aria-label={p}
                  className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary" />
              ))}
              <textarea name="message" required rows={4} placeholder="Message" aria-label="Message"
                className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 outline-none focus:border-primary" />
              <button type="submit" className={btnPrimary}>Send Message</button>
              {sent && <p className="text-sm text-accent">Your email app should open now. Thank you!</p>}
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Bada Rohitha
      </footer>
    </div>
  );
}
