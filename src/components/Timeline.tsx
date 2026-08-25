import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';

interface TimelineProps {
  locale: string;
}

export default function Timeline({ locale }: TimelineProps) {
  const t = useTranslations('root');
  const stemHeights = [72, 210, 120, 210, 125, 85, 210];

  return (
    <section
      className='container px-4 pt-20 md:pt-28'
      id={SECTION_IDS.TIMELINE}
    >
      <div className='rounded-3xl border border-white/10 bg-white/[.035] px-5 py-10 shadow-2xl md:px-8 md:py-14'>
        <h2 className='text-center font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
          {t('timeline.title')}
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-white/60'>
          {t('timeline.pending')}
        </p>

        <div className='relative mx-auto mt-12 max-w-6xl md:mt-16'>
          <div className='relative ml-2 space-y-5 border-l border-white/25 pl-7 md:hidden'>
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <article
                className='relative rounded-2xl border border-white/10 bg-[#173f3b] p-5'
                key={index}
              >
                <span className='absolute -left-[35px] top-6 h-3.5 w-3.5 rounded-full border-4 border-[#173f3b] bg-secondary' />
                <p className='text-sm font-bold text-secondary'>
                  {t(`timeline.events.${index}.date`)}
                </p>
                <p className='mt-1 font-semibold text-white/85'>
                  {t(`timeline.events.${index}.label`)}
                </p>
              </article>
            ))}
          </div>

          <div className='relative hidden h-[330px] md:block'>
            <div className='absolute bottom-4 left-0 right-0 h-px bg-white/35' />
            <div className='grid h-full grid-cols-7'>
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <article className='relative h-full' key={index}>
                  <span className='border-secondary/60 absolute bottom-[9px] left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border bg-[#dce7e5]' />
                  <div
                    className='border-secondary/60 absolute bottom-4 left-1/2 w-px -translate-x-1/2 border-l border-dashed'
                    style={{ height: stemHeights[index] }}
                  >
                    <span className='absolute -left-[5px] -top-1.5 h-2.5 w-2.5 rotate-45 bg-primary' />
                  </div>
                  <div
                    className='absolute left-1/2 w-[135px] -translate-x-1/2 text-center'
                    style={{ bottom: stemHeights[index] + 30 }}
                  >
                    <p className='text-xs font-bold text-secondary'>
                      {t(`timeline.events.${index}.date`)}
                    </p>
                    <p className='mt-1 text-sm font-semibold leading-5 text-white/85'>
                      {t(`timeline.events.${index}.label`)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
