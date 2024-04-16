/* eslint-disable react/no-unescaped-entities */
import { Seo } from '@/components/atoms'

const RefundPolicy = () => {
  return (
    <>
      <Seo pageTitle="Refund Policy" />
      <div className="fancy-feature-fiftyOne position-relative pt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">Who We Are</div>
                <h2 className="main-title fw-500 tx-dark">Cancellation & Refund Policy</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1 mb-60 mt-60">
              <h3>Cancellation by Deshbhakt</h3>
              <p className="text-content tx-dark">
                There may be circumstances where Deshbhakt is unable to proceed with certain donation orders. Such situations may include unavailability of the intended recipient, discrepancies in donation amounts, or technical issues. Deshbhakt will promptly notify you if any portion of your donation order needs to be cancelled. If your donation has already been processed and charged, the corresponding amount will be refunded to your bank account. Please note that any promotional codes used will not be refunded in case of order cancellation.
              </p>
              <h3>Cancellation by the Donor</h3>
              <p className="text-content tx-dark">
                Requests for donation order cancellations are subject to approval by Deshbhakt. If Deshbhakt receives a cancellation request before processing or approving the donation order, the order will be cancelled, and the entire donated amount will be refunded instantly. However, once the donation order has been partially or fully processed, it cannot be cancelled. Deshbhakt reserves the right to determine whether an order has been processed. By using our services, you agree to abide by our cancellation decisions.
                <br />
                If an order cannot be cancelled because it has already been shipped, a refund will be initiated upon the return of the original item in good condition to the Deshbhakt facilities, subject to the return process.
              </p>


              <h3>Refunds</h3>
              <p className="text-content tx-dark">
                Donations made through the Deshbhakt platform that are not processed due to unforeseen circumstances will be refunded to the donor's bank account. Promotional codes used for donations are non-refundable.

              </p>



              <h3>Merchant Partner Policy </h3>
              <p className="text-content tx-dark"></p>

              Please note that the refund and cancellation policy of the merchant partner through whose platform the donation was made may supersede Deshbhakt's policy in certain cases. However, Deshbhakt reserves the right to selectively modify its policy without prior notice.


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
