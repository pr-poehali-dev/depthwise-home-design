import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMG } from '@/lib/images';

const UNDERWATER = [
  {
    tag: 'Coming in 2026',
    title: 'Wave 1 & Wave 2 freediving courses',
    body: 'Two-day freediving courses that come with a Molchanovs certification. Auslan-only cohorts will be available.',
  },
  {
    tag: 'Coming in 2026',
    title: 'depth for leaders',
    body: 'Freediving and leadership have more in common than you might expect. Both require presence, trust, and the ability to perform under pressure. A structured introduction to freediving with leadership reflection woven through. More details coming soon.',
  },
  {
    tag: 'Expressions of interest',
    title: 'depthwise retreats',
    body: 'Bespoke small-group retreats in some of the world’s most extraordinary locations, for leaders who have done the courses, read the books, and know there is still something more to unlock. Places are limited and filled by application.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen font-body text-navy antialiased selection:bg-pink/20">
      <SiteHeader />

      {/* Header */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-plum">Services</p>
          <h1 className="font-display font-medium mt-4 text-5xl md:text-7xl tracking-tight leading-[0.95] text-navy">
            Two ways to <span className="italic font-normal">go deep</span>
          </h1>
        </div>
      </section>

      {/* On land */}
      <section className="px-6 md:px-10 py-12 border-t border-navy/10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-coral">
              <Icon name="Mountain" size={16} /> On land
            </span>
            <figure className="mt-6 overflow-hidden rounded-[24px] aspect-[4/3] group">
              <img src={IMG.retreat} alt="On land sessions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>
          </div>
          <div className="md:col-span-7 space-y-5 font-body text-lg leading-relaxed text-charcoal/90">
            <p>
              Somewhere between childhood and the boardroom, we stopped learning through play. We
              replaced it with slide decks, workbooks that disappear into drawers, and team building
              days that could be an episode of a TV satire show.
            </p>
            <p>
              The result is leadership development that doesn’t stick. It’s got nothing to do with the
              skill and commitment of those involved, and everything to do with the fact that the
              method doesn’t match how humans actually learn.
            </p>
            <p>
              At depthwise we play games. Designed, purposeful games that create the conditions for
              embodied learning and real leadership shifts.{' '}
              <span className="text-navy font-medium">Trust falls strictly prohibited.</span> Through
              structured experiences we support your teams to make the specific capability shifts they
              need to make in the face of pressure.
            </p>
            <p>
              High performing teams are facing intense pressures: new technologies, market disruption,
              internal friction, the demand to think and lead differently. depthwise sessions are
              designed for teams ready to meet those pressures — in half and full day formats, built
              around what your team actually needs.
            </p>
            <p className="text-charcoal">
              If what you’re looking for isn’t quite captured here,{' '}
              <Link to="/contact" className="text-ocean underline underline-offset-4 decoration-ocean/40 hover:decoration-ocean">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Underwater */}
      <section className="px-6 md:px-10 py-16 mt-8">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-navy text-cream px-6 md:px-12 py-14 md:py-20 relative overflow-hidden">
          <img src={IMG.diver} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-cream/80">
              <Icon name="Waves" size={16} /> Underwater
            </span>
            <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight mt-5 leading-[0.95]">
              Where pressure <span className="italic font-normal text-ocean">becomes presence</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {UNDERWATER.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-cream/15 bg-cream/[0.04] backdrop-blur-sm p-7 flex flex-col"
                >
                  <span className="font-display text-[11px] tracking-[0.2em] uppercase text-pink">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-2xl tracking-tight mt-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-cream/70 mt-4">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="font-body text-cream/70">
                Want to be first to hear when these open?
              </p>
              <Link
                to="/contact"
                className="group font-display text-sm tracking-wide px-7 py-3.5 rounded-full bg-pink text-navy hover:bg-pink/90 transition-colors inline-flex items-center gap-2 w-fit"
              >
                Register interest
                <Icon name="ArrowUpRight" size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
