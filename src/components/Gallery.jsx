import './Gallery.css'

const GALLERY_ITEMS = [
  { emoji: '\uD83C\uDF5E', label: 'Fresh sourdough loaves', tall: true },
  { emoji: '\uD83E\uDD50', label: 'Golden croissants' },
  { emoji: '\uD83C\uDF82', label: 'Decorated celebration cake' },
  { emoji: '\uD83E\uDED3', label: 'Artisan bread selection' },
  { emoji: '\uD83C\uDFE0', label: 'Our bakery interior', tall: true },
  { emoji: '\uD83E\uDD67', label: 'Fresh fruit tarts' },
  { emoji: '\uD83C\uDF6A', label: 'Cookies cooling on rack' },
  { emoji: '\uD83E\uDDC1', label: 'Morning pastry basket' },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-header reveal">
          <h2>From Our Ovens</h2>
          <p>A peek inside our kitchen and the creations that come out of it every day.</p>
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
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
