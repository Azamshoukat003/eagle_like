import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { IoStarSharp } from 'react-icons/io5'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CompareTable } from './components/CompareTable'
import { FaqList } from './components/FaqList'
import { FeatureStorySection } from './components/FeatureStorySection'
import { FollowersPreview } from './components/FollowersPreview'
import { Footer } from './components/Footer'
import { HowItWorksSection } from './components/HowItWorksSection'
import { Navbar } from './components/Navbar'
import { PackageCard } from './components/PackageCard'
import { QuantitySelector } from './components/QuantitySelector'
import { SectionHeading } from './components/SectionHeading'
import { BenefitsHeading } from './components/BenefitsHeading'
import { SplitFeature } from './components/SplitFeature'
import {
  badgeItems,
  compareColumns,
  compareRows,
  faqItems,
  featureReasons,
  packageOptions,
  privacyPanels,
  promoHighlights,
  previewItems,
  quantityOptions,
  reviewSummary,
  showcaseCards,
  storyPanels,
  trustLogos,
  Benefits,
} from './data/productData'

function App() {
  const pageRef = useRef<HTMLElement>(null)
  const [selectedPackageId, setSelectedPackageId] = useState(packageOptions[0].id)
  const [selectedQuantity, setSelectedQuantity] = useState(quantityOptions[0].amount)
  const [vipToggleEnabled, setVipToggleEnabled] = useState(false)
  const [featureIndex, setFeatureIndex] = useState(0)
  const [benefitsIndex, setBenefitsIndex] = useState(0)
  const featureCarouselRef = useRef<HTMLDivElement>(null)
  const benefitsCarouselRef = useRef<HTMLDivElement>(null)
  const isCompactCarousel = () => window.matchMedia('(max-width: 768px)').matches

  const getCarouselStep = (carousel: HTMLDivElement | null) => {
    if (!carousel) {
      return 0
    }

    const card = carousel.querySelector<HTMLElement>('.feature-card')
    const track = carousel.querySelector<HTMLElement>('.feature-grid')

    if (!card || !track) {
      return 0
    }

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '0')

    return card.getBoundingClientRect().width + gap
  }

  const syncCarouselIndex = (
    carousel: HTMLDivElement | null,
    total: number,
    setter: (value: number) => void,
  ) => {
    if (!carousel || !isCompactCarousel()) {
      return
    }

    const step = getCarouselStep(carousel)

    if (!step) {
      return
    }

    const next = Math.min(
      Math.max(Math.round(carousel.scrollLeft / step), 0),
      total - 1,
    )

    setter(next)
  }

  const scrollFeatureReasons = (dir: 'prev' | 'next') => {
    if (isCompactCarousel()) {
      const step = getCarouselStep(featureCarouselRef.current)

      if (featureCarouselRef.current && step) {
        featureCarouselRef.current.scrollBy({
          left: dir === 'next' ? step : -step,
          behavior: 'smooth',
        })
      }

      return
    }

    const next = dir === 'next'
      ? Math.min(featureIndex + 1, featureReasons.length - 1)
      : Math.max(featureIndex - 1, 0)
    setFeatureIndex(next)
  }

  const scrollBenefits = (dir: 'prev' | 'next') => {
    if (isCompactCarousel()) {
      const step = getCarouselStep(benefitsCarouselRef.current)

      if (benefitsCarouselRef.current && step) {
        benefitsCarouselRef.current.scrollBy({
          left: dir === 'next' ? step : -step,
          behavior: 'smooth',
        })
      }

      return
    }

    const next = dir === 'next'
      ? Math.min(benefitsIndex + 1, Benefits.length - 1)
      : Math.max(benefitsIndex - 1, 0)
    setBenefitsIndex(next)
  }

  const selectedPackage =
    packageOptions.find((option) => option.id === selectedPackageId) ?? packageOptions[0]
  const selectedTier =
    quantityOptions.find((option) => option.amount === selectedQuantity) ?? quantityOptions[0]

  useEffect(() => {
    if (!pageRef.current) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>(
        '.hero-copy, .search-pill, .package-grid, .quantity-grid, .checkout-panel, .proof-strip, .badge-row, .preview-panel, .review-footer',
      )

      gsap.from(heroItems, {
        autoAlpha: 0,
        y: 36,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.08,
        clearProps: 'opacity,visibility,transform',
      })

      const scrollItems = gsap.utils.toArray<HTMLElement>(
        '.logo-strip, .content-section .section-heading, .feature-card, .split-feature, .how-it-works__card, .compare-table, .feature-story, .privacy-section > *, .active-followers__left, .active-followers__right, .showcase-card, .faq-heading, .faq-subtitle, .faq-item',
      )

      scrollItems.forEach((item, index) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 48,
          duration: 0.85,
          delay: index % 4 === 0 ? 0 : (index % 4) * 0.04,
          ease: 'power2.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main ref={pageRef} className="product-page">
      <Navbar />

      <section className="section-shell hero-section">
        <div className="hero-copy">
          <h1>
            Buy Instagram Followers
            <br />
            with <span>Fast Delivery!</span>
          </h1>
          <p>
            Quickly get premium Instagram followers safely and easily! Boost your IG
            influence and engagement instantly! Always great prices and offers!
          </p>
        </div>

        <div className="search-pill">
          <button
            className={`search-pill__toggle${vipToggleEnabled ? ' is-active' : ''}`}
            type="button"
            aria-label="Toggle VIP followers"
            aria-pressed={vipToggleEnabled}
            onClick={() => setVipToggleEnabled((current) => !current)}
          >
            <span className="search-pill__toggle-knob" />
          </button>
          <span className="search-pill__text">I need VIP followers</span>
          <span className="search-pill__badge" aria-hidden="false">
            <span className="vip-tooltip-wrapper">
              <img src="/svgs/Vector.png" alt="" aria-hidden="true" />
              <span className="vip-tooltip">VIP followers are high-quality accounts with profile pictures, posts, and real activity for maximum credibility.</span>
            </span>
          </span>
        </div>

        <div className="package-grid">
          {packageOptions.map((option) => (
            <PackageCard
              key={option.id}
              option={option}
              selected={option.id === selectedPackage.id}
              onSelect={() => setSelectedPackageId(option.id)}
            />
          ))}
        </div>

        <QuantitySelector
          options={quantityOptions}
          selectedAmount={selectedTier.amount}
          onSelect={setSelectedQuantity}
        />

        <section className="checkout-panel" aria-label="Pricing details">
          <div className="price-block">
            <div className="price-line">
              <strong>${selectedTier.price.toFixed(2)}</strong>
              <span>${selectedTier.originalPrice.toFixed(2)}</span>
            </div>
            <div className="saving-line">
              <span>you&apos;re saving</span>
              <img
                className="saving-line__icon"
                src="/yousave.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="saving-line__value">${selectedTier.saving.toFixed(2)}</span>
            </div>
          </div>

          <button className="buy-button" type="button">
            Buy Now
          </button>
        </section>

        <section className="proof-strip" aria-label="Purchase proof">
          <div
            className="stars"
            aria-label={`${reviewSummary.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                className="stars__icon"
                src="/Star.png"
                alt=""
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="avatars" aria-hidden="true">
            {reviewSummary.buyers.map((buyer) => (
              <div
                key={buyer.name}
                className="avatar-bubble"
                style={{ background: buyer.background }}
                title={buyer.name}
              >
                {buyer.image ? (
                  <img
                    className="avatar-bubble__image"
                    src={buyer.image}
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  buyer.initials
                )}
              </div>
            ))}
          </div>

          <p className="purchase-copy">
            <span>{reviewSummary.purchaseCount} people</span>
            <span>{reviewSummary.repeatMessage}</span>
          </p>
        </section>

        <section className="badge-row" aria-label="Store benefits">
          {badgeItems.map((item) => (
            <div key={item.label} className="badge-item">
              <span className="badge-item__icon" aria-hidden="true">
                <BsCheckLg />
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <FollowersPreview items={previewItems} />

        <footer className="review-footer">
          <div className="review-footer__headline">
            <div className="review-footer__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStarSharp key={index} />
              ))}
            </div>
            <p>{reviewSummary.verifiedReviews} Verified Customer Reviews</p>
          </div>
          <p>{reviewSummary.memberCount} individual users and counting</p>
        </footer>
      </section>

      <section className="section-shell logo-strip" aria-label="As seen on">
        <p className="logo-strip__title">Eagle Likes is seen on...</p>
        <div className="logo-strip__viewport">
          <div className="logo-strip__track">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="logo-strip__grid"
                aria-hidden={setIndex === 1 ? 'true' : undefined}
              >
                {trustLogos.map((logo) => (
                  <div key={`${setIndex}-${logo.name}`} className="logo-pill">
                    <img className="logo-pill__image" src={logo.src} alt={setIndex === 0 ? logo.name : ''} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell content-section content-section--with-divider">
        <SectionHeading title="Why Eagle Likes?" accentWord="Eagle Likes?" />
        <div
          ref={featureCarouselRef}
          className="feature-carousel"
          onScroll={() => syncCarouselIndex(featureCarouselRef.current, featureReasons.length, setFeatureIndex)}
        >
          <div className="feature-grid" style={{ '--feature-slide-index': featureIndex } as CSSProperties}>
            {featureReasons.map((reason) => (
              <article key={reason.title} className="feature-card">
                <div
                  className="feature-card__icon-shell"
                  style={
                    {
                      '--feature-accent': reason.accent,
                      '--feature-glow': reason.glow,
                    } as CSSProperties
                  }
                >
                  <img
                    className="feature-card__icon"
                    src={reason.imageSrc}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="feature-nav">
          <button
            className={`feature-nav__btn${featureIndex > 0 ? ' feature-nav__btn--active' : ''}`}
            onClick={() => scrollFeatureReasons('prev')}
            aria-label="Previous"
            disabled={featureIndex === 0}
          >
            {featureIndex > 0 ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="url(#paint0_linear_feature_prev)"/>
                <path d="M16 9L11 14L16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_feature_prev" x1="0" y1="14" x2="28" y2="14" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0663CD"/>
                    <stop offset="1" stopColor="#01AAFF"/>
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.3393" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <path d="M16 9L11 14L16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button
            className={`feature-nav__btn${featureIndex < featureReasons.length - 1 ? ' feature-nav__btn--active' : ''}`}
            onClick={() => scrollFeatureReasons('next')}
            aria-label="Next"
            disabled={featureIndex === featureReasons.length - 1}
          >
            {featureIndex < featureReasons.length - 1 ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.8393" fill="url(#paint0_linear_feature_next)"/>
                <path d="M12 9L17 14L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_feature_next" x1="0" y1="13.8393" x2="27.6786" y2="13.8393" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0663CD"/>
                    <stop offset="1" stopColor="#01AAFF"/>
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.3393" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <path d="M12 9L17 14L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </section>

      <section className="section-shell content-section promo-section">
        <span className="promo-section__right-glow" aria-hidden="true" />
        <SplitFeature
          eyebrow="Social Media Growth"
          title="Grow Your Instagram Followers"
          description="Grow your Instagram audience with data-driven strategies and proven tactics. Build an engaged community and expand your reach effortlessly."
          accent="pink"
          visual="phone"
          bullets={promoHighlights}
        />
      </section>

      <section className="section-shell content-section how-it-works-section">
        <HowItWorksSection
          title="How it works"
          subtitle="Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly"
          cards={showcaseCards}
        />
      </section>

      <section className="section-shell audience-intro" aria-labelledby="audience-intro-title">
        <h2 id="audience-intro-title" className="audience-intro__title">
          <span>Why Are </span>
          <span className="audience-intro__accent">Instagram </span>
          <span className="audience-intro__accent audience-intro__accent--followers">Followers</span>
          <span> Important?</span>
        </h2>
        <p className="audience-intro__copy">
          The followers are important because they represent your audience, your credibility,
          and your influence. A larger, more engaged following equates to reaching more people,
          building trust, and creating real opportunities for growth and brand success.
        </p>

        <FeatureStorySection
          title={storyPanels[0].title}
          description={storyPanels[0].description}
          imageSrc="/whybuy.png"
        />

        <FeatureStorySection
          title={storyPanels[1].title}
          // {'Boost Organic\nGrowth'}
          description={storyPanels[1].description}
          
          imageSrc="/boost.png"
          reverse
        />
      </section>

      <section className="section-shell content-section compare-section">
        <SectionHeading title="Why Choose us?" />
        <CompareTable columns={compareColumns} rows={compareRows} />
      </section>

      <section className="section-shell content-section privacy-section">
        <SectionHeading title="Your Privacy Is Our Focus" />
        <p className="privacy-intro">
          Being careful about your safety online is smart, scammers constantly look for ways to
          steal from unsuspecting users. You should also protect your social media accounts, as
          platforms have detailed rules that can be violated easily by mistake.
        </p>
        <FeatureStorySection
          title={privacyPanels[0].title}
          description={privacyPanels[0].description}
          imageSrc="/securepayment.png"
        />
        <div className="privacy-section__story privacy-section__story--right-glow">
          <FeatureStorySection
            title={privacyPanels[1].title}
            description={privacyPanels[1].description}
            imageSrc="/dataprotection.png"
            reverse
          />
        </div>
      </section>

{/* Active Followers Hero Section */}
      <section className="section-shell content-section active-followers-section">
        <div className="active-followers__left">
          <div className="active-followers__badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M12 5.25H16.5V9.75" stroke="#C27AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 5.25L10.125 11.625L6.375 7.875L1.5 12.75" stroke="#C27AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Trusted by 100K+ creators
          </div>
          <h2 className="active-followers__heading">
            Get Thousands of<br />
            <span className="active-followers__heading-accent">Active Followers</span>
          </h2>
          <p className="active-followers__desc">
            Grow your social media presence organically with real,<br />
            engaged followers. Watch your influence expand<br />
            across all platforms.
          </p>
          <div className="active-followers__cards">
            <div className="af-card">
              <span className="af-card__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_1_738)"><mask id="mask0_1_738" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><path d="M20 0H0V20H20V0Z" fill="white"/></mask><g mask="url(#mask0_1_738)"><path d="M9.18083 2.34537C9.21654 2.15421 9.31798 1.98155 9.46758 1.8573C9.61718 1.73305 9.80553 1.66504 10 1.66504C10.1945 1.66504 10.3828 1.73305 10.5324 1.8573C10.682 1.98155 10.7835 2.15421 10.8192 2.34537L11.695 6.97704C11.7572 7.30633 11.9172 7.60922 12.1542 7.84618C12.3912 8.08314 12.694 8.24317 13.0233 8.30537L17.655 9.1812C17.8462 9.21691 18.0188 9.31835 18.1431 9.46795C18.2673 9.61755 18.3353 9.8059 18.3353 10.0004C18.3353 10.1949 18.2673 10.3832 18.1431 10.5328C18.0188 10.6824 17.8462 10.7839 17.655 10.8196L13.0233 11.6954C12.694 11.7576 12.3912 11.9176 12.1542 12.1546C11.9172 12.3916 11.7572 12.6944 11.695 13.0237L10.8192 17.6554C10.7835 17.8466 10.682 18.0192 10.5324 18.1435C10.3828 18.2677 10.1945 18.3357 10 18.3357C9.80553 18.3357 9.61718 18.2677 9.46758 18.1435C9.31798 18.0192 9.21654 17.8466 9.18083 17.6554L8.305 13.0237C8.2428 12.6944 8.08277 12.3916 7.84581 12.1546C7.60885 11.9176 7.30596 11.7576 6.97667 11.6954L2.345 10.8196C2.15384 10.7839 1.98118 10.6824 1.85693 10.5328C1.73268 10.3832 1.66467 10.1949 1.66467 10.0004C1.66467 9.8059 1.73268 9.61755 1.85693 9.46795C1.98118 9.31835 2.15384 9.21691 2.345 9.1812L6.97667 8.30537C7.30596 8.24317 7.60885 8.08314 7.84581 7.84618C8.08277 7.60922 8.2428 7.30633 8.305 6.97704L9.18083 2.34537Z" stroke="#FDC700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.6667 1.66699V5.00032" stroke="#FDC700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.3333 3.33398H15" stroke="#FDC700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.33333 18.3333C4.25381 18.3333 5 17.5871 5 16.6667C5 15.7462 4.25381 15 3.33333 15C2.41286 15 1.66667 15.7462 1.66667 16.6667C1.66667 17.5871 2.41286 18.3333 3.33333 18.3333Z" stroke="#FDC700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></g></g><defs><clipPath id="clip0_1_738"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
              </span>
              <span className="af-card__title">Real</span>
              <span className="af-card__sub">Organic Growth</span>
            </div>
            <div className="af-card">
              <span className="af-card__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none"><path d="M1.66951 10.8352C1.51182 10.8357 1.35721 10.7915 1.22364 10.7076C1.09008 10.6238 0.983044 10.5038 0.914974 10.3615C0.846904 10.2193 0.820594 10.0607 0.839104 9.90401C0.857604 9.74741 0.920164 9.59931 1.01951 9.47681L9.26948 0.976842C9.33138 0.905412 9.41568 0.857142 9.50868 0.839952C9.60158 0.822772 9.69758 0.837692 9.78098 0.882262C9.86428 0.926842 9.92998 0.998422 9.96728 1.08527C10.0046 1.17211 10.0113 1.26905 9.98618 1.36018L8.38618 6.37684C8.33898 6.50311 8.32316 6.63894 8.33998 6.77268C8.35688 6.90642 8.40588 7.03408 8.48288 7.1447C8.55998 7.25532 8.66268 7.34561 8.78228 7.40781C8.90178 7.47002 9.03468 7.50228 9.16948 7.50184H15.0029C15.1606 7.50131 15.3152 7.54552 15.4487 7.62936C15.5823 7.7132 15.6893 7.83321 15.7574 7.97546C15.8255 8.11771 15.8518 8.27635 15.8333 8.43296C15.8148 8.58957 15.7522 8.73771 15.6529 8.86018L7.40285 17.3602C7.34096 17.4316 7.25663 17.4799 7.1637 17.4971C7.07076 17.5142 6.97474 17.4993 6.89141 17.4547C6.80807 17.4102 6.74236 17.3386 6.70507 17.2517C6.66778 17.1649 6.66112 17.068 6.68618 16.9768L8.28618 11.9602C8.33336 11.8339 8.34918 11.6981 8.33235 11.5643C8.3155 11.4306 8.26646 11.3029 8.18944 11.1923C8.11241 11.0817 8.0097 10.9914 7.89012 10.9292C7.77053 10.867 7.63764 10.8347 7.50285 10.8352H1.66951Z" stroke="#51A2FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="af-card__title">Fast</span>
              <span className="af-card__sub">Instant Results</span>
            </div>
            <div className="af-card">
              <span className="af-card__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.66669 7.91711C1.6667 6.98977 1.94801 6.08426 2.47346 5.32016C2.99891 4.55606 3.74378 3.96932 4.60969 3.63744C5.4756 3.30556 6.42182 3.24414 7.32336 3.46131C8.22491 3.67848 9.03937 4.16401 9.65919 4.85377C9.70284 4.90045 9.75562 4.93766 9.81425 4.96311C9.87288 4.98855 9.93611 5.00168 10 5.00168C10.0639 5.00168 10.1271 4.98855 10.1858 4.96311C10.2444 4.93766 10.2972 4.90045 10.3408 4.85377C10.9587 4.15952 11.7734 3.66991 12.6764 3.45011C13.5794 3.2303 14.5279 3.29073 15.3957 3.62334C16.2635 3.95596 17.0095 4.54498 17.5343 5.31202C18.059 6.07907 18.3378 6.98774 18.3333 7.91711C18.3333 9.82544 17.0833 11.2504 15.8333 12.5004L11.2567 16.9279C11.1014 17.1062 10.9099 17.2495 10.695 17.3482C10.4801 17.4468 10.2467 17.4986 10.0102 17.5001C9.7738 17.5016 9.53973 17.4528 9.32359 17.3568C9.10746 17.2609 8.91421 17.1201 8.75669 16.9437L4.16669 12.5004C2.91669 11.2504 1.66669 9.83377 1.66669 7.91711Z" fill="#FB64B6" stroke="#FB64B6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="af-card__title">Safe</span>
              <span className="af-card__sub">100% Secure</span>
            </div>
          </div>
        </div>
        <div className="active-followers__right">
          <div className="active-followers__img-wrap">
            <img
              className="af-placeholder-img"
              src="/PhotoWithIcons.png"
              alt="Social media growth preview"
            />
          </div>
        </div>
      </section>


      <section className="section-shell content-section content-section--with-divider">
        <BenefitsHeading title="Benefits of Buying Instagram Followers" accentWord="Instagram Followers" />
        <p className="benefits-subtitle">Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure.</p>
        <div
          className="benefits-carousel"
          ref={benefitsCarouselRef}
          onScroll={() => syncCarouselIndex(benefitsCarouselRef.current, Benefits.length, setBenefitsIndex)}
        >
          <div className="feature-grid" style={{ '--slide-index': benefitsIndex } as CSSProperties}>
            {Benefits.map((reason) => (
              <article key={reason.title} className="feature-card">
                <div
                  className="feature-card__icon-shell"
                  style={
                    {
                      '--feature-accent': reason.accent,
                      '--feature-glow': reason.glow,
                    } as CSSProperties
                  }
                >
                  <img
                    className="feature-card__icon"
                    src={reason.imageSrc}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="benefits-nav">
          <button
            className={`feature-nav__btn${benefitsIndex > 0 ? ' feature-nav__btn--active' : ''}`}
            onClick={() => scrollBenefits('prev')}
            aria-label="Previous"
            disabled={benefitsIndex === 0}
          >
            {benefitsIndex > 0 ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="url(#paint0_linear_benefits_prev)"/>
                <path d="M16 9L11 14L16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_benefits_prev" x1="0" y1="14" x2="28" y2="14" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0663CD"/>
                    <stop offset="1" stopColor="#01AAFF"/>
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.3393" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <path d="M16 9L11 14L16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button
            className={`feature-nav__btn${benefitsIndex < Benefits.length - 1 ? ' feature-nav__btn--active' : ''}`}
            onClick={() => scrollBenefits('next')}
            aria-label="Next"
            disabled={benefitsIndex === Benefits.length - 1}
          >
            {benefitsIndex < Benefits.length - 1 ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.8393" fill="url(#paint0_linear_benefits_next)"/>
                <path d="M12 9L17 14L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_benefits_next" x1="0" y1="13.8393" x2="27.6786" y2="13.8393" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0663CD"/>
                    <stop offset="1" stopColor="#01AAFF"/>
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.8393" cy="13.8393" r="13.3393" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <path d="M12 9L17 14L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </section>

      <section className="section-shell content-section faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Have questions? We've got answers. Here are some of the most common queries about our Instagram Followers.
        </p>
        <FaqList items={faqItems} />
      </section>

      <Footer />
    </main>
  )
}

export default App
