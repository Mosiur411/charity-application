import Link from 'next/link'

const navLinks = [
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
  { label: 'Privacy Policy', link: '/privacy-policy' },
  { label: 'Terms & Conditions', link: '/terms-and-condition' },
  { label: 'Refund Policy', link: '/refund' },
]

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Copyright = () => {
  return (
    <div className="bottom-footer d-md-flex align-items-center justify-content-between">
      <ul className="d-flex flex-wrap justify-content-center justify-content-md-start footer-nav style-none pb-15 order-md-last">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <p className="copyright text-center mb-15 text-white order-md-first">© {getCurrentYear()} deshbhakt.</p>
    </div>
  )
}

export default Copyright
