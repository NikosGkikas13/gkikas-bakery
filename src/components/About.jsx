import { useLanguage } from '../context/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="about section">
      <div className="about__inner container">
        <div className="about__image reveal">
          <div className="about__image-placeholder">
            <span>🏠</span>
          </div>
        </div>
        <div className="about__content reveal">
          <span className="about__label">{t.about.label}</span>
          <h2>{t.about.h2}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="about__stats">
            <div className="about__stat">
              <strong>{t.about.stat1Value}</strong>
              <span>{t.about.stat1Label}</span>
            </div>
            <div className="about__stat">
              <strong>{t.about.stat2Value}</strong>
              <span>{t.about.stat2Label}</span>
            </div>
            <div className="about__stat">
              <strong>{t.about.stat3Value}</strong>
              <span>{t.about.stat3Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
