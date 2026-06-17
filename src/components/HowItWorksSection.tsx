import type { CSSProperties } from 'react'

type HowItWorksCard = {
  title: string
  description: string
  icon: string
  accent: string
  iconBackground?: string
  iconBorder?: string
}

type HowItWorksSectionProps = {
  title: string
  subtitle?: string
  cards: HowItWorksCard[]
}

export function HowItWorksSection({ title, subtitle, cards }: HowItWorksSectionProps) {
  const iconMap = {
    cart: '/svgs/service.svg',
    user: '/svgs/profilewithtick.svg',
    lock: '/svgs/lock.svg',
  } as const

  return (
    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title" className="section-heading section-heading--center">
        {title}
      </h2>
      {subtitle ? <p className="how-it-works__subtitle">{subtitle}</p> : null}

      <div className="how-it-works__cards-wrap">
        <div className="how-it-works__grid">
          {cards.map((card, index) => (
            <article key={card.title} className="how-it-works__card">
              {(() => {
                const iconSrc = iconMap[card.icon as keyof typeof iconMap]

                return (
                  <div
                    className="how-it-works__icon"
                    style={
                      {
                        '--how-it-works-accent': card.accent,
                        '--how-it-works-icon-bg': card.iconBackground ?? '',
                        '--how-it-works-icon-border': card.iconBorder ?? '',
                      } as CSSProperties
                    }
                    aria-hidden="true"
                  >
                    {iconSrc ? <img src={iconSrc} alt="" /> : <span>{card.icon}</span>}
                  </div>
                )
              })()}
              <span className="how-it-works__count-bg">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="how-it-works__count-sm">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="how-it-works__content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
