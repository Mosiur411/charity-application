import Link from 'next/link'
const features = [
  {
    title: 'Asha Kirana',
    color: '#FF5555',
    delay: 100,
    url: 'asha-kirana',
    text: 'Asha Kirana provides comprehensive training and support to job seekers, reducing unemployment rates and contributing to sustainable economic growth',
  },
  {
    title: 'Anna Amrita',
    color: '#36E0D1',
    delay: 200,
    url: 'anna-amrita',
    text: 'Anna Amrita nourishes the needy with meals, driven by community assessment, volunteer dedication, and diverse menus',
  },
  {
    title: 'Gruha Bhagya',
    color: '#FFD94F',
    delay: 300,
    url: 'gruha-bhagya',
    text: 'Gruha Bhagya provides safe, dignified, and affordable housing. Emergency shelters, transitional housing, and comprehensive support services empower individuals and families toward stability and self-sufficiency.',
  },
  {
    title: 'Pashu Mandira',
    color: '#B855FF',
    delay: 400,
    url: 'pashu-mandira',
    text: 'Pashu Mandira is a sanctuary providing holistic care and a loving home for abandoned and stray animals, focusing on their health, happiness, and well-being.',
  },
]

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div className="col-lg-3 col-sm-6" key={index} data-aos="fade-up" data-aos-delay={feature.delay}>
          <div className="card-style-seven mb-30 text-center position-relative tran3s ">
            <h3 className="mt-25 mb-35">{feature.title}</h3>
            <p>
              {feature?.text.slice(0, 40)}...{' '}
              <Link href={`/charity/${feature.url}`} className="read-btn tran3s">
                Read More
              </Link>
            </p>

            <span className="ribbon position-absolute" style={{ background: feature.color }} />
          </div>
        </div>
      ))}
    </>
  )
}

export default Features
