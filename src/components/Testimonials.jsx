import { testimonials } from '../data/testimonials'
import Icon from './Icon'
import './Testimonials.css'

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name={i < rating ? 'star' : 'star-empty'}
          size={16}
          className="star-rating__star"
        />
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header reveal">
          <h2>What Our Customers Say</h2>
          <p>Kind words from the people who make it all worthwhile.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card reveal">
              <Icon name="quote" size={32} className="testimonial-card__quote" />
              <p>{t.text}</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
