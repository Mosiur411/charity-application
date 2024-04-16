/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CountUp from 'react-countup'

interface ICounter {
  counterRef: any
  inView: any
}

const Counter = ({ counterRef, inView }: ICounter) => {
  const countersData = [
    {
      id: 1,
      value: 1576,
      unit: '',
      label: 'Skill empowerment & employment',
      image: '/images/shape/shape_72.svg',
      delay: '100',
    },
    {
      id: 2,
      value: 2500,
      unit: '',
      label: 'fed every single week',
      image: '/images/shape/shape_73.svg',
      delay: '200',
    },
    {
      id: 3,
      value: 25,
      unit: '',
      label: 'housing rehabilitation projects',
      image: '/images/shape/shape_74.svg',
      delay: '300',
    },
    {
      id: 4,
      value: 17,
      unit: '',
      label: 'Animal care & welfare hubs',
      image: '/images/shape/shape_75.svg',
      delay: '400',
    },
  ]

  const renderedCounters = countersData.map((counter) => (
    <div key={counter.id} className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={counter.delay}>
      <div className="counter-block-two position-relative text-center mt-110">
        <div className="main-count fw-500 tx-dark">
          <CountUp end={inView ? counter.value : 0} duration={2} separator="," />
          {counter.unit}
        </div>
        <p className="tx-dark fs-18 m0">{counter.label}</p>
        <img src={counter.image} alt="shape" className="lazy-img position-absolute bg-img" />
      </div>
    </div>
  ))

  return (
    <div className="row" ref={counterRef}>
      {renderedCounters}
    </div>
  )
}

export default Counter
