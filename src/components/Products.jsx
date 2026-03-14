import { useState } from 'react'
import { products, categories } from '../data/products'
import './Products.css'

function Products() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active)

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Our Signature Bakes</h2>
          <p>Each creation is a celebration of flavor, crafted with the finest ingredients and decades of expertise.</p>
        </div>

        <div className="products__filters reveal">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`products__filter ${active === id ? 'products__filter--active' : ''}`}
              onClick={() => setActive(id)}
            >
              {label}
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
                <h3>{product.name}</h3>
                <p>{product.description}</p>
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
