import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';

interface RulesProps {
  locale?: string;
}

const Rules = ({ locale }: RulesProps) => {
  const t = useTranslations('root');
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
      <div className='border-y border-white/20 lg:grid lg:grid-cols-3'>
        {[0, 1, 2].map((index) => {
          return (
            <article
              className='relative flex min-h-[290px] flex-col border-b border-white/15 px-2 py-8 last:border-b-0 md:px-8 lg:border-b-0 lg:border-l lg:first:border-l-0'
              key={index}
            >
              <div className='mb-8 flex items-center gap-4'>
                <span className='font-montserrat text-sm font-extrabold tracking-[.18em] text-secondary'>
                  0{index + 1}
                </span>
                <span className='h-px flex-1 bg-white/20' />
              </div>
              <h3 className='mb-4 max-w-sm text-xl font-bold leading-snug text-primary'>
                {t(`timeline.journey.rounds.${index}.title`)}
              </h3>
              <p className='max-w-sm whitespace-pre-line text-sm leading-6 text-white/70'>
                {t.rich(`timeline.journey.rounds.${index}.description`, {
                  bold: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </article>
          );
        })}
      </div>

    </section>
  );
};

export default Rules;
