const Social = () => {
  const socialIcons = [
    { id: 1, link: 'https://www.facebook.com/deshbhaktorg2023', icon: 'fab fa-facebook-f' },
    { id: 2, link: 'https://www.instagram.com/deshbhaktorg', icon: 'fab fa-instagram' },
    { id: 3, link: 'https://www.youtube.com/@DeshbhaktORG', icon: 'fa-brands fa-youtube' },
  ]

  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
            <i className={socialIcon.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
