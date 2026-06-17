import type { CSSProperties } from 'react'
import { FiCheck } from 'react-icons/fi'
import { Check } from 'lucide-react'
import type { PackageOption } from '../data/productData'

type PackageCardProps = {
  key?: string
  option: PackageOption
  selected: boolean
  onSelect: () => void
}

export function PackageCard({ option, selected, onSelect }: PackageCardProps) {
  return (
    <button
      className={`package-card ${selected ? 'package-card--selected' : ''}`}
      style={{ '--accent-color': option.accent } as CSSProperties}
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div className="package-card__header">
        <div className="package-card__title">
          <strong>{option.titleTop}</strong>
          <strong>{option.titleBottom}</strong>
        </div>
        <img
          className={`package-card__eagle package-card__eagle--${option.id}`}
          src={option.imageSrc}
          alt=""
          aria-hidden="true"
        />
      </div>

      <ul className="package-card__features">
        {option.features.map((feature) => (
          <li key={`${option.id}-${feature.highlight ?? feature.text}`}>
            <span
              className="package-card__check"
              style={{ color: option.accent }}
              aria-hidden="true"
            >
              <FiCheck />
            </span>
            <span>
              {feature.highlight ? <strong>{feature.highlight}</strong> : null}
              {feature.text}
              {feature.linkText ? (
                <span className="package-card__link" style={{ color: option.accent }}>
                  {' '}
                  {option.id === 'vip' && feature.linkText === 'All features of Active, plus:' ? (
                    <>
                      <strong>All features</strong> of Active, plus:
                    </>
                  ) : (
                    feature.linkText
                  )}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>

      <span
        className={`package-card__radio ${selected ? 'is-active' : ''}`}
        aria-hidden="true"
      >
        {selected ? <Check strokeWidth={2.6} /> : null}
      </span>
    </button>
  )
}
