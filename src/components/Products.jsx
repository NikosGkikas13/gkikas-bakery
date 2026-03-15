import { useState } from 'react'
import { products, categories } from '../data/products'
import { useLanguage } from '../context/LanguageContext'
import './Products.css'

function Products() {
  const { lang, t } = useLanguage()
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active)

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.products.h2}</h2>
          <p>{t.products.p}</p>
        </div>

        <div className="products__filters reveal">
          {categories.map(({ id, label, label_el }) => (
            <button
              key={id}
              className={`products__filter ${active === id ? 'products__filter--active' : ''}`}
              onClick={() => setActive(id)}
            >
              {lang === 'el' ? label_el : label}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((product) => (
            <article key={product.id} className="product-card reveal">
              <div className="product-card__image">
                <span>{product.emoji}</span>
              </div>
              <div className="product-card__body">
                <span className="product-card__category">{product.category}</span>
                <h3>{lang === 'el' ? product.name_el : product.name}</h3>
                <p>{lang === 'el' ? product.description_el : product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">&euro;{product.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
