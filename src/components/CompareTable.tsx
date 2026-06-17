import {
  FaAward,
  FaCreditCard,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
  FaSignInAlt,
  FaUserFriends,
} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'

type CompareTableProps = {
  columns: string[]
  rows: Array<{
    label: string
    ours: string
    others: string
  }>
}

const labelIcons = {
  "Real Followers": FaUserFriends,
  Pricing: FaDollarSign,
  Support: FaHeadset,
  "Payment Options": FaCreditCard,
  "Delivery Speed": FaShippingFast,
  "Login Info Needed": FaSignInAlt,
  Experience: FaAward,
  "Account Safety": FaShieldAlt,
} as const

export function CompareTable({ columns, rows }: CompareTableProps) {
  return (
    <div className="compare-table" role="table" aria-label="Comparison table">
      <div className="compare-table__labels" role="rowgroup" aria-label={columns[0]}>
        <div className="compare-table__labels-spacer" aria-hidden="true" />
        <div className="compare-table__card compare-table__card--labels">
          {rows.map((row) => {
            const Icon = labelIcons[row.label as keyof typeof labelIcons]

            return (
              <div key={row.label} className="compare-table__item compare-table__item--label" role="row">
                <span className="compare-table__metric">
                  <Icon />
                  {row.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="compare-table__column compare-table__column--ours" role="rowgroup" aria-label={columns[1]}>
        <div className="compare-table__card compare-table__card--ours">
          <div className="compare-table__brand-pill">
            <img src="/logo.png" alt="Eagle Likes" />
          </div>
          {rows.map((row) => (
            <div key={row.label} className="compare-table__item compare-table__item--ours" role="row">
              <span className="compare-table__value compare-table__value--ours">
                <BsCheckCircle />
                {row.ours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="compare-table__column compare-table__column--others" role="rowgroup" aria-label={columns[2]}>
        <div className="compare-table__others-pill">{columns[2]}</div>
        <div className="compare-table__card compare-table__card--others">
          {rows.map((row) => (
            <div key={row.label} className="compare-table__item compare-table__item--others" role="row">
              <span className="compare-table__value compare-table__value--others">
                <img className="compare-table__cross-icon" src="/svgs/cros.png" alt="" aria-hidden="true" />
                {row.others}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
