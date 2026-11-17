"use client";
import { useEffect, useRef, useState } from "react";
import { site, platforms, endToEnd, skills, services, process, testimonials, faqs, projects } from "../data/site";

const domains = ["All", ...Array.from(new Set(projects.map((p) => p.domain)))];
const hueOf = (d) => (domains.indexOf(d) * 53 + 215) % 360;
const ext = { target: "_blank", rel: "noopener noreferrer" };
const live = platforms.filter((p) => p.url);
const allSkills = skills.flatMap((g) => g.items);

function Counter({ value }) {
  const m = String(value).match(/^(\d+)(.*)$/);
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!m || !ref.current) return;
    const target = +m[1];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1300, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  if (!m) return <span>{value}</span>;
  return <span ref={ref}>{n}{m[2]}</span>;
}

function Rotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return <span className="rot"><span key={i} className="rot-word">{words[i]}</span></span>;
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [menu, setMenu] = useState(false);
  const bar = useRef(null);
  const shown = projects.filter((p) => filter === "All" || p.domain === filter);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const toggleTheme = () => {
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
  };
  const go = () => setMenu(false);

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo"><span className="logo-mark">A</span>{site.name}</a>
          <button className="burger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><span /><span /><span /></button>
          <nav className={menu ? "open" : ""} aria-label="Main">
            <a href="#work" onClick={go}>Work</a>
            <a href="#skills" onClick={go}>Skills</a>
            <a href="#services" onClick={go}>Services</a>
            <a href="#about" onClick={go}>About</a>
            <a href="#hire" onClick={go}>Platforms</a>
            <button className="theme" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? "Light" : "Dark"}</button>
            <a href="#contact" className="btn small" onClick={go}>Hire me</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="blob b1" aria-hidden="true" /><div className="blob b2" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div>
              <p className="status rise" style={{ "--d": "0ms" }}><span className="dot" aria-hidden="true" />{site.availability}</p>
              <h1 className="rise" style={{ "--d": "100ms" }}>
                <span className="sr-only">{site.headline}</span>
                <span aria-hidden="true">I build <Rotator words={site.rotating} /> that clients can launch and run.</span>
              </h1>
              <p className="lead rise" style={{ "--d": "220ms" }}>{site.intro}</p>
              <div className="actions rise" style={{ "--d": "320ms" }}>
                <a className="btn" href="#contact">Start a project</a>
                <a className="btn ghost" href="#work">See my work</a>
                {site.resume && <a className="btn ghost" href={site.resume} {...ext}>Download resume</a>}
              </div>
              <div className="plat-strip rise" style={{ "--d": "420ms" }}>
                <span>Find me on</span>
                {live.map((p) => <a key={p.name} href={p.url} {...ext}>{p.name}</a>)}
              </div>
            </div>
            <aside className="contact-card rise" style={{ "--d": "300ms" }} aria-label="Contact details">
              <h2>Talk to me directly</h2>
              <a href={`tel:+${site.phoneRaw}`}><span>Call</span>{site.phone}</a>
              <a href={`https://wa.me/${site.phoneRaw}`} {...ext}><span>WhatsApp</span>{site.phone}</a>
              <a href={`mailto:${site.email}`}><span>Email</span>{site.email}</a>
              <p>{site.availability}. Replies within one working day.</p>
            </aside>
          </div>
          <div className="wrap">
            <dl className="facts" data-reveal>
              {site.stats.map((s) => (<div key={s.label}><dd><Counter value={s.value} /></dd><dt>{s.label}</dt></div>))}
              <div><dd>{site.location.split(" · ")[0]}</dd><dt>Based in</dt></div>
            </dl>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">{[...allSkills, ...allSkills].map((s, i) => <span key={i}>{s}</span>)}</div>
        </div>

        <section id="e2e" className="wrap section">
          <div data-reveal><h2>Everything in one place, fully complete</h2><p className="sub">From first idea to a live product, with no hand-offs between teams.</p></div>
          <ol className="e2e">
            {endToEnd.map((e, i) => (
              <li key={e.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <b>{i + 1}</b><h3>{e.title}</h3><p>{e.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="wrap section">
          <div className="sec-head" data-reveal>
            <div><h2>Selected work</h2><p className="sub">Real projects across web, e-commerce, education and booking.</p></div>
            <div className="filters" role="group" aria-label="Filter projects by type">
              {domains.map((d) => (
                <button key={d} className={d === filter ? "chip on" : "chip"} aria-pressed={d === filter} onClick={() => setFilter(d)}>{d}</button>
              ))}
            </div>
          </div>
          <ul className="cards">
            {shown.map((p, i) => (
              <li key={p.name + filter} className="card pop" style={{ "--h": hueOf(p.domain), "--d": `${i * 70}ms` }}>
                <div className="tile">
                  {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" /> : <span className="tile-letter" aria-hidden="true">{p.name[0]}</span>}
                  <span className="tile-badge">{p.domain}</span>
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <ul className="tags">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
                  <div className="card-links">
                    {p.apk && <a href={p.apk} {...ext}>Download APK</a>}
                    {p.live && <a href={p.live} {...ext}>Live site</a>}
                    <a href={p.repo} {...ext}>Source code</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="wrap section">
          <h2 data-reveal>Skills and tools</h2>
          <div className="skills">
            {skills.map((g, i) => (
              <div key={g.group} className="skill-group" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{g.group}</h3>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="wrap section">
          <h2 data-reveal>What I can build for you</h2>
          <div className="services">
            {services.map((s, i) => (
              <div key={s.title} className="svc" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{s.title}</h3><p>{s.text}</p><small>{s.from}</small>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="wrap section two">
          <div data-reveal>
            <h2>About me</h2>
            {site.about.map((t, i) => <p key={i} className="about">{t}</p>)}
          </div>
          <div data-reveal>
            <h2>How we work together</h2>
            <ol className="steps">
              {process.map((s) => (<li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>))}
            </ol>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="wrap section">
            <h2 data-reveal>Client feedback</h2>
            <div className="services">
              {testimonials.map((t) => (
                <figure key={t.name} className="svc" data-reveal><blockquote>{t.quote}</blockquote><figcaption><b>{t.name}</b>, {t.role}</figcaption></figure>
              ))}
            </div>
          </section>
        )}

        <section id="hire" className="wrap section">
          <h2 data-reveal>Hire me on your preferred platform</h2>
          <div className="platforms">
            {live.map((p, i) => (
              <a key={p.name} className="plat" href={p.url} {...ext} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <strong>{p.name}</strong><span>{p.note}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap section narrow">
          <h2 data-reveal>Common questions</h2>
          {faqs.map((f) => (<details key={f.q} data-reveal><summary>{f.q}</summary><p>{f.a}</p></details>))}
        </section>

        <section id="contact" className="wrap section">
          <div className="cta" data-reveal>
            <h2>Have a project in mind?</h2>
            <p>Tell me what you need and your timeline. I reply within one working day.</p>
            <div className="actions">
              <a className="btn light" href={`mailto:${site.email}?subject=Project enquiry`}>Email me</a>
              <a className="btn outline" href={`https://wa.me/${site.phoneRaw}`} {...ext}>WhatsApp</a>
              <a className="btn outline" href={`tel:+${site.phoneRaw}`}>Call {site.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.email} · {site.phone}</span>
      </footer>

      <a className="wa-float" href={`https://wa.me/${site.phoneRaw}`} {...ext} aria-label="Chat on WhatsApp">Chat</a>
    </>
  );
}
