import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import utils from '@/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Contacts',
  description: 'My Contacts',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const ua = window.navigator.userAgent;
    const isMobile = utils.getIsMobile(ua);
    // require('amfe-flexible');
    if (isMobile) {
      require('amfe-flexible');
    } else {
      document.documentElement.style.fontSize = '37.5px';
    }
  }, []);
  return <div className={'container'}>{children}</div>;
}
