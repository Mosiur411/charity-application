/* eslint-disable @next/next/no-img-element */
import { Seo } from '@/components/atoms'
import { ContactUs } from '@/components/molecules'

const Contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <div className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">Reach out to us</div>
                <h2 className="main-title fw-500 tx-dark">Contact Us</h2>
                <p className="text-lg tx-dark">
                  <b> Wishing Message For Donner:</b> Thank you so much for your generous donation! Your support is not just a
                  gift, but a commitment to the cause that drives us. Together, we are making a difference. 🌟
                  <br />
                  Please know that your contribution goes a long way in helping us achieve our goals. Stay connected with us to
                  see the impact of your donation in action!
                  <br />
                  With gratitude, The Deshbhakt Team
                </p>
              </div>
              <h4>Contact Information & Social Media Link:</h4>
              <div className="text-md tx-dark">
                <ul className="d-flex gap-2">
                  <span>
                    <b>Email Adress:</b>
                  </span>
                  <span>info@deshbhakt.com</span>
                </ul>
                <ul className="d-flex gap-2">
                  <span>
                    <b>Mobile Number</b>
                  </span>
                  <span>8123781857</span>
                </ul>
                <ul className="d-flex  gap-2">
                  <span>
                    <b>Facebook</b>
                  </span>
                  <span>
                    <a href="https://www.facebook.com/deshbhaktorg2023">https://www.facebook.com/deshbhaktorg2023</a>
                  </span>
                </ul>
                <ul className="d-flex gap-2">
                  <span>
                    <b>Instagram</b>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/deshbhaktorg">https://www.instagram.com/deshbhaktorg</a>
                  </span>
                </ul>
                <ul className="d-flex gap-2">
                  <span>
                    <b>YouTube</b>
                  </span>
                  <span>
                    <a href="https://www.youtube.com/@DeshbhaktORG">https://www.youtube.com/@DeshbhaktORG</a>
                  </span>
                </ul>
                <ul className="d-flex gap-2">
                  <span>
                    <b>Address:</b>
                  </span>
                  <span>
                    {' '}
                    Deshbhakt Org, #223, Shantiniketan, 17th cross, 23rd Main, JP Nagar 5th Phase, Bangalore South, 560078
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-short-banner-six d-lg-flex pt-60">
        <div className="block-wrapper left-side d-flex justify-content-center justify-content-lg-end align-items-center">
          <div className="inner-wrapper" data-aos="fade-right">
            {/* <div className="row">
              <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="title-style-six">
                  <h2 className="main-title fw-500 text-white">Do you want to help the poor?</h2>
                </div>
                <p className="m0 text-white text-lg pt-50 lg-pt-30 md-pt-10">Fill the form &amp; becaome a part of us.</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="block-wrapper right-side d-flex justify-content-center justify-content-lg-start align-items-center">
          <div className="inner-wrapper md-pt-50 md-pb-90" data-aos="fade-left">
            <div className="row">
              <div className="col-xxl-10 col-lg-11 ms-auto">
                <h3 className="form-title tx-dark mb-50 lg-mb-30">Join Now!</h3>
                <div className="form-style-one">
                  <ContactUs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
