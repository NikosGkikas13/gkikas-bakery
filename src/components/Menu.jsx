import { menuCategories } from '../data/menu'
import './Menu.css'

function Menu() {
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Our Menu</h2>
          <p>From morning loaves to afternoon treats, everything is baked fresh daily.</p>
        </div>

        <div className="menu__grid">
          {menuCategories.map((category) => (
            <div key={category.title} className="menu__category reveal">
              <div className="menu__category-header">
                <span className="menu__category-emoji">{category.emoji}</span>
                <h3>{category.title}</h3>
              </div>
              <ul className="menu__items">
                {category.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <span className="menu__item-name">{item.name}</span>
                    <span className="menu__item-dots"></span>
                    <span className="menu__item-price">&euro;{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
