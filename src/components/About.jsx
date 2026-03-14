import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="about__inner container">
        <div className="about__image reveal">
          <div className="about__image-placeholder">
            <span>🏠</span>
          </div>
        </div>
        <div className="about__content reveal">
          <span className="about__label">Our Story</span>
          <h2>Three Generations of Baking Excellence</h2>
          <p>
            What started as a small family oven in 1987 has grown into a beloved
            neighborhood bakery — but our values haven't changed. Every loaf is
            still shaped by hand, every pastry layered with care, and every cake
            made to order.
          </p>
          <p>
            We source our flour from local mills, our butter from small dairies,
            and our honey from beekeepers we know by name. Because the best
            ingredients make the best bread — and you deserve nothing less.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <strong>35+</strong>
              <span>Years Baking</span>
            </div>
            <div className="about__stat">
              <strong>50+</strong>
              <span>Daily Recipes</span>
            </div>
            <div className="about__stat">
              <strong>10K+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
