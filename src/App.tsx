import { FormEvent, useEffect, useRef, useState } from "react";

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

function ProcessMark({ stage }: { stage: number }) {
  return (
    <div className={`process-mark-system mark-stage-${stage}`}>
      <span className="mark-axis mark-axis-x">X / 000</span>
      <span className="mark-axis mark-axis-y">Y / 000</span>
      <div className="process-mark mark-echo echo-one" aria-hidden="true" />
      <div className="process-mark mark-echo echo-two" aria-hidden="true" />
      <div className="process-mark mark-main" role="img" aria-label="ASPRAZ symbol" />
      <div className="mark-scan" />
      <div className="mark-registration">
        <i />
        <i />
        <i />
        <i />
      </div>
      <small className="mark-state">
        {
          [
            "INPUT GEOMETRY",
            "PATH PREPARATION",
            "MACHINING FORM",
            "VERIFY PROFILE",
            "FINAL OUTPUT",
          ][stage]
        }
      </small>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-kicker reveal">PRECISION MACHINING / RAJKOT, GUJARAT</div>
      <div className="hero-title">
        <span className="reveal">WE MAKE</span>
        <span className="outline reveal">PRECISION</span>
        <span className="indent reveal">MOVE.</span>
      </div>
      <div className="hero-object hero-engine-visual" aria-hidden="true">
        <iframe src="/jet-engine-morph-loop.html" title="Animated jet engine" />
      </div>
      <div className="hero-brand-studies" aria-label="Three orange ASPRAZ mark treatments">
        <div className="hero-brand-study brand-study-stroke">
          <img src="/aspraz-mark-outline.svg" alt="" />
        </div>
        <div className="hero-brand-study brand-study-lines">
          <img src="/aspraz-mark-lines.svg" alt="" />
        </div>
        <div className="hero-brand-study brand-study-depth">
          <img src="/aspraz-mark-depth.svg" alt="" />
        </div>
      </div>
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
        <div className="company-facts">
          <div>
            <small>BASED IN</small>
            <b>RAJKOT, GUJARAT</b>
          </div>
          <div>
            <small>PARTNERS</small>
            <b>ARTH BHALALA · HIT BHALALA · RISHI BHALALA</b>
          </div>
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
    <section className="playground" aria-label="Engineering space">
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
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
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
          <ProcessMark stage={active} />
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
          <small>Rajkot, Gujarat, India</small>
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

type ChatMessage = { role: "assistant" | "user"; text: string };

function axisReply(question: string) {
  const text = question.toLowerCase();
  if (/partner|founder|owner|arth|rishi|bhalala/.test(text))
    return "ASPRAZ’s partners are Arth Bhalala, Hit Bhalala and Rishi Bhalala. The company is based in Rajkot, Gujarat.";
  if (/where|location|address|rajkot|gujarat/.test(text))
    return "ASPRAZ Engineering LLP is based in Rajkot, Gujarat, India. A full street address has not been provided on this website.";
  if (/quote|price|cost|project|drawing|enquiry|contact|order/.test(text))
    return "To discuss a machining requirement, prepare your drawing, material, quantity, applicable specifications and target delivery date. Use “Start an enquiry” below to open the website’s enquiry form. I cannot issue quotations or submit requests to the team.";
  if (/tolerance|certif|capacity|machine spec|delivery|lead time|material/.test(text))
    return "Materials, tolerances, machine specifications, capacity and lead times need confirmation from ASPRAZ for your specific component. I won’t guess. Include your requirements in the enquiry form for discussion.";
  if (/process|quality|check/.test(text))
    return "The process follows five stages: requirement review, preparation, CNC/VMC machining, quality check against applicable specifications, and delivery of the completed machining work.";
  if (/service|cnc|vmc|mill|drill|tap|capabilit|job work/.test(text))
    return "ASPRAZ focuses on CNC and VMC machining job work, including precision milling, drilling & tapping and customer-specific machining. It supports customer component requirements rather than selling a catalogue of finished products.";
  if (/hello|^hi\\b|hey|help/.test(text))
    return "Hello! I’m Aspraz Axis, the guided assistant inside Mr. ASPRAZ. Ask about machining services, the process, the partners or how to prepare a project enquiry.";
  return "I can help with ASPRAZ’s services, process, location, partners and enquiry preparation. I’m a guided website assistant with preset answers, not live AI or a team member. For component-specific advice, start an enquiry below.";
}

function AxisChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hello, I’m Aspraz Axis. Let’s find the next step for your machining requirement. What would you like to know?" },
  ]);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const conversation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);
  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight;
  }, [messages, open]);
  function send(text: string) {
    const value = text.trim().slice(0, 600);
    if (!value) return;
    setMessages((previous) => [...previous, { role: "user", text: value }, { role: "assistant", text: axisReply(value) }]);
    setDraft("");
  }
  function close() {
    setOpen(false);
    launcher.current?.focus();
  }
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";
  return (
    <div className="fixed right-4 bottom-4 z-[150] flex flex-col items-end gap-3 md:right-7 md:bottom-7">
      {open && (
        <aside
          id="axis-chat"
          aria-label="Mr. ASPRAZ chat with Aspraz Axis"
          onKeyDown={(event) => { if (event.key === "Escape") close(); }}
          className="flex w-[min(390px,calc(100vw-32px))] max-h-[calc(100dvh-110px)] flex-col overflow-hidden rounded-2xl border border-slate-300 bg-[#f7f3ea] text-[#07101f] shadow-2xl"
        >
          <div className="flex shrink-0 items-center gap-3 bg-[#05183c] p-4 text-white">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-500">
              <img src="/aspraz-symbol.svg" alt="" className="h-6 w-8 brightness-0 invert" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold tracking-widest text-orange-300">MR. ASPRAZ</p>
              <h2 className="text-lg font-bold">Aspraz Axis</h2>
              <p className="text-xs text-slate-300">Your machining guide</p>
            </div>
            <button onClick={close} aria-label="Close chat" className={`min-h-11 min-w-11 rounded-full text-2xl hover:bg-white/10 ${focus}`}>×</button>
          </div>
          <p className="shrink-0 border-b border-slate-300 px-4 py-3 text-xs leading-relaxed text-slate-700">Guided answers · Not live AI or team support. Chat stays in this page session and is not sent to ASPRAZ.</p>
          <div ref={conversation} role="log" aria-live="polite" aria-label="Conversation" className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`max-w-[92%] rounded-xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "ml-auto bg-[#05183c] text-white" : "border border-slate-300 bg-white text-slate-800"}`}>
                <p className={`mb-1 text-xs font-bold ${message.role === "user" ? "text-slate-300" : "text-slate-600"}`}>{message.role === "user" ? "You" : "Aspraz Axis"}</p>
                {message.text}
              </div>
            ))}
          </div>
          <div className="shrink-0 border-t border-slate-300 px-4 pt-3">
            <div className="flex flex-wrap gap-2">
              {["Machining services", "Our process", "Location & partners"].map((prompt) => (
                <button key={prompt} onClick={() => send(prompt === "Location & partners" ? "Who are the partners and where are you based?" : prompt)} className={`min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold hover:border-blue-600 ${focus}`}>{prompt}</button>
              ))}
            </div>
            <a href="#contact" onClick={close} className={`mt-3 flex min-h-11 items-center justify-between rounded-lg bg-[#1c62ff] px-4 text-sm font-bold text-white ${focus}`}>Start an enquiry <span aria-hidden="true">↗</span></a>
            <form onSubmit={(event) => { event.preventDefault(); send(draft); }} className="my-3 flex gap-2">
              <input ref={input} aria-label="Message Aspraz Axis" maxLength={600} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask Aspraz Axis…" className={`min-h-11 min-w-0 flex-1 rounded-lg border border-slate-400 bg-white px-3 text-sm ${focus}`} />
              <button disabled={!draft.trim()} type="submit" aria-label="Send message" className={`min-h-11 min-w-11 rounded-lg bg-[#05183c] px-3 text-sm font-bold text-white disabled:bg-slate-600 ${focus}`}>Send</button>
            </form>
          </div>
        </aside>
      )}
      <button ref={launcher} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="axis-chat" aria-label={open ? "Minimize Mr. ASPRAZ chat" : "Open Mr. ASPRAZ chat with Aspraz Axis"} className={`flex min-h-14 items-center gap-3 rounded-full border border-white/30 bg-[#05183c] px-5 py-3 text-white shadow-xl transition-colors hover:bg-[#163665] ${focus}`}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ff5b27]"><img src="/aspraz-symbol.svg" alt="" className="h-5 w-6 brightness-0 invert" /></span>
        <span className="text-left"><span className="block text-sm font-bold">Mr. ASPRAZ</span><span className="block text-xs text-slate-300">Ask Aspraz Axis</span></span>
        <span aria-hidden="true" className="ml-2 text-lg">{open ? "−" : "+"}</span>
      </button>
    </div>
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
      <AxisChat />
    </>
  );
}
