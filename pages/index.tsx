/* eslint-disable @next/next/no-img-element */
'use client'
import { Seo } from '@/components/atoms'
import { CampaignBlock, CampaignBlock2, Counter, Features, Hero, IntroVideo, IntroAction } from '@/components/molecules'
import Faq from '@/components/molecules/Faq'
import LatestUpdates from '@/components/molecules/LatestUpdates'
import DonationPopup from '@/components/popup/DonationPopup'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const [openDonation, setOpenDonation] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDonation(!openDonation)
    }, 60000) // 60000 milliseconds = 1 minute

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [openDonation]);


  const faqData = [
    {
      question: 'Q. What is Deshbhakt?',
      answer:
        'A. Deshbhakt is a charity organization that aims to build a country which achieves progress in social, economic, and spiritual aspects1.',
    },
    {
      question: 'Q. How can I donate to Deshbhakt?',
      answer:
        'A. You can donate to Deshbhakt through our website by visiting the donation page and choosing the amount and method of your contribution.',
    },
    {
      question: 'Q. Is Deshbhakt a registered and tax-exempt organization?',
      answer:
        'A. Yes, Deshbhakt is a registered charity and has been recognized as tax-exempt. However, for confirmation and more details, you should refer to the official documentation provided on our website or contact our support team.',
    },
    {
      question: 'Q. How does Deshbhakt utilize the donations received?',
      answer:
        'A. Donations received are used to fund various projects and initiatives that align with our mission. Detailed reports of our activities and financial expenditures are available on our website.',
    },
    {
      question: 'Q. Can I volunteer with Deshbhakt? ',
      answer:
        'A. Absolutely! We welcome volunteers who wish to contribute their time and skills. Please visit our volunteer page for more information on how you can get involved.',
    },
    {
      question: 'Q. How can I partner with Deshbhakt?',
      answer:
        'A. We are open to partnerships that further our mission. Interested parties can contact us through our partnership inquiry form on our website.',
    },
    {
      question: 'Q. Does Deshbhakt have any job openings?',
      answer:
        'A. Current job openings, if any, are listed on our careers page. We encourage you to check back regularly for new opportunities.',
    },
    {
      question: 'Q. How can I stay updated on Deshbhakt’s activities? ',
      answer:
        'A. You can subscribe to our newsletter, follow us on social media, or visit our news and updates section on our website.',
    },
  ]

  return (
    <>
      {openDonation && <DonationPopup setOpenDonation={setOpenDonation} openDonation={openDonation} />}

      <div className="pattern-bg-one">
        <Seo pageTitle="Home" />
        <Hero />
        <div className="fancy-feature-fourteen position-relative">
          <div className="container">
            <div className="row">
              <Features />
            </div>
          </div>
        </div>
       
        <div className="fancy-feature-fifteen mt-140 lg-mt-70">
          <img src="/images/shape/shape_76.svg" alt="shape" className="lazy-img shapes shape-one" />
          <div className="container">
            <IntroAction />
            <IntroVideo />
            <Counter
              {...{
                counterRef: ref,
                inView,
              }}
            />
          </div>
        </div>
        <div className="fancy-feature-sixteen position-relative pt-120 pb-80 mt-225 lg-mt-130 lg-pt-80 lg-pb-50 lg-mb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="title-style-six text-center " data-aos="fade-up">
                  <div className="sc-title" style={{ color: '#000' }}>
                    Featured Causes
                  </div>
                  <h2 className="main-title fw-500 tx-dark">You can help lots of people by donating little.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-wrapper pt-50 lg-pt-10">
            <div className="row gx-xxl-5">
              <CampaignBlock />
            </div>
          </div>
          <div>
            <h2 className="text-center py-5 mt-50 mt-30">Latest Updates</h2>
            <div className="inner-wrapper  lg-pt-10">
              <div className="row gx-xxl-5">
                <LatestUpdates />
              </div>
            </div>
          </div>
        </div>
        <div className="fancy-feature-eighteen lg-mt-100 lg-pb-100" data-aos="fade-up">
          <div className="d-sm-flex">
            <CampaignBlock2 />
          </div>
        </div>
        <div>
          <h2 className="text-center py-5">FAQ Section</h2>
          <Faq faqData={faqData} />
        </div>
      </div>
    </>
  )
}

export default Home
