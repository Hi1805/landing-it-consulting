'use client';

import { SECTION_IDS } from '@/constants';
import {
  Banknote,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PrizesProps {
  locale?: string;
}

interface Scholarship {
  provider: string;
  group: string;
  discount: string;
  course: string;
  detail: string;
  minimumTotal: string;
}

const cashCardStyles = [
  'md:order-2 border-primary/45 from-primary/20 via-[#214a45] to-[#172f2d] md:-translate-y-4 shadow-[0_24px_70px_rgba(255,184,78,.12)]',
  'md:order-1 border-white/15 from-[#214a45] to-[#172f2d]',
  'md:order-3 border-white/15 from-[#214a45] to-[#172f2d]',
];

export default function Prizes({ locale: _locale }: PrizesProps) {
  const t = useTranslations('root');
  const placements = t.raw('prizes.placements') as string[];
  const amounts = t.raw('prizes.amounts') as string[];
  const scholarships = t.raw('prizes.scholarships') as Scholarship[];

  return (
    <section
      className='container overflow-hidden pb-20 pt-20 md:pb-28 md:pt-32'
      id={SECTION_IDS.PRIZES}
    >
      <div className='mx-auto max-w-6xl'>
        <div className='text-center'>
          <p className='text-xs font-bold uppercase tracking-[.28em] text-secondary'>
            {t('prizes.featuredTitle')}
          </p>
          <h2 className='mt-3 font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
            {t('prizes.title')}
          </h2>
        </div>

        <div className='border-primary/30 from-primary/20 to-secondary/10 relative mx-auto mt-9 max-w-4xl overflow-hidden rounded-[32px] border bg-gradient-to-br via-[#173936] px-6 py-8 text-center shadow-[0_24px_90px_rgba(255,184,78,.12)] md:px-12 md:py-10'>
          <Sparkles className='text-primary/[.07] absolute -right-5 -top-5 h-32 w-32' />
          <p className='relative text-xs font-bold uppercase tracking-[.22em] text-white/60 md:text-sm'>
            {t('prizes.totalLabel')}
          </p>
          <p className='relative mt-3 font-montserrat text-4xl font-black text-primary drop-shadow-[0_4px_18px_rgba(255,184,78,.22)] md:text-6xl'>
            {t('prizes.totalAmount')}
          </p>
          <p className='relative mx-auto mt-4 max-w-lg text-sm leading-6 text-white/65 md:text-base'>
            {t('prizes.benefitSummary')}
          </p>
        </div>

        <div className='mt-16 md:mt-20'>
          <SectionHeading
            icon={<Banknote className='h-6 w-6' aria-hidden='true' />}
            title={t('prizes.cashBenefit')}
          />

          <div className='mt-10 grid items-stretch gap-4 md:grid-cols-3'>
            {placements.map((placement, index) => (
              <article
                className={`relative flex min-h-[245px] flex-col overflow-hidden rounded-[28px] border bg-gradient-to-b p-7 ${cashCardStyles[index]}`}
                key={placement}
              >
                <span className='absolute -right-2 -top-5 font-montserrat text-[108px] font-black leading-none text-white/[.04]'>
                  0{index + 1}
                </span>
                <div className='relative flex items-center justify-between'>
                  <span className='font-montserrat text-sm font-black tracking-[.2em] text-secondary'>
                    0{index + 1}
                  </span>
                  <span className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.06]'>
                    <Trophy
                      className={
                        index === 0
                          ? 'h-6 w-6 text-primary'
                          : 'h-5 w-5 text-secondary'
                      }
                      strokeWidth={1.4}
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='relative mt-auto pt-10'>
                  <p className='text-sm font-extrabold uppercase tracking-[.14em] text-white/75'>
                    {placement}
                  </p>
                  <p className='mt-2 font-montserrat text-3xl font-black text-primary md:text-4xl'>
                    {amounts[index]}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className='mt-5 text-center text-sm italic text-white/50'>
            {t('prizes.note')}
          </p>
        </div>

        <div className='mt-20'>
          <SectionHeading
            icon={<GraduationCap className='h-6 w-6' aria-hidden='true' />}
            title={t('prizes.scholarshipTitle')}
            description={t('prizes.scholarshipIntro')}
          />

          <div className='relative mt-10 grid gap-5 lg:grid-cols-3'>
            <div className='from-secondary/10 via-secondary/60 to-primary/40 absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r lg:block' />
            {scholarships.map((scholarship, index) => (
              <article
                className='border-white/12 hover:border-secondary/35 group relative z-10 flex min-h-[330px] flex-col rounded-[28px] border bg-[#153633] p-6 transition duration-300 hover:-translate-y-1 md:p-7'
                key={scholarship.group}
              >
                <div className='flex items-start justify-between gap-4'>
                  <span className='border-secondary/25 bg-secondary/10 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-secondary'>
                    {scholarship.group}
                  </span>
                  <span className='font-montserrat text-xs font-black tracking-[.18em] text-white/20'>
                    0{index + 1}
                  </span>
                </div>

                <div className='mt-8'>
                  <p className='text-sm font-bold uppercase tracking-[.16em] text-white/55'>
                    {scholarship.provider}
                  </p>
                  <div className='mt-2 flex items-end gap-2'>
                    <span className='font-montserrat text-6xl font-black leading-none text-primary'>
                      {scholarship.discount}
                    </span>
                    <span className='text-primary/70 pb-1 text-sm font-bold'>
                      {t('prizes.scholarshipRateLabel')}
                    </span>
                  </div>
                </div>

                <div className='mt-auto border-t border-white/10 pt-6'>
                  <div className='flex items-start gap-3'>
                    <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-secondary' />
                    <div>
                      <p className='font-bold text-white'>
                        {scholarship.course}
                      </p>
                      <p className='mt-2 text-sm leading-6 text-white/55'>
                        {scholarship.detail}
                      </p>
                    </div>
                  </div>
                  <div className='border-primary/20 bg-primary/[.07] mt-5 rounded-2xl border px-4 py-3'>
                    <p className='text-primary/65 text-[11px] font-bold uppercase tracking-[.14em]'>
                      {t('prizes.minimumTotalLabel')}
                    </p>
                    <p className='mt-1 font-montserrat text-xl font-black text-primary'>
                      {scholarship.minimumTotal}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='border-secondary/25 bg-secondary/10 flex h-12 w-12 items-center justify-center rounded-2xl border text-secondary'>
        {icon}
      </span>
      <h3 className='mt-4 font-montserrat text-2xl font-extrabold uppercase text-white md:text-3xl'>
        {title}
      </h3>
      {description && (
        <p className='mt-3 max-w-xl text-sm leading-6 text-white/55 md:text-base'>
          {description}
        </p>
      )}
    </div>
  );
}
