import { useState, useRef, useEffect } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FaqListProps = {
  items: FaqItem[]
}

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button className="faq-item__summary" onClick={onToggle} aria-expanded={isOpen}>
        {question}
        <span className="faq-chevron" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className="faq-item__body"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
