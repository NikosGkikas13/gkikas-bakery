import Icon from './Icon'
import { useLanguage } from '../context/LanguageContext'
import '../css/Contact.css'

const HOUR_INDICES = [0, 1, 2, 3, 4, 5, 6]
const TIME = '06:00 - 20:30'

function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.contact.h2}</h2>
          <p>{t.contact.p}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <div className="contact__card">
              <Icon name="location" size={22} className="contact__icon" />
              <div>
                <h4>{t.contact.address}</h4>
                <p>
                  <a href="https://maps.google.com/?q=Dimokratias+41,+Marathonas+19007" target="_blank" rel="noopener noreferrer">
                    Dimokratias 41<br />Marathonas 19007
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="phone" size={22} className="contact__icon" />
              <div>
                <h4>{t.contact.phone}</h4>
                <p><a href="tel:+302294067557">22940-67557</a></p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="mail" size={22} className="contact__icon" />
              <div>
                <h4>{t.contact.email}</h4>
                <p>
                  <a href="mailto:fournosgkika@gmail.com">
                    fournosgkika@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="clock" size={22} className="contact__icon" />
              <div>
                <h4>{t.contact.hours}</h4>
                <ul className="contact__hours">
                  {HOUR_INDICES.map((i) => (
                    <li key={i}>
                      <span>{t.contact.days[i]}</span>
                      <span>{TIME}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="contact__map reveal">
            <iframe
              className="contact__map-embed"
              title="Gkikas Bakery location"
              src="https://maps.google.com/maps?q=4XX8%2BM8+Marathon&output=embed&z=16"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
