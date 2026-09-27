'use client';
import { REGISTRATION_CLOSE_DATE, SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import TeamRegistrationForm from '@/components/TeamRegistrationForm';

const Registration = () => {
  const t = useTranslations('root');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(false);

  const renderContent = () => {
    if (submitSuccess) {
      return <SuccessMessage />;
    }
    if (isFormClosed) {
      return <ClosedFormMessage />;
    }
    return (
      <TeamRegistrationForm
        onSubmitSuccess={() => setSubmitSuccess(true)}
        onRegistrationExpired={() => setIsFormClosed(true)}
      />
    );
  };
  useEffect(() => {
    setIsFormClosed(new Date() >= REGISTRATION_CLOSE_DATE);
  }, []);

  return (
    <div className='container px-4' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-2xl font-extrabold uppercase text-primary md:text-5xl'>
        {t('registration.title')}
      </h2>

      <div className='card-gradient-border mx-auto mt-3 flex w-full flex-col items-center justify-center gap-y-6 p-10 px-4 md:mt-10 md:w-3/4 md:px-10'>
        {renderContent()}
      </div>
    </div>
  );
};

const SuccessMessage = () => {
  const t = useTranslations('root');
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <Check className='h-16 w-16 rounded-full bg-primary p-2' />
      </motion.div>
      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.success.title')}
        </p>
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.success.content')}
        </p>
      </motion.div>
    </>
  );
};

const ClosedFormMessage = () => {
  const t = useTranslations('root');
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-500 p-2 text-center text-4xl font-bold'>
          !
        </div>
      </motion.div>
      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.closed.title')}
        </p>
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.closed.content')}
        </p>
      </motion.div>
    </>
  );
};

export default Registration;
