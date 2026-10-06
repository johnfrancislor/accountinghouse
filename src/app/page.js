import Image from "next/image";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

const OFFICE = {
  street: "133 Ilsley Avenue, Unit E",
  city: "Dartmouth, NS B3B 1S9",
  phone: "902-468-0667",
  tel: "+19024680667",
  email: "the_office@accountinghouse.ca",
};

const MAP_QUERY = encodeURIComponent("133 Ilsley Avenue, Dartmouth, NS B3B 1S9");

const icon = {
  ledger: "M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm0 13a3 3 0 0 1 3-3h11M9 8h6",
  chart: "M4 20h16M7 16v-5m5 5V7m5 9v-8",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  building: "M4 20h16M6 20V5l7-2v17m0-11h5v11M9 8h1m-1 4h1m-1 4h1",
  payroll: "M3 7h18v10H3zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 10v4m12-4v4",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  check: "M5 12.5 10 17l9-10",
  folder: "M3 6h6l2 2h10v11H3zM9 13h6",
  sparkle: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6",
};

function Icon({ d, className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-sand" : "text-brand"}`}>{children}</p>
  );
}

const services = [
  {
    title: "Accounting & bookkeeping",
    text: "Accurate, up-to-date books so you always know where your business stands.",
    icon: icon.ledger,
    tint: "bg-sky-50",
  },
  {
    title: "Financial statements",
    text: "Clear financial statements prepared for your lender, investors or year-end.",
    icon: icon.chart,
    tint: "bg-amber-50/70",
  },
  {
    title: "Personal income tax",
    text: "Personal returns prepared carefully, so you claim everything you're entitled to.",
    icon: icon.person,
    tint: "bg-indigo-50",
  },
  {
    title: "Corporate income tax",
    text: "Corporate returns filed correctly and on time, without the year-end scramble.",
    icon: icon.building,
    tint: "bg-emerald-50/70",
  },
  {
    title: "Payroll services",
    text: "Pay your team accurately and stay on top of remittances and filings.",
    icon: icon.payroll,
    tint: "bg-violet-50",
  },
];

const steps = [
  {
    title: "Get in touch",
    text: "Call the office or send us a message. Tell us what you need help with.",
    icon: icon.phone,
  },
  {
    title: "Share your documents",
    text: "Drop off or send your paperwork. We'll let you know exactly what to bring.",
    icon: icon.folder,
  },
  {
    title: "We handle the rest",
    text: "We prepare, review and file, then walk you through everything in plain language.",
    icon: icon.sparkle,
  },
];

const team = [
  { name: "Dawn-Marie Giles", initials: "DG", cell: "902-225-1881", tel: "+19022251881", email: "dmgiles@accountinghouse.ca" },
  { name: "Scott Webster", initials: "SW", cell: "902-222-2200", tel: "+19022222200", email: "swebster@accountinghouse.ca" },
];

