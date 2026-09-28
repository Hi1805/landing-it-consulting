'use client';

import { SECTION_IDS } from '@/constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FAQ({ locale }: { locale: string }) {
  const t = useTranslations('root.faq');
  const questions = t.raw('items') as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section
      className='container scroll-mt-24 px-4 pt-20 md:pt-28'
      id={SECTION_IDS.FAQ}
    >
      <div className='mx-auto max-w-4xl'>
        <p className='text-center text-sm font-bold uppercase tracking-[.2em] text-secondary'>
          {t('eyebrow')}
        </p>
        <h2 className='mt-3 text-center font-montserrat text-3xl font-extrabold uppercase text-primary md:text-5xl'>
          {t('title')}
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-center leading-7 text-white/60'>
          {t('description')}
        </p>

        <div className='mt-10 space-y-3'>
          {questions.map((item, index) => (
            <details
              className='open:border-secondary/30 group rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 transition-colors open:bg-white/[.07] md:px-6 md:py-5'
              key={item.question}
              open={index === 0}
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white/90'>
                {item.question}
                <ChevronDown className='h-5 w-5 shrink-0 text-secondary transition-transform duration-200 group-open:rotate-180' />
              </summary>
              <p className='mt-4 border-t border-white/10 pt-4 leading-7 text-white/65'>
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <Link
            className='border-secondary/40 inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold text-secondary transition hover:border-primary hover:text-primary'
            href={`/${locale}/faq`}
          >
            {t('viewAll')}
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
