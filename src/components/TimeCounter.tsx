'use client';

import { REGISTRATION_CLOSE_DATE } from '@/constants';
import { CalendarDays, Clock3, LockKeyhole } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

interface TimeCounterProps {
  locale?: string;
}

interface TimeUnitProps {
  label: string;
  value: number;
}

const TimeUnit = ({ label, value }: TimeUnitProps) => (
  <div className='hover:border-secondary/30 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.045] px-3 py-5 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/[.065] md:py-6'>
    <span className='via-secondary/60 absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent to-transparent' />
    <p className='font-montserrat text-4xl font-black tabular-nums leading-none text-white md:text-5xl'>
      {value.toString().padStart(2, '0')}
    </p>
    <p className='text-secondary/75 mt-3 text-[11px] font-extrabold uppercase tracking-[.2em] md:text-xs'>
      {label}
    </p>
  </div>
);

export default function TimeCounter({ locale: _locale }: TimeCounterProps) {
  const t = useTranslations('root');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className='container my-16 px-4 sm:my-24 md:my-28'>
      <Countdown
        date={REGISTRATION_CLOSE_DATE}
        renderer={({ days, hours, minutes, seconds, completed }) => (
          <div className='relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(127,255,247,.13),transparent_34%),linear-gradient(135deg,#173f3a,#102e2b)] shadow-[0_28px_90px_rgba(0,0,0,.22)]'>
            <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary' />
            <div className='bg-primary/[.055] absolute -bottom-24 -left-16 h-56 w-56 rounded-full blur-3xl' />

            {completed ? (
              <div className='relative flex min-h-[280px] flex-col items-center justify-center px-6 py-12 text-center'>
                <span className='border-primary/25 bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl border text-primary'>
                  <LockKeyhole className='h-6 w-6' aria-hidden='true' />
                </span>
                <h2 className='mt-5 font-montserrat text-3xl font-black uppercase text-primary md:text-4xl'>
                  {t('countdown.closed')}
                </h2>
                <p className='mt-3 max-w-xl text-sm leading-6 text-white/55 md:text-base'>
                  {t('timeCounter.closedDescription')}
                </p>
              </div>
            ) : (
              <div className='relative grid gap-10 px-6 py-8 md:px-9 md:py-10 lg:grid-cols-[.85fr_1.35fr] lg:items-center lg:gap-12 lg:px-12'>
                <div className='text-center lg:text-left'>
                  <div className='border-secondary/20 bg-secondary/[.08] inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.16em] text-secondary'>
                    <Clock3 className='h-4 w-4' aria-hidden='true' />
                    {t('timeCounter.eyebrow')}
                  </div>
                  <h2 className='mt-5 font-montserrat text-3xl font-black uppercase leading-tight text-white md:text-4xl'>
                    {t('timeCounter.title')}
                  </h2>
                  <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary'>
                    <CalendarDays className='h-4 w-4' aria-hidden='true' />
                    <time dateTime='2026-10-19T00:00:00+07:00'>
                      {t('timeCounter.deadline')}
                    </time>
                  </div>
                </div>

                <div
                  className='grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4'
                  aria-live='polite'
                  aria-label={t('timeCounter.title')}
                >
                  <TimeUnit label={t('timeCounter.days')} value={days} />
                  <TimeUnit label={t('timeCounter.hours')} value={hours} />
                  <TimeUnit label={t('timeCounter.minutes')} value={minutes} />
                  <TimeUnit label={t('timeCounter.seconds')} value={seconds} />
                </div>
              </div>
            )}
          </div>
        )}
      />
    </section>
  );
}
