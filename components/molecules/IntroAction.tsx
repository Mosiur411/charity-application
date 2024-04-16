import Link from 'next/link'

const IntroAction = () => {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-10" data-aos="fade-right">
        <div className="title-style-six pe-xxl-5">
          <h2 className="main-title fw-500 tx-dark">Core Principle - Back To The Vedas</h2>
        </div>
      </div>
      <div className="col-lg-6 ms-auto" data-aos="fade-left">
        <p className="m0 sp-text1 fs-20 pb-20 lg-pb-30 md-pt-20">
          Why was it that we Indians, always look at what is wrong with India and never appreciate what is great about our
          country? As a nation, we have survived the test of time. Even though we are still a growing economy, we are not a
          failed nation. In the past, our country had achieved the peak of success for thousands of years. How many nations can
          boast of such a heritage?
        </p>
        {/* <p className="m0 sp-text1 fs-20 pb-85 lg-pb-30 md-pt-20">
          It is proved that modern-day discoveries, inventions, theories, concepts are broadly based on Vedic
          knowledge/literature. Many scientists have studied Vedic literature to get in-depth insights into scientific,
          spiritual, psychological, behavioural knowledge.
        </p> */}
        <div className="d-sm-flex align-items-center">
          <Link href="/about" className="btn-nine fw-500 mt-10 me-3 lg-me-5">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IntroAction
