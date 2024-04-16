/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { servicesMenu, comingSoonItems } from '@/data/homeMenu'

interface IMenu {
  currentPage: string
}

const MainMenu = ({ currentPage }: IMenu) => {
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block" passHref>
                <img src="/images/logo.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          <li className={`nav-item ${currentPage === '/' ? 'active' : ''}`}>
            <Link className="nav-link" href="/" role="button" passHref>
              Home
            </Link>
          </li>
          <li className={`nav-item ${currentPage === '/about' ? 'active' : ''}`}>
            <Link className="nav-link" href="/about" role="button" passHref>
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Services
            </div>
            <ul className="dropdown-menu">
              {servicesMenu?.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="dropdown-item" passHref>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        {/*   <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Sanatha Bharat
            </div>
            <ul className="dropdown-menu">
              {comingSoonItems?.map((cs, index) => (
                <li key={index}>
                  <div className="dropdown-item">
                    <span>{cs.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </li> */}
          <li className={`nav-item ${currentPage === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" href="/contact" role="button" passHref>
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/payment" className="btn-twentyOne fw-500 tran3s" passHref>
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainMenu
