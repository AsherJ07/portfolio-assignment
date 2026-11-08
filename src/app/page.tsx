import { ArrowUpRightIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { education, experience, featuredProjects, skillGroups } from "@/data/portfolio";

const impactSignals = [
  { value: "232", label: "AI diagnoses evaluated against historical escalations" },
  { value: "30K+", label: "videos translated into creator intelligence" },
  { value: "300K+", label: "multilingual claims curated for LLM research" },
] as const;

const approach = [
  {
    number: "01",
    title: "Listen for the real constraint",
    description:
      "Start with the people closest to the problem. Interviews and operating context separate visible symptoms from the decision that actually needs support.",
  },
  {
    number: "02",
    title: "Make the system legible",
    description:
      "Turn ambiguous inputs into requirements, hypotheses, and success measures that technical and business teams can challenge together.",
  },
  {
    number: "03",
    title: "Build evidence, not theater",
    description:
      "Prototype the smallest credible path, evaluate it against real cases, and communicate what the evidence supports—including its limits.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Product strategy · Analytics · Applied AI</p>
            <h1 id="hero-title">I turn complex signals into products people can act on.</h1>
            <p className="hero-lede">
              I&apos;m Asher Javaid—a product and analytics professional who connects customer
              context, technical systems, and measurable evidence to move ambiguous work
              forward.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button--primary" href="#work">
                Explore selected work
                <ArrowUpRightIcon />
              </a>
              <a className="button button--secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="signal-board" aria-label="Selected impact signals">
            <div className="signal-board__header">
              <span>Selected evidence</span>
              <span className="signal-board__status">
                <span aria-hidden="true" /> Career snapshot
              </span>
            </div>
            <div className="signal-board__grid">
              {impactSignals.map((signal, index) => (
                <div className="signal" key={signal.value}>
                  <span className="signal__index">0{index + 1}</span>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
            <div className="signal-board__footer">
              <span>Purdue MS BAIM · 4.0 GPA</span>
              <span>CS foundation · Product lens</span>
            </div>
          </aside>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-shell section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Three problems. Three kinds of evidence.</h2>
            </div>
            <p>
              A closer look at how I frame decisions, contribute across disciplines, and
              measure whether a solution holds up beyond the demo.
            </p>
          </div>

          <div className="project-list section-shell">
            {featuredProjects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className="project-card__intro">
                  <p className="project-number">Case study 0{index + 1}</p>
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="tag-list" aria-label="Technologies and methods">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <figure className="project-card__visual">
                  <ProjectVisual type={project.visual} />
                  <figcaption>Original illustrative visual—not a product screenshot.</figcaption>
                </figure>

                <div className="case-study-grid">
                  <div>
                    <p className="case-label">Context</p>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <p className="case-label">My contribution</p>
                    <p>{project.contribution}</p>
                  </div>
                  <div>
                    <p className="case-label">Result</p>
                    <p>{project.result}</p>
                  </div>
                </div>

                <dl className="evidence-row">
                  {project.evidence.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-shell">
            <div className="section-heading section-heading--light">
              <div>
                <p className="eyebrow">How I work</p>
                <h2 id="approach-title">Clarity before complexity.</h2>
              </div>
              <p>
                My best work sits between disciplines: rigorous enough for technical teams,
                legible enough for decision-makers, and grounded in the people using it.
              </p>
            </div>
            <ol className="approach-grid">
              {approach.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="capabilities-section section-shell" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="capabilities-title">Built through use, not percentages.</h2>
            </div>
            <p>
              Proficiency is described by where each skill has been applied so the signal is
              specific, accessible, and easy to discuss in an interview.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.context}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="background-section section-shell" aria-labelledby="background-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Background</p>
              <h2 id="background-title">A technical foundation with a business point of view.</h2>
            </div>
          </div>

          <div className="background-grid">
            <div>
              <h3>Experience</h3>
              <ol className="timeline">
                {experience.map((item) => (
                  <li key={`${item.organization}-${item.role}`}>
                    <div>
                      <strong>{item.organization}</strong>
                      <span>{item.role}</span>
                    </div>
                    <span>{item.period}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3>Education</h3>
              <ol className="timeline">
                {education.map((item) => (
                  <li key={item.school}>
                    <div>
                      <strong>{item.school}</strong>
                      <span>{item.degree}</span>
                    </div>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ol>
              <p className="coursework-note">
                Graduate work includes data mining, visual analytics, cloud computing,
                advanced databases, digital product design, big data and MLOps, reinforcement
                learning and LLMs, and AI for business decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let&apos;s make the next decision clearer.</h2>
              <p>
                I&apos;m interested in thoughtful product, analytics, and applied AI work where
                customer context and technical evidence both matter.
              </p>
            </div>
            <div className="contact-links" aria-label="Professional contact links">
              <a href="mailto:asherjavaid700@gmail.com">
                <MailIcon />
                <span>
                  <small>Email</small>
                  asherjavaid700@gmail.com
                </span>
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/asher-javaid-210160242/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <span>
                  <small>LinkedIn</small>
                  Connect professionally
                </span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <p>© {new Date().getFullYear()} Asher Javaid</p>
          <p>Designed around evidence, access, and useful clarity.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