const marquee = [
  "Dartmouth",
  "Halifax",
  "Halifax Regional Municipality",
  "Nova Scotia",
  "Individuals",
  "Small businesses",
  "Corporations",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(115deg,#e6edff_0%,#fbf8f1_45%,#e9e6ff_100%)]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <Eyebrow>Dartmouth, Nova Scotia</Eyebrow>
                <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Accounting & tax,{" "}
                  <span className="relative inline-block">
                    done right
                    <svg viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-brand" aria-hidden="true">
                      <path d="M3 11C70 4 160 2 297 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </span>{" "}
                  and on time
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                  The Accounting House Inc. is a full service accounting office. Our mission is to offer exceptional
                  service in a friendly and timely manner to businesses and individuals, at a very reasonable price.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${OFFICE.tel}`}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-navy/20 transition hover:bg-navy-900"
                  >
                    <Icon d={icon.phone} className="h-4 w-4" />
                    Call {OFFICE.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy shadow-sm ring-1 ring-slate-200 transition hover:ring-brand"
                  >
                    Send us a message
                  </a>
                </div>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                  {["Businesses & individuals", "Friendly, timely service", "Reasonable pricing"].map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Icon d={icon.check} className="h-4 w-4 text-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 ring-8 ring-white">
                  <Image
                    src="/images/accountants-nova-scotia.jpg"
                    alt="An accountant reviewing documents with a smiling couple"
                    width={425}
                    height={282}
                    sizes="(min-width: 1024px) 520px, 90vw"
                    preload
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon d={icon.check} className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-tight">
                    <span className="block font-semibold text-ink">Personal & corporate</span>
                    <span className="text-muted">tax preparation</span>
                  </span>
                </div>
                <div className="absolute -right-3 -top-5 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-6">
                  <span className="block text-xs text-muted">Serving</span>
                  <span className="block text-sm font-semibold text-ink">Dartmouth, Halifax & HRM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Everything our house can provide for you
              </h2>
              <p className="mt-4 text-muted">
                One office for your books, your statements, your taxes and your payroll.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`${s.tint} rounded-2xl p-7 text-center transition hover:-translate-y-1 hover:shadow-lg lg:col-span-2 ${
                    i === 3 ? "lg:col-start-2" : ""
                  }`}
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white text-brand shadow-sm">
                    <Icon d={s.icon} />
                  </span>
                  <h3 className="mt-5 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-slate-100 py-6" aria-label="Areas and clients we serve">
          <div className="animate-marquee flex w-max gap-12">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg font-medium text-slate-400" aria-hidden={i >= marquee.length}>
                {m}
                <span className="h-1.5 w-1.5 rounded-full bg-sand" />
              </span>
            ))}
          </div>
        </div>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 bg-slate-50 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Getting started takes three simple steps
                </h2>
              </div>
              <a
                href="#contact"
                className="self-start rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 md:self-auto"
              >
                Get started now
              </a>
            </div>

            <div className="mt-12 grid rounded-3xl bg-white p-4 shadow-sm md:grid-cols-3 md:p-6">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`relative p-6 ${i > 0 ? "border-t border-slate-100 md:border-l md:border-t-0" : ""}`}
                >
                  <span className="pointer-events-none absolute right-6 top-4 text-6xl font-bold text-slate-100" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon d={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-6 font-semibold text-ink">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Mission banner */}
            <div className="relative mt-6 overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-16">
              <svg viewBox="0 0 400 120" className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-[640px] max-w-none opacity-20" aria-hidden="true">
                <path d="M200 0 0 120h60L200 36l140 84h60L200 0Z" fill="#2457c5" />
              </svg>
              <Eyebrow light>Our mission</Eyebrow>
              <blockquote className="relative mx-auto mt-5 max-w-3xl text-2xl font-medium leading-snug text-white sm:text-3xl">
                “To offer exceptional services in a friendly and timely manner to businesses and individuals at a very
                reasonable price.”
              </blockquote>
              <p className="relative mt-6 text-white/70">We look forward to serving you!</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="scroll-mt-20 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Our team</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Talk directly with the people doing your work
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
              {team.map((p) => (
                <article key={p.name} className="rounded-3xl border border-slate-200 p-7 transition hover:border-brand/40 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-navy text-lg font-semibold text-white">
                      {p.initials}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  </div>
                  <div className="mt-6 grid gap-2 text-sm">
                    <a href={`tel:${p.tel}`} className="flex items-center gap-2.5 text-muted transition hover:text-brand">
                      <Icon d={icon.phone} className="h-4 w-4" /> Cell {p.cell}
                    </a>
                    <a href={`mailto:${p.email}`} className="flex items-center gap-2.5 break-all text-muted transition hover:text-brand">
                      <Icon d={icon.mail} className="h-4 w-4 shrink-0" /> {p.email}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-slate-50 px-4 py-24 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Visit or call the office</h2>
              <div className="mt-8 grid gap-4">
                {[
                  { d: icon.pin, label: "Address", value: `${OFFICE.street}, ${OFFICE.city}`, href: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}` },
                  { d: icon.phone, label: "Office", value: OFFICE.phone, href: `tel:${OFFICE.tel}` },
                  { d: icon.mail, label: "Email", value: OFFICE.email, href: `mailto:${OFFICE.email}` },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon d={c.d} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">{c.label}</span>
                      <span className="block break-words font-medium text-ink">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
              <iframe
                title="Map to The Accounting House"
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`}
                className="mt-4 h-64 w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
              <h3 className="text-xl font-semibold text-ink">Send us a message</h3>
              <p className="mt-2 text-sm text-muted">Tell us what you need and we&apos;ll get back to you.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 px-4 py-12 text-white/70 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <p className="text-sm">
            {OFFICE.street}, {OFFICE.city} · <a href={`tel:${OFFICE.tel}`} className="hover:text-white">{OFFICE.phone}</a>
          </p>
          <p className="text-sm">© {new Date().getFullYear()} The Accounting House Inc.</p>
        </div>
      </footer>
    </>
  );
}
