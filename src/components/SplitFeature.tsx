import { BsArrowUpRight, BsBarChart, BsBullseye } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { HiMiniSparkles } from 'react-icons/hi2'
import { IoFlashOutline } from 'react-icons/io5'

type Bullet = {
  title: string
  description: string
  icon: string
  color: string
}

type SplitFeatureProps = {
  eyebrow: string
  title: string
  description: string
  bullets: Bullet[]
  accent: 'pink' | 'blue' | 'green'
  visual: 'phone' | 'portrait' | 'dashboard'
  reverse?: boolean
}

function PromoVisual() {
  return (
    <div className="promo-visual">
      <img
        className="promo-visual__image"
        src="/growYourInsta.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}

function PromoMetrics({ bullets }: Pick<SplitFeatureProps, 'bullets'>) {
  const promoIcons = [BsArrowUpRight, FiUsers, BsBullseye, BsBarChart]

  return (
    <>
      <div className="promo-metric-grid">
        {bullets.map((bullet, index) => {
          const Icon = promoIcons[index] ?? HiMiniSparkles
          const customIcon =
            bullet.description === 'Engagement Rate'
              ? '/svgs/engagement.svg'
              : bullet.description === 'Content Impact'
                ? '/svgs/content.svg'
                : null

          return (
          <article key={bullet.title} className="promo-metric-card">
            <div className="promo-metric-card__icon" style={{ background: bullet.color }}>
              {customIcon ? <img src={customIcon} alt="" aria-hidden="true" /> : <Icon />}
            </div>
            <strong>{bullet.title}</strong>
            <span>{bullet.description}</span>
          </article>
          )
        })}
      </div>

      <div className="promo-proof">
        <div className="promo-proof__avatars" aria-hidden="true">
          <span>
            <img src="/review/creator1.jpg" alt="" />
          </span>
          <span>
            <img src="/review/creator2.jpg" alt="" />
          </span>
          <span>
            <img src="/review/creator3.jpg" alt="" />
          </span>
        </div>
        <p>Join 50,000+ creators growing their audience</p>
      </div>
    </>
  )
}

function PortraitVisual() {
  return (
    <div className="story-visual">
      <div className="story-visual__frame">
        <div className="story-visual__image" />
        <span className="story-visual__badge story-visual__badge--one">Like</span>
        <span className="story-visual__badge story-visual__badge--two">Save</span>
        <span className="story-visual__stat">9.8k</span>
      </div>
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="visual-card">
      <div className="visual-card__badge">Campaign dashboard</div>
      <div className="visual-card__screen">
        <div className="visual-card__screen-line" />
        <div className="visual-card__screen-line" />
        <div className="visual-card__screen-line is-short" />
        <div className="visual-card__screen-line" />
      </div>
    </div>
  )
}

export function SplitFeature({
  eyebrow,
  title,
  description,
  bullets,
  accent,
  visual,
  reverse = false,
}: SplitFeatureProps) {
  const isPromo = visual === 'phone'
  const visualClass = `split-feature__visual split-feature__visual--${accent}`
  const copyClass = `split-feature__copy${isPromo ? ' split-feature__copy--promo' : ''}`
  const containerClass = `split-feature${isPromo ? ' split-feature--promo' : ''}${
    reverse ? ' split-feature--reverse' : ''
  }`

  return (
    <div className={containerClass}>
      <div className={visualClass}>
        {isPromo ? <PromoVisual /> : visual === 'dashboard' ? <DashboardVisual /> : <PortraitVisual />}
      </div>
      <div className={copyClass}>
        <p className={`split-feature__eyebrow split-feature__eyebrow--${accent}`}>
          {isPromo ? <IoFlashOutline aria-hidden="true" /> : null}
          <span>{eyebrow}</span>
        </p>
        {isPromo ? (
          <h3 className="split-feature__promo-title">
            <span className="split-feature__promo-line split-feature__promo-line--warm">Grow Your</span>
            <span className="split-feature__promo-line split-feature__promo-line--cool">Instagram Followers</span>
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
        <p>{description}</p>
        {isPromo ? (
          <PromoMetrics bullets={bullets} />
        ) : (
          <div className="split-feature__bullets">
            {bullets.map((bullet) => (
              <article key={bullet.title} className="mini-card">
                <div className="mini-card__icon" style={{ background: bullet.color }}>
                  {bullet.icon}
                </div>
                <div>
                  <h4>{bullet.title}</h4>
                  <p>{bullet.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
