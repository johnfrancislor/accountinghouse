"use client";

// Static for now: opens the visitor's email app with the message pre-filled.
// Swap for a server action / API route when the client wants a real backend.
const OFFICE_EMAIL = "the_office@accountinghouse.ca";

const services = [
  "Accounting & bookkeeping",
  "Financial statement preparation",
  "Personal income tax",
  "Corporate income tax",
  "Payroll services",
  "Something else",
];

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Website enquiry: ${data.get("service")}`;
    const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone") || "-"}\n\n${data.get("message")}`;
    window.location.href = `mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-medium text-navy">
        Name
        <input name="name" required placeholder="Your full name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy">
        Phone <span className="sr-only">(optional)</span>
        <input name="phone" type="tel" placeholder="902-000-0000" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy sm:col-span-2">
        What can we help with?
        <select name="service" className={field} defaultValue={services[0]}>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy sm:col-span-2">
        Message
        <textarea name="message" required rows={4} placeholder="Tell us a little about what you need" className={field} />
      </label>
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 sm:col-span-2 sm:justify-self-start"
      >
        Send message
      </button>
    </form>
  );
}
