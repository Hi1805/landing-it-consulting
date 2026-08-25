'use client';

import { SECTION_IDS } from '@/constants';
import { Trophy } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PrizesProps {
  locale?: string;
}

const ScholarshipLine = () => {
  const t = useTranslations('root');
  return (
    <p className='mt-3 text-xs font-semibold leading-5 text-white/65'>
      + {t('prizes.scholarshipBenefit')}
    </p>
  );
};

export default function Prizes({ locale }: PrizesProps) {
  const t = useTranslations('root');

  return (
    <section
      className='container pb-20 pt-20 md:pb-28 md:pt-32'
      id={SECTION_IDS.PRIZES}
    >
      <h2 className='text-center font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
        {t('prizes.title')}
      </h2>

      <div className='border-primary/30 from-primary/20 via-secondary/10 mx-auto mt-8 max-w-2xl rounded-3xl border bg-gradient-to-br to-transparent px-6 py-7 text-center shadow-[0_20px_70px_rgba(255,184,78,.14)] backdrop-blur-sm md:px-10'>
        <p className='text-xs font-bold uppercase tracking-[.22em] text-secondary md:text-sm'>
          {t('prizes.totalLabel')}
        </p>
        <p className='mt-3 font-montserrat text-4xl font-extrabold text-primary drop-shadow-[0_4px_18px_rgba(255,184,78,.25)] md:text-6xl'>
          {t('prizes.totalAmount')}
        </p>
      </div>

      <div className='mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-[1.15fr_.95fr_.8fr]'>
        <article className='relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-b from-[#214a45] to-[#172f2d] p-8 shadow-[0_24px_70px_rgba(0,0,0,.16)]'>
          <span className='text-secondary/80 absolute left-8 top-7 text-xs font-black tracking-[.24em]'>
            01
          </span>
          <div className='bg-secondary/[.06] absolute left-1/2 top-14 flex h-56 w-56 -translate-x-1/2 items-center justify-center rounded-full shadow-[0_0_80px_rgba(124,220,207,.08)]'>
            <Trophy
              aria-hidden='true'
              className='h-36 w-36 text-secondary drop-shadow-[0_16px_32px_rgba(124,220,207,.2)]'
              strokeWidth={1.05}
            />
          </div>
          <div>
            <span className='mb-7 block h-1 w-14 rounded-full bg-primary' />
            <p className='text-xs font-bold uppercase tracking-[.14em] text-white'>
              {t('prizes.awards.0')}
            </p>
            <p className='mt-2 text-xs font-semibold text-white/70'>
              {t('prizes.cashBenefit')}
            </p>
            <p className='mt-3 font-montserrat text-4xl font-extrabold text-primary'>
              {t('prizes.amounts.0')}
            </p>
            <ScholarshipLine />
          </div>
        </article>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
          <article className='relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-[20px] border border-white/15 bg-[#193633] p-7'>
            <span className='absolute right-6 top-5 font-montserrat text-5xl font-black leading-none text-white/[.055]'>
              02
            </span>
            <div>
              <span className='mb-7 block h-1 w-12 rounded-full bg-secondary' />
              <p className='text-xs font-bold uppercase tracking-[.12em] text-white'>
                {t('prizes.awards.1')}
              </p>
              <p className='mt-2 text-xs font-semibold text-white/70'>
                {t('prizes.cashBenefit')}
              </p>
              <p className='mt-2 font-montserrat text-3xl font-extrabold text-primary'>
                {t('prizes.amounts.1')}
              </p>
              <ScholarshipLine />
            </div>
          </article>

          <article className='relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-[20px] border border-white/15 bg-[#193633] p-7'>
            <span className='absolute right-6 top-5 font-montserrat text-5xl font-black leading-none text-white/[.055]'>
              03
            </span>
            <div>
              <span className='mb-7 block h-1 w-12 rounded-full bg-secondary' />
              <p className='text-xs font-bold uppercase tracking-[.12em] text-white'>
                {t('prizes.awards.3')}
              </p>
              <p className='mt-2 text-xs font-semibold text-white/70'>
                {t('prizes.cashBenefit')}
              </p>
              <p className='mt-2 font-montserrat text-3xl font-extrabold text-primary'>
                {t('prizes.amounts.2')}
              </p>
              <ScholarshipLine />
            </div>
          </article>
        </div>

        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
          {[2, 4, 5, 6].map((index) => {
            const isVote = index === 2;
            return (
              <article
                className={`flex flex-col justify-center rounded-xl border border-l-4 p-5 ${isVote ? 'border-primary/30 bg-primary/[.07] min-h-[155px] border-l-primary' : 'border-l-secondary/60 min-h-[110px] border-white/15 bg-[#193633]'}`}
                key={index}
              >
                <div className='flex items-center gap-3'>
                  <span
                    className={`h-2 w-2 shrink-0 rotate-45 ${isVote ? 'bg-primary' : 'bg-secondary'}`}
                  />
                  <h3 className='text-sm font-extrabold uppercase text-white'>
                    {t(`prizes.awards.${index}`)}
                  </h3>
                </div>
                {isVote && (
                  <>
                    <p className='mt-2 text-xs font-semibold text-white/70'>
                      {t('prizes.cashBenefit')}
                    </p>
                    <p className='mt-1 font-montserrat text-2xl font-extrabold text-primary'>
                      {t('prizes.voteAmount')}
                    </p>
                  </>
                )}
                <ScholarshipLine />
              </article>
            );
          })}
        </div>
      </div>

      <p className='mt-7 text-center text-sm italic text-primary'>
        {t('prizes.note')}
      </p>
    </section>
  );
}
