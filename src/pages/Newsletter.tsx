import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const ISSUES = [
  {
    no: '03',
    title: 'On games that aren’t games',
    note: 'Why the most serious leadership work happens when it stops looking like work.',
  },
  {
    no: '02',
    title: 'Pressure as a teacher',
    note: 'What freediving taught me about leading teams through the unknown.',
  },
  {
    no: '01',
    title: 'Bringing play back to the boardroom',
    note: 'The first dispatch — on adulthood, learning, and the methods we left behind.',
  },
];

export default function Newsletter() {
  return (
    <div className="min-h-screen font-body text-navy antialiased selection:bg-pink/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-ocean/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-plum">Newsletter</p>
          <h1 className="font-display font-medium mt-4 text-5xl md:text-7xl tracking-tight leading-[0.95] text-navy max-w-3xl">
            Dispatches from the <span className="italic font-normal">deep end</span>
          </h1>
          <p className="font-body text-lg leading-relaxed text-charcoal/80 mt-6 max-w-xl">
            Occasional notes on leadership, play, freediving and the conditions under which people
            genuinely shift. No noise, no slide decks.
          </p>
        </div>
      </section>

      {/* Subscribe card */}
      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-navy text-cream px-8 md:px-14 py-12 md:py-16 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-pink/25 blur-[110px]" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight leading-tight">
                Subscribe on Kit
              </h2>
              <p className="font-body text-cream/70 mt-3 max-w-md">
                Read past issues and join the list on the depthwise creator page.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href="#"
                className="group font-display text-sm tracking-wide px-8 py-4 rounded-full bg-pink text-navy hover:bg-pink/90 transition-colors inline-flex items-center gap-2"
              >
                Open the creator page
                <Icon name="ArrowUpRight" size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-navy/40">Recent issues</p>
          <ul className="mt-6 border-t border-navy/10">
            {ISSUES.map((issue) => (
              <li key={issue.no}>
                <a href="#" className="group flex items-start gap-6 md:gap-10 py-7 border-b border-navy/10">
                  <span className="font-display text-sm text-navy/35 tabular-nums pt-1">{issue.no}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight text-navy group-hover:text-ocean transition-colors">
                      {issue.title}
                    </h3>
                    <p className="font-body text-charcoal/70 mt-2 max-w-xl">{issue.note}</p>
                  </div>
                  <Icon name="ArrowUpRight" size={22} className="text-navy/40 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ocean" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
