import Icon from './Icon'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { name: 'instagram', label: 'Instagram', href: '#' },
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'github', label: 'GitHub', href: '#' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo">
            <Icon name="wheat" size={28} />
            <span>Gkikas Bakery</span>
          </div>
          <p>Artisan breads, pastries, and cakes baked fresh daily with love and tradition since 1987.</p>
        </div>

        <div className="footer__nav">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <Icon name="location" size={18} />
              <span>42 Artisan Lane, Athens</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>+30 210 123 4567</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <span>hello@gkikasbakery.com</span>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="footer__social-links">
            {SOCIALS.map(({ name, label, href }) => (
              <a key={name} href={href} aria-label={label}>
                <Icon name={name} size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gkikas Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
