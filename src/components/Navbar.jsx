import { useState, useEffect } from 'react'
import Icon from './Icon'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const NAV_KEYS = [
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'menu', href: '#menu' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reviews', href: '#testimonials' },
  { key: 'contact', href: '#contact' },
]

function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="navbar__lang">
      <button
        className={`navbar__lang-btn ${lang === 'el' ? 'navbar__lang-btn--active' : ''}`}
        onClick={() => setLang('el')}
        aria-label="Ελληνικά"
      >
        ΕΛ
      </button>
      <span className="navbar__lang-sep" aria-hidden="true">|</span>
      <button
        className={`navbar__lang-btn ${lang === 'en' ? 'navbar__lang-btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}

function Navbar({ activeSection }) {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <Icon name="wheat" size={28} />
          <span>Gkikas Bakery</span>
        </a>

        <ul className="navbar__links">
          {NAV_KEYS.map(({ key, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <LangSwitcher />
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-backdrop" onClick={() => setMenuOpen(false)}>
          <div className="navbar__mobile" onClick={e => e.stopPropagation()}>
            <ul>
              {NAV_KEYS.map(({ key, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
