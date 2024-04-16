interface FaqData {
  question: string
  answer: string
}

interface FaqProps {
  faqData: FaqData[]
}

const Faq: React.FC<FaqProps> = ({ faqData }) => {
  return (
    <div className="px-5 accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="pattern-bg-one px-2">
              <h6>{faq.answer}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faq
