import { useEffect, useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'

const navItems = [
  {
    label: 'TIKTOK',
    links: ['Buy TikTok Followers', 'Buy TikTok Likes', 'Buy TikTok Views', 'Buy TikTok Comments'],
  },
  {
    label: 'INSTAGRAM',
    links: ['Buy Instagram Followers', 'Buy Instagram Likes', 'Buy Instagram Views', 'Buy Instagram Comments'],
  },
  {
    label: 'YOUTUBE',
    links: ['Buy YouTube Subscribers', 'Buy YouTube Views', 'Buy YouTube Likes', 'Buy YouTube Comments', 'Buy YouTube Watch Hours'],
  },
  {
    label: 'FACEBOOK',
    links: ['Buy Facebook Page Likes', 'Buy Facebook Post Likes', 'Buy Facebook Views', 'Buy Facebook Shares'],
  },
  {
    label: 'TWITTER (X)',
    links: ['Buy Twitter Followers', 'Buy Twitter Retweets', 'Buy Twitter Likes', 'Buy Twitter Views', 'Buy Threads Followers', 'Buy Threads Likes'],
  },
  {
    label: 'TWITCH',
    links: ['Buy Twitch Followers', 'Buy Twitch Clip Views', 'Buy Spotify Followers', 'Buy Spotify Plays', 'Buy Spotify Saves'],
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const backdropRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const drawerHeaderRef = useRef<HTMLDivElement>(null)
  const drawerNavRef = useRef<HTMLElement>(null)
  const drawerLoginRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', menuOpen)

    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [menuOpen])

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 8)

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  useEffect(() => {
    if (!drawerRef.current || !backdropRef.current) {
      return
    }

    const links = drawerNavRef.current
      ? Array.from(drawerNavRef.current.querySelectorAll<HTMLElement>('.site-navbar__drawer-link'))
      : []
    const animatedItems = [drawerHeaderRef.current, ...links, drawerLoginRef.current].filter(Boolean)

    if (menuOpen) {
      gsap.set(animatedItems, {
        y: 24,
        autoAlpha: 0,
      })

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      timeline
        .to(menuButtonRef.current, {
          scale: 1.04,
          duration: 0.22,
        }, 0)
        .to(animatedItems, {
          y: 0,
          autoAlpha: 1,
          duration: 0.34,
          stagger: 0.06,
        }, 0.12)

      return () => {
        timeline.kill()
      }
    } else {
      gsap.set(animatedItems, {
        clearProps: 'all',
      })

      gsap.to(menuButtonRef.current, {
        scale: 1,
        duration: 0.22,
        ease: 'power3.out',
      })
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-navbar section-shell${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="site-navbar__inner">
        <a href="/" className="site-navbar__brand" aria-label="Eagle Likes home">
          <img className="site-navbar__logo" src="/logo.png" alt="" aria-hidden="true" />
        </a>

        <div className="site-navbar__mobile-rating" aria-label="Rated 5.0 out of 5">
          <span className="site-navbar__mobile-score">5.0</span>
          <div className="site-navbar__mobile-stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <img key={index} src="/navstar.svg" alt="" />
            ))}
          </div>
        </div>

        <nav className="site-navbar__nav" aria-label="Primary">
          {navItems.map((item) => (
            <div key={item.label} className="site-navbar__nav-item">
              <a href={item.href ?? '/'} className="site-navbar__link">
                <span>{item.label}</span>
                {item.links ? <FiChevronDown className="site-navbar__caret" aria-hidden="true" /> : null}
              </a>
              {item.links ? (
                <div className="site-navbar__dropdown">
                  <div className="site-navbar__dropdown-panel">
                    {item.links.map((link) => (
                      <a key={link} href="/" className="site-navbar__dropdown-link">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button className="site-navbar__login" type="button">
          <span className="site-navbar__login-icon" aria-hidden="true">
            <img src="/svgs/profileIcon.png" alt="" />
          </span>
          <span>Login</span>
        </button>

        <button
          className="site-navbar__menu"
          type="button"
          ref={menuButtonRef}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className={`site-navbar__menu-icon${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <button
        className={`site-navbar__drawer-backdrop${menuOpen ? ' is-open' : ''}`}
        type="button"
        ref={backdropRef}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-navigation-drawer"
        className={`site-navbar__drawer${menuOpen ? ' is-open' : ''}`}
        ref={drawerRef}
        aria-hidden={!menuOpen}
      >
        <div ref={drawerHeaderRef} className="site-navbar__drawer-header">
          <img className="site-navbar__drawer-logo" src="/logo.png" alt="Eagle Likes" />
          <button
            className="site-navbar__drawer-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <span className={`site-navbar__menu-icon is-drawer-close${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav ref={drawerNavRef} className="site-navbar__drawer-nav" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href ?? '/'} className="site-navbar__drawer-link" onClick={closeMenu}>
              <span>{item.label}</span>
              {item.links ? <FiChevronDown className="site-navbar__drawer-caret" aria-hidden="true" /> : null}
            </a>
          ))}
        </nav>

        <button
          ref={drawerLoginRef}
          className="site-navbar__drawer-login"
          type="button"
          onClick={closeMenu}
        >
          <span className="site-navbar__login-icon" aria-hidden="true">
            <img src="/svgs/profileIcon.png" alt="" />
          </span>
          <span>Login</span>
        </button>
      </aside>
    </header>
  )
}
