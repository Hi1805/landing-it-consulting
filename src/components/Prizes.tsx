'use client';

import { SECTION_IDS } from '@/constants';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Top1, Top2, Top3 } from '@/assets/Prizes';

interface PrizesProps {
  locale?: string;
}

const Prizes = ({ locale }: PrizesProps) => {
  const t = useTranslations('root');
  const prizeCharacters = [Top1, Top2, Top3];

  return (
    <div
      className='container pb-20 pt-20 md:pb-28 md:pt-32'
      id={SECTION_IDS.PRIZES}
    >
      <motion.h2
        className='text-center text-3xl font-extrabold uppercase text-primary md:text-5xl'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        {t('prizes.title')}
      </motion.h2>
      <motion.div
        className='border-primary/30 from-primary/20 via-secondary/10 mx-auto mt-8 max-w-2xl rounded-3xl border bg-gradient-to-br to-transparent px-6 py-7 text-center shadow-[0_20px_70px_rgba(255,184,78,.14)] backdrop-blur-sm md:px-10'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className='text-xs font-bold uppercase tracking-[.22em] text-secondary md:text-sm'>
          {t('prizes.totalLabel')}
        </p>
        <p className='mt-3 font-montserrat text-4xl font-extrabold text-primary drop-shadow-[0_4px_18px_rgba(255,184,78,.25)] md:text-6xl'>
          {t('prizes.totalAmount')}
        </p>
      </motion.div>
      <motion.div
        className='mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2 md:grid-rows-2'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
            delay: 0.4,
          },
        }}
        viewport={{ once: true }}
      >
        {[0, 1, 2].map((index) => {
          const Character = prizeCharacters[index];
          return (
            <article
              className={`hover:border-secondary/40 group relative flex flex-col items-center justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.025] p-8 text-center shadow-2xl transition duration-300 hover:-translate-y-1 ${index === 0 ? 'min-h-[500px] md:row-span-2' : 'min-h-[240px]'}`}
              key={index}
            >
              <div
                className={`absolute inset-x-0 top-0 overflow-hidden ${index === 0 ? 'h-80' : 'h-40'}`}
              >
                <Character
                  className={`absolute left-1/2 top-0 h-auto -translate-x-1/2 transition duration-500 group-hover:scale-105 ${index === 0 ? 'w-[300px]' : 'w-[180px]'}`}
                  locale={locale}
                />
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 z-10 border-t border-white/[.04] bg-[#214d48] ${index === 0 ? 'top-[320px]' : 'top-[132px]'}`}
              />
              <p className='relative z-20 mb-3 text-sm font-bold uppercase tracking-[.16em] text-secondary'>
                {t(`prizes.placements.${index}`)}
              </p>
              <p
                className={`relative z-20 font-montserrat font-extrabold text-primary ${index === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}
              >
                {t(`prizes.amounts.${index}`)}
              </p>
            </article>
          );
        })}
      </motion.div>
      <motion.p
        className='mt-6 w-full text-center italic text-primary max-sm:text-sm'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        {t('prizes.note')}
      </motion.p>
    </div>
  );
};

export default Prizes;
