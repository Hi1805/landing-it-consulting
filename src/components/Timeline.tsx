import { SECTION_IDS } from '@/constants';
import { ArrowRight, Hammer, Lightbulb, Presentation } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TimelineProps {
  locale: string;
}

const roundIcons = [Lightbulb, Hammer, Presentation];

export default function Timeline({ locale: _locale }: TimelineProps) {
  const t = useTranslations('root');
  const rounds = t.raw('timeline.journey.rounds') as Array<{
    title: string;
    date: string;
    summary: string;
    selection: string;
    selectionNote: string;
  }>;
  const events = t.raw('timeline.events') as Array<{
    date: string;
    label: string;
  }>;

  return (
    <section
      className='container scroll-mt-24 px-4 pt-20 md:pt-28'
      id={SECTION_IDS.TIMELINE}
    >
      <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] px-5 py-10 shadow-2xl md:px-8 md:py-14'>
        <p className='text-center text-sm font-bold uppercase tracking-[.2em] text-secondary'>
          {t('timeline.journey.title')}
        </p>
        <h2 className='mt-3 text-center font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
          {t('timeline.title')}
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/60 md:text-base'>
          {t('timeline.pending')}
        </p>

        <div className='relative mt-12 grid gap-5 lg:grid-cols-3'>
          <div className='from-secondary/20 via-secondary/70 to-primary/30 absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r lg:block' />
          {rounds.map((round, index) => {
            const Icon = roundIcons[index];
            return (
              <article
                className='hover:border-secondary/35 relative z-10 flex flex-col rounded-3xl border border-white/10 bg-[#0d302d] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7'
                key={round.title}
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='border-secondary/30 bg-secondary/10 flex h-14 w-14 items-center justify-center rounded-2xl border text-secondary'>
                    <Icon className='h-7 w-7' />
                  </div>
                  <span className='rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/55'>
                    {t('timeline.journey.roundLabel', { number: index + 1 })}
                  </span>
                </div>

                <p className='mt-6 text-sm font-bold text-secondary'>
                  {round.date}
                </p>
                <h3 className='mt-2 font-montserrat text-2xl font-extrabold text-white'>
                  {round.title}
                </h3>
                <p className='mt-3 flex-1 leading-7 text-white/60'>
                  {round.summary}
                </p>

                <div className='border-primary/25 bg-primary/[.08] mt-6 rounded-2xl border p-4'>
                  <p className='text-primary/70 text-xs font-bold uppercase tracking-[.16em]'>
                    {round.selectionNote}
                  </p>
                  <div className='mt-1 flex items-center justify-between gap-3'>
                    <p className='text-xl font-extrabold text-primary'>
                      {round.selection}
                    </p>
                    {index < rounds.length - 1 && (
                      <ArrowRight className='text-primary/70 h-5 w-5' />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className='mt-12 border-t border-white/10 pt-8'>
          <p className='mb-6 text-center text-sm font-bold uppercase tracking-[.16em] text-white/45'>
            {t('timeline.milestones')}
          </p>
          <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7'>
            {events.map((event, index) => (
              <div
                className='relative rounded-2xl border border-white/10 bg-white/[.035] p-4 text-center'
                key={`${event.date}-${event.label}`}
              >
                <span className='mx-auto mb-3 block h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_16px_rgba(124,213,196,.65)]' />
                <p className='text-xs font-bold text-secondary'>{event.date}</p>
                <p className='mt-1 text-xs font-medium leading-5 text-white/65'>
                  {event.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
