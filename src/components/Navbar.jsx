import { useState, useEffect } from 'react'
import Icon from './Icon'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ activeSection }) {
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
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-backdrop" onClick={() => setMenuOpen(false)}>
          <div className="navbar__mobile" onClick={e => e.stopPropagation()}>
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
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
