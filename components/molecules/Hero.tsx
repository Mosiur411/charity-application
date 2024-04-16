import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero-banner-five text-center position-relative">
      <video src="/images/charity/introduction.mp4" autoPlay muted loop></video>
      <div className="video-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              {/* data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" */}
              <h1 className="hero-heading text-white mb-50 md-mb-30">
                Get
                <span className="position-relative">
                  Loud <Image src="/images/shape/shape_71.svg" width={254} height={106} alt="shape" />
                </span>
                <br /> Rise your Voice Today
              </h1>
            </div>
          </div>
          <Link
            href="/payment"
            className="donate-btn fw-500 tran3s"
            // data-aos="fade-up"
            // data-aos-delay="300"
            // data-aos-duration="1500"
          >
            Donate now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
