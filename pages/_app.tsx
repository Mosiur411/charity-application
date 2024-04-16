import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ScrollToTop } from '@/components/molecules';
import { Footer, DefaultHeader } from '@/components/templates';
import Aos from 'aos';

const Application = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div style={{ overflow: 'hidden' }}>
      <DefaultHeader />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );

};

export default Application;
