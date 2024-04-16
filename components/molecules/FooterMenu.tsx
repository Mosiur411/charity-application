const FooterMenu = () => {
  const footerData = [
    {
      title: 'Page',
      links: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Terms & Conditions', href: '/terms-and-condition' },
        { title: 'Refund Policy', href: '/refund' },
       

      ],
      colClass: 'col-xl-2 col-lg-3 col-sm-4 ms-auto mb-30', // Add col class for this section
    },
    {
      title: 'Services',
      links: [
        { title: 'Asha Kirana', href: '/charity/asha-kirana' },
        { title: 'Anna Amrita', href: '/charity/anna-amrita' },
        { title: 'Gruha Bhagya', href: '/charity/gruha-bhagya' },
        { title: 'Pashu Mandira', href: '/charity/pashu-mandira' },
      ],
      colClass: 'col-lg-3 col-sm-4 mb-30', // Add col class for this section
    },
  ]

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-bold">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default FooterMenu
