import { useLanguage } from "../context/LanguageContext";
import aboutImg from "../assets/gkikas_bakehouse_1771680076_3837450841649627757_64959792227_1.jpg";
import "../css/About.css";

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about section">
      <div className="about__inner container">
        <div className="about__image reveal">
          <img src={aboutImg} alt="Gkikas Bakery" />
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
