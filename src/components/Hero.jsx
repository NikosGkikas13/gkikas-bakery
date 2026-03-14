import Icon from './Icon'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content container">
        <span className="hero__badge">Est. 1987 &middot; Athens, Greece</span>
        <h1>Baked with Love,<br />Crafted by Hand</h1>
        <p className="hero__tagline">
          From our stone ovens to your table — artisan breads, golden pastries,
          and celebration cakes made the way they should be.
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn-primary">
            Explore Our Bakes
            <Icon name="arrow-right" size={20} />
          </a>
          <a href="#menu" className="btn btn-secondary hero__btn-secondary">
            View Menu
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
