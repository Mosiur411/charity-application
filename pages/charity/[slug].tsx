/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { Seo } from '@/components/atoms'
import { ParsedUrlQuery } from 'querystring'
import { ICharity } from '@/interfaces/charity'
import { CharityInformation } from '@/data/charity'

interface IParams extends ParsedUrlQuery {
  slug: string
}

const CharityDetails = ({ slug }: IParams) => {
  const [charityDescription, setCharityDescription] = useState<ICharity>()

  useEffect(() => {
    function fetchCharity() {
      const charityDetails = CharityInformation.find((charity: ICharity) => slug === charity.url)
      setCharityDescription(charityDetails)
    }

    if (slug) fetchCharity()

    return () => {
      setCharityDescription({} as ICharity)
    }
  }, [slug])

  return (
    <>
      <Seo pageTitle={charityDescription?.title} />

      <div className="service-details position-relative pt-100 pb-170 md-pt-50 lg-pb-120 text-dark">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <Image
                  src={charityDescription?.image as string}
                  alt="media"
                  className="main-img-meta"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <h4>{charityDescription?.subTitle}</h4>
                <p className="text-lg tx-dark">{charityDescription?.description}</p>
                {
                  charityDescription?.content?.map((cont)=><div 
                  className="pt-20"
                  key={cont?.id}
                  > 
                   <h4 className="text-lg tx-dark">{cont?.title}</h4>
                   <p >{cont?.fastWord}<b> {cont?.boldText}</b>{cont?.desc}</p>
                  
                  </div>)
                }

                {/* 

              <div className="pt-20">
                  <h4 className="text-lg tx-dark">I. Introduction</h4>
                  <p>
                  <b>A. Overview of Population Growth in India </b> India’s burgeoning population is a subject of intense study and debate. With a current estimate of over 1.44 billion people, the nation’s demographic trajectory is set to reshape not only its own future but also that of the entire world. The implications of this growth extend far beyond mere numbers, touching upon every facet of Indian society.
                  </p>
                
                </div>

                <div className="pt-50">
                  <h4 className="text-lg tx-dark">II. Current Population Trends</h4>
                  <p>
                  <b>A. Population Statistics  </b> The latest census data reveals a complex narrative of regional diversity in population trends, with some areas showing signs of stabilizing while others continue to experience rapid growth.
                  </p>
                  <p>
                  <b>B. Factors Contributing to Population Growth </b> A myriad of factors contribute to India’s population increase, including cultural preferences, economic conditions, and public health policies. Understanding these elements is crucial for addressing the challenges ahead.
                  </p>
                </div>

*/}

                
             {/*    <TopBlockPoints points={charityDescription?.topPoints} image={charityDescription?.topPointImage} />
                <BottomBlockPoints points={charityDescription?.bottomPoints} image={charityDescription?.bottomPointImage} /> */}
              {/*   <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <p>{charityDescription?.conclusion}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  return {
    props: { slug },
  }
}

export default CharityDetails
