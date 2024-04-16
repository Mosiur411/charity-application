import Image from 'next/image'
import Link from 'next/link'

const CampaignBlock = () => {
  const campaigns = [
    {
      imgSrc: '/images/charity/asha-kirana_home.png',
      goal: '₹123,000',
      daysLeft: '2',
      ribbonBg: '#ff671f',
      title: 'Asha Kirana',
      description: 'Skill Development & Employment Program',
      aosDelay: '100',
    },
    {
      imgSrc: '/images/charity/anna-amrita_home.png',
      goal: '₹47,000',
      daysLeft: '3',
      ribbonBg: '#ff671f',
      title: 'Anna Amrita',
      description: 'Feed the poor/homeless Program',
      aosDelay: '200',
    },
    {
      imgSrc: '/images/charity/gruha-bhagya_home.png',
      goal: '₹47,000',
      daysLeft: '3',
      ribbonBg: '#ff671f',
      title: 'Gruha Bhagya',
      description: 'Housing/Shelter for poor Program',
      aosDelay: '400',
    },
    {
      imgSrc: '/images/charity/pashu-mandira_home.png',
      goal: '₹320,000',
      daysLeft: '5',
      ribbonBg: '#ff671f',
      title: 'Pashu Mandira',
      description: 'Animal Care Program and Welfare',
      aosDelay: '300',
    },
  ]

  return (
    <>
      {campaigns.map((campaign, index) => (
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={campaign.aosDelay} key={index}>
          <div className="card-style-eight mt-40 ">
            <div className="img-meta position-relative">
              <Image width={364} height={282} src={campaign.imgSrc} alt={campaign.title} className="lazy-img w-100" />
              <div className="donation-goal d-flex align-items-center justify-content-between position-absolute">
                <div className="fw-500 text-white fs-20">Goal: {campaign.goal}</div>
                {/* <div className="fs-15 text-white">{campaign.daysLeft} days left</div> */}
              </div>
              <div className="ribbon position-absolute" style={{ background: campaign.ribbonBg, width: '66%' }} />
            </div>
            <div className="text-meta pt-40 pb-25 ps-2 pe-2 pe-xl-4 ps-xl-4">
              <h4 className="mb-5">{campaign.title}</h4>
              <p className="mb-40">{campaign.description}</p>
              <Link href="/payment" className="btn-ten fs-16 fw-500 position-relative">
                Donate Now <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-eight */}
        </div>
      ))}
    </>
  )
}

export default CampaignBlock
