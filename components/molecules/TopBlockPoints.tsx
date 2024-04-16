/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { ICharityPoint } from '@/interfaces/charity'

interface IPoints {
  points?: ICharityPoint[]
  image?: string
}

const TopBlockPoints = ({ points = [], image }: IPoints) => {
  return (
    <div className="fancy-feature-seventeen position-relative pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 ms-auto order-lg-last" data-aos="fade-left">
            {/* /.title-style-six */}
            {points.map((point: ICharityPoint) => (
              <p className="fs-16 lh-lg pe-xxl-5 mt-10 lg-mt-20" key={point.id}>
                💙 {point.title}
                {point.desc}
              </p>
            ))}
          </div>

          <div className="col-lg-6 order-lg-first" data-aos="fade-right">
            <div className="img-container d-inline-block position-relative">
              <Image src={image as string} alt="media" className="lazy-img" width={689} height={744} layout="responsive" />
            </div>
            {/* /.img-meta */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBlockPoints
