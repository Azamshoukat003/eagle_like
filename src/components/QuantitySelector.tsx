import type { QuantityOption } from '../data/productData'

type QuantitySelectorProps = {
  options: QuantityOption[]
  selectedAmount: number
  onSelect: (amount: number) => void
}

export function QuantitySelector({
  options,
  selectedAmount,
  onSelect,
}: QuantitySelectorProps) {
  return (
    <section className="quantity-grid" aria-label="Select quantity">
      {options.map((option) => (
        <button
          key={option.amount}
          className={`quantity-card ${
            selectedAmount === option.amount ? 'is-selected' : ''
          }`}
          type="button"
          onClick={() => onSelect(option.amount)}
        >
          <span className="quantity-card__cap">
            <strong>{option.amount}</strong>
          </span>
          <span className="quantity-card__discount">{option.discount}%off</span>
        </button>
      ))}
    </section>
  )
}
