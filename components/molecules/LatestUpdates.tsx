import Image from 'next/image'
import Link from 'next/link'

const LatestUpdates = () => {
  const campaigns = [
    {
      imgSrc: '/images/blog/indias-soaring-decad.png',
      daysLeft: '2',
      ribbonBg: '#ff671f',
      title: ' “India’s Decade of Dynamic Growth: Achievements and Aspirations (2014-2024)”',
      aosDelay: '100',
      path:'indias-decade-dynamic-growth-achievements-aspirations-2014-2024'
    },
    {
      imgSrc: '/images/blog/history-repeats-itself.png',
      daysLeft: '2',
      ribbonBg: '#ff671f',
      title: ' “History Repeats Itself: India, Past, Present, and Future”',
      aosDelay: '100',
      path:'history-repeats-itself'
    },
    {
      imgSrc: '/images/blog/population-growth-india.png',
      daysLeft: '2',
      ribbonBg: '#ff671f',
      title: ' “Population Growth in India: Future Problems and Sustainable Solutions”',
      aosDelay: '100',
      path:'population-growth-india'
    }
  ]

  return (
    <>
      {campaigns.map((campaign, index) => (
        <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={campaign.aosDelay} key={index}>
          <div className="card-style-eight mt-40 ">
            <div className="img-meta position-relative">
              <Image width={364} height={283} src={campaign.imgSrc} alt={campaign.title} className="lazy-img w-100" />
              <div className="donation-goal d-flex align-items-center justify-content-between position-absolute">
                {/* <div className="fs-15 text-white">{campaign.daysLeft} days left</div> */}
              </div>
              <div className="ribbon position-absolute" style={{ background: campaign.ribbonBg, width: '66%' }} />
            </div>
            <div className="text-meta pt-40 pb-25 ps-2 pe-2 pe-xl-4 ps-xl-4">
              <h4 className="mb-5">{campaign.title.slice(0,40)}...?</h4>
              <Link href={`/blog/${campaign?.path}`} className="btn-ten fs-16 fw-500 position-relative">
                Read More <i className="fa-solid fa-angle-right" />
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

export default LatestUpdates
