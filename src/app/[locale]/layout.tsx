import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className='dark !scroll-smooth'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='apple-touch-icon' href='/favicon.svg' />
        <link rel='mask-icon' href='/favicon.svg' color='#000000' />
        <meta name='theme-color' content='#000000' />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-41SENDFD2M"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-41SENDFD2M');
      </script>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const translations = await getTranslations();
  //@ts-ignore
  const title = translations('metadata.title');

  const info = {
    title,
    description: translations('metadata.description'),
    images: [
      {
        url: '/favicon.svg',
      },
    ],
  };
  return {
    title,
    applicationName: 'IT Consultant Challenge',
    description: translations('metadata.description'),
    openGraph: {
      type: 'website',
      url: 'https://www.itconsultantchallenge.org',
      siteName: title,
      ...info,
    },
    authors: [
      {
        name: 'Code MeLy',
        url: 'https://codemely.dev',
      },
      {
        name: 'Netcompany',
        url: 'https://netcompany.com',
      },
    ],
    keywords: [
      'IT Consultant Challenge',
      'Code MeLy',
      'Netcompany',
      'Consultant Challenge',
      'Code MeLy Consultant Challenge',
    ],
    twitter: info,
    icons: '/favicon.svg',
  };
}
