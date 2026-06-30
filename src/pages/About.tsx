import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMG } from '@/lib/images';

const CREDENTIALS = [
  'Molchanovs Assistant Instructor — Freediving',
  'First Aid / CPR',
  'WWCC',
  'NDISWC',
  'Bachelor of Arts / Law (Honours)',
];

export default function About() {
  return (
    <div className="min-h-screen font-body text-navy antialiased selection:bg-pink/20">
      <SiteHeader />

      {/* Intro */}
      <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-pink/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl grid md:grid-cols-12 gap-10 md:gap-12 items-end">
          <div className="md:col-span-7">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-plum">About</p>
            <h1 className="font-display font-medium mt-4 text-5xl md:text-7xl tracking-tight leading-[0.95] text-navy">
              Belle <span className="italic font-normal">Guaran</span>
            </h1>
            <p className="font-display text-xl md:text-2xl leading-snug text-charcoal mt-8 max-w-xl">
              Serious shifts. <span className="text-ocean italic">Playful methods.</span>
            </p>
          </div>
          <div className="md:col-span-5">
            <figure className="overflow-hidden rounded-[24px] aspect-[4/5] group">
              <img src={IMG.belle} alt="Belle Guaran" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-10 py-16 border-t border-navy/10">
        <div className="mx-auto max-w-3xl space-y-6 font-body text-lg leading-relaxed text-charcoal/90">
          <p>
            Belle is a former Chief People and Culture Officer with over a decade in people
            leadership and a background spanning human resources, law and advocacy. Their career
            has seen them work across culture, capability and change — close enough to the real
            challenges faced by executive and senior leadership teams to see what genuine
            development and leadership shifts actually require.
          </p>
          <p>
            Belle is also deaf. They navigate the world with a cochlear implant and learned Auslan
            in adulthood. That experience is foundational to how depthwise is designed. People with
            disability spend their lives problem-solving in systems not built for them. They develop
            resilience, adaptability, and an instinct for understanding experiences outside their
            own. These are also the capabilities that make teams extraordinary under pressure.
          </p>
          <p>
            The move to depthwise came through freediving. Learning to hold their breath and descend
            into open water under increasing pressure — and eventually becoming a Molchanovs-certified
            Assistant Instructor — made concrete something they had long suspected: that the
            conditions under which people genuinely shift look nothing like a slide deck and a
            conference room. They look like uncertainty, presence, and a bit of risk. They look a lot
            like play.
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-14">
          <blockquote className="border-l-2 border-pink pl-6 md:pl-8">
            <p className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-navy">
              Depthwise is built on that conviction.
            </p>
            <p className="font-display italic text-xl md:text-2xl text-ocean mt-4">
              Serious shifts. Playful methods.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 md:px-10 py-16 border-t border-navy/10">
        <div className="mx-auto max-w-5xl grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display font-medium text-3xl tracking-tight text-navy">Credentials</h2>
            <p className="font-body text-sm text-charcoal/60 mt-3">
              Qualified, certified, and grounded in real practice.
            </p>
          </div>
          <ul className="md:col-span-8 divide-y divide-navy/10 border-t border-navy/10">
            {CREDENTIALS.map((c, i) => (
              <li key={c} className="flex items-center gap-5 py-4">
                <span className="font-display text-sm text-navy/35 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg text-charcoal">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24 pt-10">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-navy text-cream px-8 md:px-14 py-14 md:py-20 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-ocean/30 blur-[120px]" />
          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-display text-xs tracking-[0.25em] uppercase text-cream/50">Work with us</p>
              <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mt-4 max-w-xl leading-tight">
                Looking for a leadership shift that sticks?
              </h2>
            </div>
            <Link
              to="/contact"
              className="group font-display text-sm tracking-wide px-8 py-4 rounded-full bg-pink text-navy hover:bg-pink/90 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              Get in touch
              <Icon name="ArrowUpRight" size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
