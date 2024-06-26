/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Address, Copyright, Social } from '@/components/atoms'
import { FooterMenu } from '@/components/molecules'

const index = () => {
  return (
    <div className="footer-style-five theme-basic-footer position-relative">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row">
            <div className="col-lg-3 footer-intro mb-50">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="brand" width={95} />
                </Link>
              </div>
              <p className="text-white fs-18 mt-30 mb-40 md-mt-10 md-mb-20 pe-xxl-5">
                Deshbhaki - Our vision is to restore the importance of our vedic history
              </p>
              <Social />
            </div>
            {/* End .col-lg-3  */}
            <FooterMenu />

            <Address />
          </div>
          {/* End .row */}

          <Copyright />
        </div>
        {/* /.inner-wrapper */}
      </div>
    </div>
  )
}

export default index
