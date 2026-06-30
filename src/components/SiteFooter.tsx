import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-14 border-t border-navy/10">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <Link to="/" className="font-display text-lg tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors">
          depthwise
        </Link>
        <div className="flex flex-col gap-3 md:items-end md:text-right max-w-md">
          <Link to="/contact" className="font-display text-sm text-navy/70 hover:text-navy transition-colors">
            Get in touch
          </Link>
          <p className="font-body text-sm text-charcoal/60">Copyright Belle Guaran 2026</p>
          <p className="font-body text-xs leading-relaxed text-charcoal/50">
            I acknowledge the traditional lands and waters on which I live, work and dive,
            and pay my respects to the custodians past, present and future.
          </p>
        </div>
      </div>
    </footer>
  );
}
