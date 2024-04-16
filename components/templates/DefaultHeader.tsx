import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MainMenu } from '@/components/molecules'

const DefaultHeader = () => {
  const currentPage = usePathname()
  const [navbar, setNavbar] = useState(false)

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
    <header className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${navbar ? 'fixed' : ''}`}>
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image src="/images/logo.png" alt="logo" width={115} height={40} />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link href="/payment" className="donate-btn fw-500 tran3s position-relative d-none d-lg-block">
              Donate Now
            </Link>
          </div>{' '}
          <MainMenu currentPage={currentPage} />
        </div>
      </div>
    </header>
  )
}

export default DefaultHeader
