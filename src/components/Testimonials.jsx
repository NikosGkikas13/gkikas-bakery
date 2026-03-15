import { testimonials } from '../data/testimonials'
import Icon from './Icon'
import { useLanguage } from '../context/LanguageContext'
import '../css/Testimonials.css'

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
  const { lang, t } = useLanguage()
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.testimonials.h2}</h2>
          <p>{t.testimonials.p}</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card reveal">
              <Icon name="quote" size={32} className="testimonial-card__quote" />
              <p>{lang === 'el' ? item.text_el : item.text}</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <StarRating rating={item.rating} />
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
