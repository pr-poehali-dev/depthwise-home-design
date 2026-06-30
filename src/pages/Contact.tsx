import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMG } from '@/lib/images';

const CHANNELS = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'belle@depthwise.com.au',
    href: 'mailto:belle@depthwise.com.au',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn — Belle',
    value: 'in/isabelleguaran',
    href: 'https://www.linkedin.com/in/isabelleguaran',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn — depthwise',
    value: 'depthwise',
    href: '#',
  },
  {
    icon: 'Instagram',
    label: 'Instagram',
    value: '@belle.fins',
    href: 'https://instagram.com/belle.fins',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen font-body text-navy antialiased selection:bg-pink/20">
      <SiteHeader />

      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-6">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-plum">Contact</p>
            <h1 className="font-display font-medium mt-4 text-5xl md:text-7xl tracking-tight leading-[0.95] text-navy">
              Let’s go <span className="italic font-normal">deeper</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-charcoal/80 mt-7 max-w-md">
              If you’re looking for a leadership shift that sticks, reach out. The best place to start
              is a conversation.
            </p>

            <ul className="mt-12 space-y-3">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-5 rounded-2xl border border-navy/10 bg-white/40 px-6 py-5 hover:border-navy/30 transition-colors"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream shrink-0">
                      <Icon name={c.icon} size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xs tracking-[0.2em] uppercase text-navy/40">
                        {c.label}
                      </span>
                      <span className="block font-display text-lg text-navy mt-0.5">{c.value}</span>
                    </span>
                    <Icon name="ArrowUpRight" size={20} className="text-navy/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ocean" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image + acknowledgement */}
          <div className="md:col-span-6">
            <figure className="overflow-hidden rounded-[28px] aspect-[4/5] group">
              <img src={IMG.diver} alt="Freediving" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>
            <p className="font-display italic text-xl text-ocean mt-8 text-center">
              serious shifts, playful methods.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
