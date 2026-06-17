import { useState } from 'react'

const visaIcon = '/visa.png'
const mastercardIcon = '/master.png'
const amexIcon = '/americanexpress.png'
const applePayIcon = '/applepay.png'

const languages = ['EN', 'ES', 'FR']

export function Footer() {
  const [selectedLang, setSelectedLang] = useState('EN')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-nav">
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-main">
          <section className="footer-column">
            <h3>Instagram Services</h3>
            <ul>
              <li><a href="#ig-likes">Buy Instagram Likes</a></li>
              <li><a href="#ig-comments">Buy Instagram Comments</a></li>
              <li><a href="#ig-followers">Buy Instagram Followers</a></li>
              <li><a href="#ig-views">Buy Instagram Views</a></li>
            </ul>
          </section>

          <section className="footer-column">
            <h3>TikTok Services</h3>
            <ul>
              <li><a href="#tt-likes">Buy TikTok Likes</a></li>
              <li><a href="#tt-followers">Buy TikTok Followers</a></li>
              <li><a href="#tt-views">Buy TikTok Views</a></li>
            </ul>
          </section>

          <section className="footer-column">
            <h3>YouTube Services</h3>
            <ul>
              <li><a href="#yt-views">Buy YouTube Views</a></li>
              <li><a href="#yt-subscribers">Buy YouTube Subscribers</a></li>
              <li><a href="#yt-likes">Buy YouTube Likes</a></li>
            </ul>
          </section>

          <section className="footer-column">
            <h3>Tools & Resources</h3>
            <ul>
              <li><a href="#ig-video-dl">Instagram Video Downloader</a></li>
              <li><a href="#ig-profile-pic">Instagram Profile Picture Viewer</a></li>
              <li><a href="#ig-story-dl">Instagram Story Downloader</a></li>
              <li><a href="#ig-story-viewer">Instagram Story Viewer</a></li>
              <li><a href="#ig-followers-counter">Instagram Followers Counter</a></li>
              <li><a href="#ig-likes-trial">Free Instagram Likes Trial</a></li>
              <li><a href="#ig-followers-trial">Free Instagram Followers Trial</a></li>
            </ul>
          </section>

          <section className="footer-column footer-column--no-heading">
            <ul>
              <li><a href="#ig-story-viewer-2">Instagram Story Viewer</a></li>
              <li><a href="#twitter-video-dl">Twitter Video Downloader</a></li>
              <li><a href="#twitter-gif-dl">Twitter GIF Downloader</a></li>
              <li><a href="#tt-views-free">Free Tik Tok Views</a></li>
              <li><a href="#fb-video-dl">Facebook Video Downloader</a></li>
              <li><a href="#fb-reels-dl">Facebook Reels Downloader</a></li>
            </ul>
          </section>

          <section className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li><a href="#login">Log In</a></li>
              <li><a href="#signin">Sign In</a></li>
            </ul>
          </section>
        </div>

        <div className="footer-language">
          <div className="language-selector-wrapper">
            <button
              className="language-selector"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg className="language-selector__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{selectedLang}</span>
              <svg className="language-selector__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="language-dropdown">
                {languages.map(lang => (
                  <li key={lang}>
                    <button
                      type="button"
                      className={`language-dropdown__item${selectedLang === lang ? ' active' : ''}`}
                      onClick={() => { setSelectedLang(lang); setDropdownOpen(false) }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Eagle Likes, All Rights Reserved.</p>
          <div className="footer-payment-badges">
            <img src={visaIcon} alt="Visa" className="payment-badge" />
            <img src={mastercardIcon} alt="Mastercard" className="payment-badge" />
            <img src={amexIcon} alt="American Express" className="payment-badge payment-badge--amex" />
            <img src={applePayIcon} alt="Apple Pay" className="payment-badge" />
          </div>
        </div>
      </div>
    </footer>
  )
}
