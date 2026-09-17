import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import '../styles/accordion.css'

/**
 * Reusable accordion component.
 *
 * @param {{
 *   items: Array<{ id: string | number, question: string, answer: React.ReactNode }>,
 *   allowMultiple?: boolean // If false, opening one closes others
 * }} props
 */
function Accordion({ items, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set())

  const toggle = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) {
          next.clear()
        }
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openItems.has(item.id)
        return (
          <div
            key={item.id}
            className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}
          >
            <button
              className="accordion__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-trigger-${item.id}`}
            >
              <span className="accordion__question">{item.question}</span>
              <span className="accordion__icon" aria-hidden="true">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <div
              className="accordion__content"
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              hidden={!isOpen}
            >
              <div className="accordion__inner">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
