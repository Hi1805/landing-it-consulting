import { SECTION_IDS } from '@/constants';
import { ArrowRight, Compass, Hammer, Presentation } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface RulesProps {
  locale?: string;
}

const Rules = ({ locale }: RulesProps) => {
  const t = useTranslations('root');
  const icons = [Compass, Hammer, Presentation];
  return (
    <section className='container px-4 pt-20 md:pt-28' id={SECTION_IDS.RULES}>
      <div className='mb-10 text-center'>
        <p className='mb-3 text-xs font-bold uppercase tracking-[.2em] text-secondary'>
          Prompt to Production
        </p>
        <h2 className='font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
          {t('timeline.journey.title')}
        </h2>
      </div>
      <div className='grid gap-4 lg:grid-cols-3'>
        {[0, 1, 2].map((index) => {
          const Icon = icons[index];
          return (
            <article
              className='relative rounded-3xl border border-white/10 bg-white/[.045] p-7 shadow-2xl md:p-8'
              key={index}
            >
              <div className='mb-6 flex items-center justify-between'>
                <div className='bg-secondary/10 flex h-12 w-12 items-center justify-center rounded-2xl text-secondary'>
                  <Icon className='h-6 w-6' />
                </div>
                <span className='font-montserrat text-4xl font-extrabold text-white/10'>
                  0{index + 1}
                </span>
              </div>
              <h3 className='mb-4 text-xl font-bold text-primary'>
                {t(`timeline.journey.rounds.${index}.title`)}
              </h3>
              <p className='text-sm leading-7 text-white/70'>
                {t(`timeline.journey.rounds.${index}.description`)}
              </p>
              {index < 2 && (
                <ArrowRight className='text-secondary/50 absolute -right-5 top-1/2 z-10 hidden h-6 w-6 lg:block' />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Rules;
