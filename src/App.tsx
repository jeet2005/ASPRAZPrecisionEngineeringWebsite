import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1720188879167-a647eeca5f28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=86&w=1400",
    title: "Machined geometry",
    note: "Illustrative visual / replace with project photography",
  },
  {
    src: "https://images.unsplash.com/photo-1789655468100-9ba563ee49de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=86&w=1400",
    title: "Surface & form",
    note: "Illustrative visual / replace with project photography",
  },
  {
    src: "https://images.unsplash.com/photo-1738918917045-ac8cf1289a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=86&w=1400",
    title: "Machine detail",
    note: "Illustrative visual / replace with project photography",
  },
];

const capabilities = [
  [
    "01",
    "CNC MACHINING",
    "Machining job work shaped around customer drawings, component requirements and repeatable execution.",
  ],
  [
    "02",
    "VMC MACHINING",
    "Controlled multi-axis tool movement for accurate features, profiles and machined surfaces.",
  ],
  [
    "03",
    "PRECISION MILLING",
    "Purposeful material removal for engineered faces, pockets, contours and geometry.",
  ],
  [
    "04",
    "DRILLING & TAPPING",
    "Accurately located holes and threaded features completed to the applicable requirement.",
  ],
  [
    "05",
    "CUSTOM JOB WORK",
    "Flexible machining support for customer-specific components and industrial requirements.",
  ],
];

const processSteps = [
  ["01", "REQUIREMENT", "Understanding the component, drawing and customer requirements."],
  ["02", "PREPARATION", "Machining preparation and practical process planning."],
  ["03", "MACHINING", "Precision CNC and VMC machining execution."],
  ["04", "QUALITY CHECK", "Verification against the applicable specifications."],
  ["05", "DELIVERY", "Completed machining work, ready for its next destination."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <a
      className={`brand ${dark ? "brand-dark" : ""}`}
      href="#home"
      aria-label="ASPRAZ Engineering home"
    >
      <img src="/aspraz-symbol.svg" alt="" />
      <span>
        <b>ASPRÄZ</b>
        <small>ENGINEERING LLP</small>
      </span>
    </a>
  );
}

function MagneticButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (!ref.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${(event.clientX - box.left - box.width / 2) * 0.16}px`);
    ref.current.style.setProperty("--my", `${(event.clientY - box.top - box.height / 2) * 0.16}px`);
  }
  function reset() {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  }
  return (
    <a
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`magnetic ${light ? "magnetic-light" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <i>
        <ArrowIcon />
      </i>
    </a>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-kicker reveal">PRECISION MACHINING / AHMEDABAD, INDIA</div>
      <div className="hero-title">
        <span className="reveal">WE MAKE</span>
        <span className="outline reveal">PRECISION</span>
        <span className="indent reveal">MOVE.</span>
      </div>
      <div className="hero-object">
        <div className="blank-visual" aria-hidden="true" />
      </div>
      <div className="hero-sidecopy">
        <p>
          MADE WITH MACHINES.
          <br />
          DEFINED BY PRECISION.
        </p>
        <small>
          Precision CNC and VMC machining job work built around engineering requirements, accuracy
          and execution.
        </small>
        <div className="hero-actions">
          <MagneticButton href="#work" light>
            EXPLORE OUR WORK
          </MagneticButton>
          <a href="#contact" className="text-link">
            START A PROJECT <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="hero-label label-a">CNC / 01</div>
      <div className="hero-label label-b">VMC / 02</div>
      <div className="hero-label label-c">PRECISION / 03</div>
      <div className="hero-label label-d">ENGINEERING / 04</div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO MOVE</span>
        <i />
      </a>
    </section>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = ["HOME", "ABOUT", "CAPABILITIES", "PROCESS", "WORK", "CONTACT"];
  return (
    <header className="nav">
      <Brand />
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        LET&apos;S TALK <ArrowIcon />
      </a>
      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <i />
        <i />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <span>ASPRÄZ / MENU</span>
        {links.map((link, index) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            <small>0{index + 1}</small>
            {link}
          </a>
        ))}
        <p>PRECISION CNC + VMC MACHINING JOB WORK</p>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about section-light" id="about">
      <div className="section-tag">
        <span>01</span> ABOUT ASPRAZ
      </div>
      <div className="about-heading">
        <h2>
          PRECISION IS
          <br />
          BUILT INTO
          <br />
          <em>EVERY MOVE.</em>
        </h2>
        <div className="blue-disc">
          <span>
            ENGINEERED
            <br />
            TO EXECUTE
          </span>
        </div>
      </div>
      <div className="about-copy">
        <span className="fine-line" />
        <p>
          ASPRAZ ENGINEERING focuses on precision CNC and VMC machining job work, transforming
          machining requirements and engineering drawings into accurately machined components.
        </p>
        <div className="micro-spec">
          <b>A—01</b>
          <span>DRAWING TO COMPONENT</span>
          <b>±</b>
        </div>
      </div>
      <div className="about-shape blank-visual" aria-hidden="true" />
      <div className="marquee" aria-hidden="true">
        <div>
          REQUIREMENT — PREPARATION — MACHINING — CHECK — DELIVERY — REQUIREMENT — PREPARATION —
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-intro">
        <div className="section-tag light">
          <span>02</span> CAPABILITIES
        </div>
        <h2>
          WHAT WE
          <br />
          <i>MOVE</i> FORWARD.
        </h2>
        <p>
          Machining services, not off-the-shelf products. Each requirement starts with your
          component.
        </p>
      </div>
      <div className="cap-layout">
        <div className="cap-list">
          {capabilities.map((cap, index) => (
            <button
              key={cap[1]}
              onPointerEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className={active === index ? "active" : ""}
            >
              <small>{cap[0]}</small>
              <span>{cap[1]}</span>
              <i>
                <ArrowIcon />
              </i>
            </button>
          ))}
        </div>
        <div className="cap-stage" key={active}>
          <div className="cap-visual blank-visual" aria-hidden="true" />
          <div className="cap-info">
            <span>{capabilities[active][0]} / SERVICE</span>
            <p>{capabilities[active][2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Playground() {
  return (
    <section className="playground" aria-label="Interactive mechanical playground">
      <div className="play-grid" />
      <div className="play-head">
        <div className="section-tag light">
          <span>03</span> ENGINEERING SPACE
        </div>
        <h2>
          MACHINE
          <br />
          <span>SPACE.</span>
        </h2>
      </div>
      <div className="play-stage blank-visual" aria-hidden="true" />
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="process section-light" id="process">
      <div className="section-tag">
        <span>04</span> PROCESS
      </div>
      <div className="process-title">
        <h2>
          FROM LINE
          <br />
          TO <em>REALITY.</em>
        </h2>
        <p>A clear path from engineering requirement to completed machining work.</p>
      </div>
      <div className="process-body">
        <div className="process-object">
          <img className="process-logo" src="/aspraz-symbol.svg" alt="ASPRAZ Engineering" />
          <div className="process-counter">
            0{active + 1}
            <small>/ 05</small>
          </div>
        </div>
        <div className="process-list">
          {processSteps.map((step, index) => (
            <button
              key={step[1]}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              onPointerEnter={() => setActive(index)}
            >
              <small>{step[0]}</small>
              <span>{step[1]}</span>
              <p>{step[2]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery" id="work">
      <div className="gallery-head">
        <div className="section-tag light">
          <span>05</span> COMPONENT STUDIES
        </div>
        <h2>
          PRECISION,
          <br />
          ON <i>DISPLAY.</i>
        </h2>
        <p>
          Illustrative industrial studies establish the visual direction. Replace these easily with
          verified ASPRAZ project photography.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <figure className={`gallery-item item-${index + 1}`} key={item.src}>
            <div className="image-wrap">
              <img src={item.src} alt={`Conceptual industrial reference: ${item.title}`} />
              <span>
                VIEW STUDY <ArrowIcon />
              </span>
            </div>
            <figcaption>
              <b>
                0{index + 1} / {item.title}
              </b>
              <small>{item.note}</small>
            </figcaption>
          </figure>
        ))}
        <div className="gallery-orb blank-visual" aria-hidden="true" />
      </div>
    </section>
  );
}

function Why() {
  const strengths = [
    ["01", "Precision-focused machining"],
    ["02", "Customer-specific job work"],
    ["03", "Engineering-driven execution"],
    ["04", "Industrial manufacturing support"],
    ["05", "Customer collaboration"],
  ];
  return (
    <section className="why section-light">
      <div className="why-sticky">
        <div className="section-tag">
          <span>06</span> WHY ASPRAZ
        </div>
        <h2>
          BUILT ON
          <br />
          <em>PRECISION.</em>
          <br />
          DRIVEN BY
          <br />
          EXECUTION.
        </h2>
        <p>
          No invented numbers. No vague promises. Just a focused approach to machining requirements.
        </p>
      </div>
      <div className="strengths">
        {strengths.map((item) => (
          <div className="strength" key={item[0]}>
            <small>{item[0]}</small>
            <h3>{item[1]}</h3>
            <span>
              <ArrowIcon />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <div className="section-tag light">
          <span>07</span> START A CONVERSATION
        </div>
        <h2>
          LET&apos;S MAKE
          <br />
          YOUR NEXT
          <br />
          <i>COMPONENT.</i>
        </h2>
        <p>
          Have a drawing, component or machining requirement? Let&apos;s discuss your next project.
        </p>
        <a className="contact-direct" href="mailto:info@aspraz.com">
          CONTACT ASPRAZ <ArrowIcon />
        </a>
      </div>
      <div className="contact-visual blank-visual" aria-hidden="true" />
      <form onSubmit={submit}>
        <div className="form-row">
          <label>
            NAME *<input required name="name" placeholder="Your name" />
          </label>
          <label>
            COMPANY
            <input name="company" placeholder="Company name" />
          </label>
        </div>
        <div className="form-row">
          <label>
            EMAIL *<input required type="email" name="email" placeholder="name@company.com" />
          </label>
          <label>
            PHONE
            <input type="tel" name="phone" placeholder="+91" />
          </label>
        </div>
        <label>
          REQUIREMENT
          <select name="requirement" defaultValue="">
            <option value="" disabled>
              Select a machining service
            </option>
            {capabilities.map((cap) => (
              <option key={cap[1]}>{cap[1]}</option>
            ))}
          </select>
        </label>
        <label>
          MESSAGE *
          <textarea
            required
            name="message"
            placeholder="Tell us about the component, material or drawing..."
            rows={3}
          />
        </label>
        <button className="submit-btn" type="submit">
          <span>{sent ? "ENQUIRY NOTED" : "START A PROJECT"}</span>
          <i>
            <ArrowIcon />
          </i>
        </button>
        {sent && (
          <p className="form-success" role="status">
            Thank you. Your enquiry has been prepared for ASPRAZ.
          </p>
        )}
      </form>
      <footer>
        <Brand />
        <div>
          <span>NAVIGATE</span>
          <a href="#about">ABOUT</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#process">PROCESS</a>
          <a href="#work">WORK</a>
        </div>
        <div>
          <span>CONTACT</span>
          <a href="mailto:info@aspraz.com">info@aspraz.com</a>
          <small>Contact details are editable placeholders.</small>
        </div>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
        <p>
          © {new Date().getFullYear()} ASPRAZ ENGINEERING LLP <span>PRECISION IN MOTION.</span>
        </p>
      </footer>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`);
      document.documentElement.style.setProperty(
        "--progress",
        `${(window.scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100}%`,
      );
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    return () => {
      removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="progress-bar" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Playground />
        <Process />
        <Gallery />
        <Why />
        <Contact />
      </main>
    </>
  );
}
