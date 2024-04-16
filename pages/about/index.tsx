/* eslint-disable @next/next/no-img-element */
import { Seo } from '@/components/atoms'
import Faq from '@/components/molecules/Faq'
const faqData = [
  {
    question: 'Q: What is Deshbhakt Organization?',
    answer:
      'A: Deshbhakt Organization is a charity that aims to promote and preserve the rich and glorious heritage of India. We believe that India has a lot to offer to the world in terms of culture, wisdom, and values. We are proud of our Vedic history and culture, which has shaped the identity and destiny of our nation for millennia.',
  },
  {
    question: 'Q: What is your mission and vision?',
    answer:
      'A: Our mission is to spread awareness and appreciation of the Vedic history and culture among the Indian people and the world. We want to showcase the achievements and contributions of our ancestors, who were pioneers and visionaries in various domains of human endeavour. We want to celebrate the diversity and unity of our culture, which reflects the harmony and balance of nature. Our vision is to see India as a nation that is proud of its past, confident of its present, and optimistic of its future. We want to see India as a nation that is guided by the Vedic knowledge and principles, which can help us achieve excellence in all aspects of social, economic, and spiritual development. We want to see India as a nation that is respected and admired by the world for its culture, values, and achievements.',
  },
  {
    question: 'Q: How do you promote and preserve the Vedic heritage?',
    answer:
      'A: We promote and preserve the Vedic heritage by providing various resources and platforms that can facilitate the dissemination and exchange of Vedic knowledge and wisdom. We also support and sponsor various initiatives and projects that are aligned with our vision and values. We collaborate with individuals and organizations that are working towards the preservation and promotion of the Vedic heritage. We also revive and restore the ancient Gurukul education system, which was a holistic and comprehensive way of learning and living.',
  },
  {
    question: 'Q: How can I get involved in your organization?',
    answer:
      'A: There are many ways you can get involved in our organization. You can donate to support our cause, volunteer to help us with our activities, partner with us to collaborate on our projects, or join us as a member to access our benefits and opportunities. You can also follow us on our social media channels, subscribe to our newsletter, or contact us for any queries or suggestions.',
  },
  {
    question: 'Q: How can I donate to your organization?',
    answer:
      'A: You can donate to our organization by visiting our donation page here. You can choose to make a one-time donation or a recurring donation. You can also choose to donate to a specific project or program that you are interested in. You can donate online using various payment methods, such as credit card, debit card, net banking, or UPI. You can also donate offline by sending us a cheque or a demand draft. All donations are tax-deductible under section 80G of the Income Tax Act.',
  },
  {
    question: 'Q: What is your tax ID number?',
    answer: 'A: Our tax ID number is AAETD4602P. You can find more details about our legal status and registration here.',
  },
]
const About = () => {
  return (
    <>
      <Seo pageTitle="About" />
      <div className="fancy-feature-fiftyOne">
        <video
          style={{
            width: '100%',
          }}
          src="/images/charity/about.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">Who We Are</div>
                <h2 className="main-title fw-500 tx-dark">Introduction</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1 mb-60 mt-60">
              <p className="text-lg tx-dark">
                We are Deshbhakt Organization, a charity that aims to promote and preserve the rich and glorious heritage of
                India. We believe that India has a lot to offer to the world in terms of culture, wisdom, and values. We are
                proud of our Vedic history and culture, which has shaped the identity and destiny of our nation for millennia.
              </p>
              <p className="text-lg tx-dark">
                We are a group of passionate and patriotic Indians who want to share the beauty and brilliance of our Vedic
                legacy with our fellow citizens and the global community. We want to inspire and empower people to learn from
                the ancient Vedic literature, which contains atreasure trove of knowledge and insights on various fields of
                science, spirituality, psychology, and behaviour.
              </p>
              <p className="text-lg tx-dark">
                We also want to revive and restore the ancient Gurukul education system, which was a holistic and comprehensive
                way of learning and living. We want to provide our children and youth with the opportunity to develop their
                skills, talents, and personalities in a natural and nurturing environment, where they can grow as leaders,
                innovators, and problem-solvers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">Mission:-</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1 mb-60 mt-60">
              <p className="text-lg tx-dark">
                Our mission is to spread awareness and appreciation of the Vedic history and culture among the Indian people and
                the world. We want to showcase the achievements and contributions of our ancestors, who were pioneers and
                visionaries in various domains of human endeavour. We want to celebrate the diversity and unity of our culture,
                which reflects the harmony and balance of nature.
              </p>
              <p className="text-lg tx-dark">
                We also want to support and sponsor various initiatives and projects that are aligned with our vision and
                values. We want to collaborate with individuals and organizations that are working towards the preservation and
                promotion of the Vedic heritage. We want to create and curate resources and platforms that can facilitate the
                dissemination and exchange of Vedic knowledge and wisdom.
              </p>
              <img src="/images/pages/about/mission.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">Vision:-</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1 mb-60 mt-60">
              <p className="text-lg tx-dark">
                Our vision is to see India as a nation that is proud of its past, confident of its present, and optimistic of
                its future. We want to see India as a nation that is guided by the Vedic knowledge and principles, which can
                help us achieve excellence in all aspects of social, economic, and spiritual development. We want to see India
                as a nation that is respected and admired by the world for its culture, values, and achievements.
              </p>
              <p className="text-lg tx-dark">
                We also want to see the world as a peaceful and prosperous place, where people live in harmony and cooperation
                with each other and with nature. We want to see the world as a place where people respect and appreciate the
                diversity and richness of different cultures and traditions. We want to see the world as a place where people
                learn from and benefit from the Vedic heritage, which can offer solutions and guidance for the challenges and
                opportunities of the modern era.
              </p>
              <img src="/images/pages/about/vison.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-feature-fiftyOne ">
        <h2 className="text-center py-5">FAQ Section</h2>
        <Faq faqData={faqData} />
      </div>
    </>
  )
}

export default About
