'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const About = () => {
  const t = useTranslations('root');

  return (
    <div className='container px-4 py-20 md:py-28' id={SECTION_IDS.ABOUT}>
      <div className='mb-10 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] md:grid-cols-12'>
        <div className='flex min-h-40 flex-col items-center justify-center border-b border-white/10 p-6 md:col-span-6 md:border-b-0 md:border-r md:p-8'>
          <span className='mb-5 text-xs font-bold uppercase tracking-[.2em] text-secondary'>
            {t('about.organizers')}
          </span>
          <div className='flex items-center justify-center gap-8'>
            <Image
              src='/companies/codemely.png'
              alt='Code MeLy'
              width={120}
              height={60}
              className='h-14 w-28 object-contain md:w-32'
            />
            <Image
              src='/companies/netcompany.png'
              alt='Netcompany'
              width={160}
              height={60}
              className='h-14 w-36 object-contain md:w-40'
            />
          </div>
        </div>

        <div className='flex min-h-40 flex-col items-center justify-center p-6 md:col-span-6 md:p-8'>
          <span className='mb-5 text-xs font-bold uppercase tracking-[.2em] text-secondary'>
            {t('about.eventPartner')}
          </span>
          <div className='grid w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-4'>
            <Image
              src='/companies/engineerpro.png'
              alt='engineerpro'
              width={120}
              height={60}
              className='h-11 w-24 object-contain'
            />
            <Image
              src='/companies/DevOi.png'
              alt='DevOi'
              width={120}
              height={60}
              className='h-11 w-24 object-contain'
            />
            <Image
              src='/companies/DevWeb.png'
              alt='DevWeb'
              width={160}
              height={60}
              className='h-11 w-24 object-contain'
            />
            <Image
              src='/companies/Viblo.png'
              alt='Viblo'
              width={120}
              height={60}
              className='h-11 w-24 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='relative grid gap-10 border-y border-white/15 py-10 lg:grid-cols-[64px_1.2fr_1fr_1fr] lg:gap-8 lg:py-14'>
        <div className='hidden items-center justify-center lg:flex'>
          <span className='whitespace-nowrap font-montserrat text-4xl font-black uppercase tracking-[.12em] text-white/[.09] [writing-mode:vertical-rl]'>
            IT Consultant
          </span>
        </div>

        <div className='flex flex-col justify-center lg:pr-5'>
          <p className='mb-4 text-xs font-bold uppercase tracking-[.2em] text-secondary'>
            {t('about.sectionTitle')}
          </p>
          <h2 className='mb-6 max-w-xl font-montserrat text-3xl font-extrabold uppercase leading-tight text-primary md:text-4xl'>
            {t('about.title')}
          </h2>
          <p className='max-w-xl text-sm leading-7 text-white/80'>
            {t('about.intro.0')}
          </p>
          <p className='mt-4 max-w-xl text-sm leading-7 text-white/65'>
            {t('about.intro.1')}
          </p>
          <div className='mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[.1em] text-secondary'>
            {Array.from({ length: 3 }).map((_, index) => (
              <span key={index}>{t(`about.highlights.${index}`)}</span>
            ))}
          </div>
        </div>

        {[12, 20].map((imageNumber, index) => (
          <article className='group self-start' key={imageNumber}>
            <div className='relative mb-5 aspect-[4/3] p-3'>
              <span className='absolute left-0 top-0 h-12 w-px bg-secondary' />
              <span className='absolute left-0 top-0 h-px w-12 bg-secondary' />
              <span className='absolute bottom-0 right-0 h-12 w-px bg-secondary' />
              <span className='absolute bottom-0 right-0 h-px w-12 bg-secondary' />
              <div className='relative h-full overflow-hidden'>
                <Image
                  src={`/images/slider/${imageNumber}.jpg`}
                  alt={t(`about.cards.${index}.title`)}
                  fill
                  className='object-cover transition duration-700 group-hover:scale-105'
                />
              </div>
            </div>
            <h3 className='text-sm font-extrabold uppercase leading-5 text-white'>
              {t(`about.cards.${index}.title`)}
            </h3>
            <p className='mt-2 text-sm leading-6 text-white/65'>
              {t(`about.cards.${index}.description`)}
            </p>
          </article>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
        className='mt-5 rounded-3xl border border-white/10 bg-white/[.035] p-6 md:p-8'
      >
        <p className='mb-5 font-bold text-white'>
          {t.rich('about.whoCanJoinQuestion', {
            bold: (chunks) => <span className='font-bold'>{chunks}</span>,
          })}
        </p>
        <ul className='grid auto-rows-fr gap-3 sm:grid-cols-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              className='flex h-full items-start gap-3 rounded-2xl border border-white/[.04] bg-black/10 p-4 text-sm leading-6 text-white/75'
              key={index}
            >
              <span className='bg-secondary/15 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-secondary'>
                <Check className='h-3.5 w-3.5' strokeWidth={3} />
              </span>
              {t(`about.whoCanJoinAnswers.${index}`)}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
