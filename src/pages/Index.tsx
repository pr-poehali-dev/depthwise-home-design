import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG = {
  belle: 'https://cdn.poehali.dev/projects/de60ba74-213a-4ee7-9aec-784a94726725/files/668c58a1-f8c7-4024-8b6c-eeb7c93beb98.jpg',
  retreat: 'https://cdn.poehali.dev/projects/de60ba74-213a-4ee7-9aec-784a94726725/files/f2ce2a0a-aed6-49b3-84b7-7759815bb2d9.jpg',
  diver: 'https://cdn.poehali.dev/projects/de60ba74-213a-4ee7-9aec-784a94726725/files/d56e81af-3917-4d25-a032-7b6959f24b74.jpg',
  hands: 'https://cdn.poehali.dev/projects/de60ba74-213a-4ee7-9aec-784a94726725/files/51a9aaec-aa86-4138-9a24-04c6e284b90a.jpg',
};

const NAV = ['Home', 'About', 'Services', 'Newsletter', 'Contact'];

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen font-body text-navy antialiased selection:bg-pink/20">
      {/* Header */}
      <header className="relative z-30 px-6 md:px-10 pt-7">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="font-display text-sm tracking-[0.25em] uppercase text-navy/80 md:opacity-0 md:select-none">
            depthwise
          </span>

          <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="font-display text-[13px] tracking-wide text-navy/70 hover:text-navy transition-colors"
              >
                {item}
              </a>
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
              <a
                key={item}
                href="#"
                className="font-display text-sm tracking-wide text-navy/80"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-plum">
            Belle Guaran
          </p>

          <h1 className="font-display font-medium mt-4 text-6xl md:text-8xl lg:text-9xl tracking-tight text-navy">
            depth<span className="text-pink">wise</span>
          </h1>

          <p className="font-display mt-10 mx-auto max-w-2xl text-xl md:text-2xl leading-snug text-charcoal">
            You stopped learning through play around age 10.
            <br className="hidden md:block" />
            It’s time to bring play back to the boardroom.
          </p>

          <p className="font-display italic text-lg md:text-xl text-ocean mt-6">
            serious shifts, playful methods.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="font-display text-sm tracking-wide px-7 py-3 rounded-full bg-navy text-cream hover:bg-navy/90 transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#"
              className="font-display text-sm tracking-wide px-7 py-3 rounded-full border border-navy/25 text-navy hover:border-navy/60 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Curated photo group */}
        <div className="mx-auto max-w-5xl mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-5 overflow-hidden rounded-2xl aspect-[4/5]">
            <img src={IMG.retreat} alt="Leadership retreat" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="overflow-hidden rounded-2xl aspect-square">
              <img src={IMG.belle} alt="Belle Guaran" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl flex-1 aspect-square md:aspect-auto">
              <img src={IMG.hands} alt="Embodied learning" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 overflow-hidden rounded-2xl aspect-[16/9] md:aspect-auto">
            <img src={IMG.diver} alt="Freediving depth" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Work with depthwise */}
      <section id="work" className="px-6 md:px-10 py-24 border-t border-navy/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-navy">
              Work with <span className="italic font-normal">depthwise</span>
            </h2>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-navy/40">
              Two ways to go deep
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {/* On land */}
            <article className="group relative overflow-hidden rounded-[28px] min-h-[480px] flex flex-col justify-end p-9">
              <img
                src={IMG.retreat}
                alt="On land leadership"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />

              <div className="absolute top-9 left-9 right-9 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-cream">
                  <Icon name="Mountain" size={16} /> On land
                </span>
                <span className="font-display text-sm text-cream/50">01</span>
              </div>

              <div className="relative">
                <p className="font-display text-2xl md:text-[26px] leading-tight text-cream">
                  Leadership training and team shifts disguised as play.
                </p>
                <p className="font-body mt-4 text-cream/75 leading-relaxed max-w-md">
                  Left field solutions to complex leadership problems and capability challenges.
                </p>
                <a
                  href="#"
                  className="font-display text-sm tracking-wide mt-7 inline-flex items-center gap-2 text-cream"
                >
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cream after:transition-all after:duration-300 group-hover:after:w-full">
                    Learn more
                  </span>
                  <Icon name="ArrowUpRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>

            {/* Underwater */}
            <article className="group relative overflow-hidden rounded-[28px] min-h-[480px] flex flex-col justify-end p-9">
              <img
                src={IMG.diver}
                alt="Underwater leadership"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15" />

              <div className="absolute top-9 left-9 right-9 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-cream">
                  <Icon name="Waves" size={16} /> Underwater
                </span>
                <span className="font-display text-sm text-cream/50">02</span>
              </div>

              <div className="relative">
                <p className="font-display text-2xl md:text-[26px] leading-tight text-cream">
                  Accessible, culturally safe and connected freediving training.
                </p>
                <p className="font-body mt-4 text-cream/75 leading-relaxed max-w-md">
                  Bespoke small group retreats for leaders seeking deep shifts.
                </p>
                <a
                  href="#"
                  className="font-display text-sm tracking-wide mt-7 inline-flex items-center gap-2 text-cream"
                >
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cream after:transition-all after:duration-300 group-hover:after:w-full">
                    Learn more
                  </span>
                  <Icon name="ArrowUpRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="px-6 md:px-10 py-20 border-t border-navy/10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-navy">
            Subscribe
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 font-body text-sm rounded-full border border-navy/20 bg-white/60 px-6 py-3.5 outline-none focus:border-ocean transition-colors placeholder:text-navy/40"
            />
            <button
              type="submit"
              className="font-display text-sm tracking-wide px-7 py-3.5 rounded-full bg-pink text-navy hover:bg-pink/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-14 border-t border-navy/10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="font-display text-lg tracking-[0.2em] uppercase text-navy/80">
            depthwise
          </div>
          <div className="flex flex-col gap-3 md:items-end md:text-right max-w-md">
            <a href="#" className="font-display text-sm text-navy/70 hover:text-navy transition-colors">
              Terms of Service
            </a>
            <p className="font-body text-sm text-charcoal/60">Copyright Belle Guaran 2026</p>
            <p className="font-body text-xs leading-relaxed text-charcoal/50">
              I acknowledge the traditional lands and waters on which I live, work and dive,
              and pay my respects to the custodians past, present and future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}