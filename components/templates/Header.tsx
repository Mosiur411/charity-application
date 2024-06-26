/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MainMenu } from '@/components/molecules'

const Header = () => {
  const currentPage = usePathname()
  const [navbar, setNavbar] = useState(false)

  // const handleLangSelect = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault()
  // }

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <header className={`theme-main-menu sticky-menu theme-menu-five white-vr ${navbar ? 'fixed' : ''}`}>
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center">
          <div className="logo order-lg-0">
            <Link href="/">
              <img src="/images/logo/logo_02.png" alt="" width={95} />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
            <Link href="/login" className="call-btn-one d-flex align-items-center me-3">
              <img src="/images/icon/icon_43.svg" alt="icon" className="me-2" />
              <span>(479) 421-6814</span>
            </Link>
            {/* <div className="lang-dropdown position-relative ms-3 me-3 ms-xl-5 me-xl-5 d-none d-lg-block">
              <button
                className="dropdown-toggle"
                type="button"
                id="langDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                {selectedLang}
              </button>
              <ul className="dropdown-menu" aria-labelledby="langDropdown">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <a href="#" className="dropdown-item" onClick={handleLangSelect}>
                      {lang.code}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
            <Link href="/payment" className="donate-btn fw-500 tran3s position-relative d-none d-lg-block">
              Donate Now
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu currentPage={currentPage} />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  )
}

export default Header
