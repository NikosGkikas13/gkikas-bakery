import Icon from './Icon'
import './Contact.css'

const HOURS = [
  { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
  { day: 'Sunday', time: '8:00 AM - 6:00 PM' },
]

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Visit Us</h2>
          <p>We'd love to see you. Come by for a fresh loaf, a warm pastry, or just a friendly chat.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <div className="contact__card">
              <Icon name="location" size={22} className="contact__icon" />
              <div>
                <h4>Address</h4>
                <p>42 Artisan Lane<br />Kolonaki, Athens 10674</p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="phone" size={22} className="contact__icon" />
              <div>
                <h4>Phone</h4>
                <p>+30 210 123 4567</p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="mail" size={22} className="contact__icon" />
              <div>
                <h4>Email</h4>
                <p>hello@gkikasbakery.com</p>
              </div>
            </div>

            <div className="contact__card">
              <Icon name="clock" size={22} className="contact__icon" />
              <div>
                <h4>Opening Hours</h4>
                <ul className="contact__hours">
                  {HOURS.map(({ day, time }) => (
                    <li key={day}>
                      <span>{day}</span>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="contact__map reveal">
            <div className="contact__map-placeholder">
              <Icon name="location" size={48} />
              <span>Map placeholder</span>
              <p>42 Artisan Lane, Kolonaki, Athens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
