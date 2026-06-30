import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Newsletter', to: '/newsletter' },
  { label: 'Contact', to: '/contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="relative z-30 px-6 md:px-10 pt-7">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-sm tracking-[0.25em] uppercase text-navy/80 hover:text-navy transition-colors"
        >
          depthwise
        </Link>

        <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`font-display text-[13px] tracking-wide transition-colors ${
                pathname === item.to ? 'text-navy' : 'text-navy/55 hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-5 flex flex-col items-end gap-3 border-t border-navy/10 pt-5">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-display text-sm tracking-wide text-navy/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
