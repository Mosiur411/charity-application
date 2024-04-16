import { Seo } from '@/components/atoms'
import { PaymentForm } from '@/components/molecules'

const Payment = () => {
  return (
    <>
      <Seo pageTitle="Payment" />
      <div style={{position:'relative'}} className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="col-lg-12" data-aos="fade-right">
                  <div className="title-style-five mb-65 lg-mb-40">
                    <div className="sc-title-two fst-italic position-relative">Contribute to better future</div>
                    <h2 className="main-title fw-500 tx-dark">Donations</h2>
                    <p className="text-lg tx-dark">
                      <b> Wishing Message For Donner:</b> Thank you so much for your generous donation! Your support is not just
                      a gift, but a commitment to the cause that drives us. Together, we are making a difference. 🌟
                      <br />
                      Please know that your contribution goes a long way in helping us achieve our goals. Stay connected with us
                      to see the impact of your donation in action!
                      <br />
                      With gratitude, The Deshbhakt Team
                    </p>
                  </div>
                  <h4>Contact Information & Social Media Link:</h4>
                  <div className="text-md tx-dark">
                    <ul className="d-flex flex-wrap gap-2">
                      <span>
                        <b>Email Adress:</b>
                      </span>
                      <span>info@deshbhakt.com</span>
                    </ul>
                    <ul className="d-flex flex-wrap gap-2">
                      <span>
                        <b>Mobile Number</b>
                      </span>
                      <span>8123781857</span>
                    </ul>
                    <ul className="d-flex flex-wrap  md:gap-2">
                      <span>
                        <b>Facebook</b>
                      </span>
                      <span>
                        <a href="https://www.facebook.com/deshbhaktorg2023">https://www.facebook.com/deshbhaktorg2023</a>
                      </span>
                    </ul>
                    <ul className="d-flex flex-wrap md:gap-2">
                      <span>
                        <b>Instagram</b>
                      </span>
                      <span>
                        <a href="https://www.instagram.com/deshbhaktorg">https://www.instagram.com/deshbhaktorg</a>
                      </span>
                    </ul>
                    <ul className="d-flex flex-wrap  md:gap-2">
                      <span>
                        <b>YouTube</b>
                      </span>
                      <span>
                        <a href="https://www.youtube.com/@DeshbhaktORG">https://www.youtube.com/@DeshbhaktORG</a>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">Fill required details.</h2>
          <PaymentForm />
        </div>
      </div>
    </>
  )
}

export default Payment
