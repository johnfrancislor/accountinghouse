// Roof mark echoes the two-tone blue roofline from the original site header.
export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true">
        <path d="M20 2 2 14h6L20 6l12 8h6L20 2Z" fill={light ? "#ffffff" : "#1b2f5e"} />
        <path d="M8 14h24v16H8z" fill="#2457c5" />
        <path d="M17 20h6v10h-6z" fill={light ? "#1b2f5e" : "#ffffff"} />
      </svg>
      <span className="leading-none">
        <span className={`block text-[11px] font-medium uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-muted"}`}>
          The
        </span>
        <span className={`block text-lg font-semibold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          Accounting House
        </span>
      </span>
    </span>
  );
}
