import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import TimelineImage from '@/assets/Timeline';

interface TimelineProps {
  locale: string;
}

export default function Timeline({ locale }: TimelineProps) {
  const t = useTranslations('root');

  return (
    <div className='container px-4'>
      <div
        className='card-gradient-border relative mt-16 px-4 py-3 shadow-2xl backdrop-blur-sm md:mt-24 md:py-8 lg:py-10'
        id={SECTION_IDS.TIMELINE}
      >
        <motion.h2
          className='mb-2 text-center text-3xl font-extrabold uppercase text-primary md:text-5xl'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, bounce: 0.5 },
          }}
          viewport={{ once: true }}
        >
          {t('timeline.title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
          }}
          className='relative select-none'
          viewport={{ once: true }}
        >
          <TimelineImage className='w-full' locale={locale} />
        </motion.div>
        <div className='col-span-2 mt-4'>
          <p className='text-center italic text-primary'>
            {t('timeline.note')}
          </p>
        </div>
        <div className='mt-12 border-t border-primary/20 pt-8 md:mt-16 md:pt-10'>
          <h3 className='mb-6 text-center text-2xl font-extrabold uppercase text-primary md:text-4xl'>
            {t('timeline.journey.title')}
          </h3>
          <div className='grid gap-5 lg:grid-cols-3'>
            {[0, 1, 2].map((round) => (
              <article
                className='rounded-lg border border-primary/20 bg-black/10 p-5 shadow-lg backdrop-blur-sm md:p-6'
                key={round}
              >
                <h4 className='mb-3 text-lg font-bold text-primary md:text-xl'>
                  {t(`timeline.journey.rounds.${round}.title`)}
                </h4>
                <p className='text-sm leading-7 text-white/90 md:text-base'>
                  {t(`timeline.journey.rounds.${round}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
