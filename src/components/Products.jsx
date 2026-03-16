import { products } from '../data/products'
import { useLanguage } from '../context/LanguageContext'
import '../css/Products.css'

function Products() {
  const { lang, t } = useLanguage()

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.products.h2}</h2>
          <p>{t.products.p}</p>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <article key={product.id} className="product-card reveal">
              <div className="product-card__image">
                <span>{product.emoji}</span>
              </div>
              <div className="product-card__body">
                <h3>{lang === 'el' ? product.name_el : product.name}</h3>
                <p>{lang === 'el' ? product.description_el : product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
