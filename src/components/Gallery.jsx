import { useLanguage } from '../context/LanguageContext'
import './Gallery.css'

const GALLERY_ITEMS = [
  { emoji: '🥖', tall: true },
  { emoji: '🥐' },
  { emoji: '🎂' },
  { emoji: '🫓' },
  { emoji: '🏠', tall: true },
  { emoji: '🥧' },
  { emoji: '🍪' },
  { emoji: '🧁' },
]

function Gallery() {
  const { t } = useLanguage()
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.gallery.h2}</h2>
          <p>{t.gallery.p}</p>
        </div>

        <div className="gallery__grid reveal">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery__item ${item.tall ? 'gallery__item--tall' : ''}`}
            >
              <div className="gallery__placeholder">
                <span>{item.emoji}</span>
              </div>
              <div className="gallery__overlay">
                <span>{t.gallery.items[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
