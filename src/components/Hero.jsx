import Icon from './Icon'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  return (
    <section id="hero" className="hero">
      <div className="hero__content container">
        <span className="hero__badge">{t.hero.badge}</span>
        <h1>
          {t.hero.h1a}
          <br />
          {t.hero.h1b}
        </h1>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <div className="hero__actions">
          <a href="#products" className="btn btn-primary">
            {t.hero.cta1}
            <Icon name="arrow-right" size={20} />
          </a>
          <a href="#menu" className="btn btn-secondary hero__btn-secondary">
            {t.hero.cta2}
          </a>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <Icon name="chevron-down" size={24} />
      </a>
    </section>
  )
}

export default Hero
