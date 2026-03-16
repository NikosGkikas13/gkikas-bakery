import { useLanguage } from '../context/LanguageContext'
import '../css/Testimonials.css'

function Testimonials() {
  const { t } = useLanguage()
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="elfsight-app-4775f8f7-7a9e-48a3-a2dc-d98ba5f257b7" data-elfsight-app-lazy />
      </div>
    </section>
  )
}

export default Testimonials
