import Icon from "./Icon";
import { useLanguage } from "../context/LanguageContext";
import "../css/Footer.css";

const NAV_KEYS = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "menu", href: "#menu" },
  { key: "gallery", href: "#gallery" },
  { key: "reviews", href: "#testimonials" },
  { key: "contact", href: "#contact" },
];

const SOCIALS = [
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/gkikas_bakehouse/",
  },
  {
    name: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100074956521804",
  },
];

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo">
            <Icon name="wheat" size={28} />
            <span>Gkikas Bakery</span>
          </div>
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer__nav">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            {NAV_KEYS.map(({ key, href }) => (
              <li key={href}>
                <a href={href}>{t.nav[key]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>{t.footer.getInTouch}</h4>
          <ul>
            <li>
              <Icon name="location" size={18} />
              <span>Dimokratias 41, Marathonas 19007</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>22940-67557</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href="mailto:fournosgkika@gmail.com">fournosgkika@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h4>{t.footer.followUs}</h4>
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
          <p>
            &copy; {new Date().getFullYear()} Gkikas Bakery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
