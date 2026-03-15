import { menuCategories } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'
import './Menu.css'

function Menu() {
  const { lang, t } = useLanguage()
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="section-header reveal">
          <h2>{t.menu.h2}</h2>
          <p>{t.menu.p}</p>
        </div>

        <div className="menu__grid">
          {menuCategories.map((category) => (
            <div key={category.title} className="menu__category reveal">
              <div className="menu__category-header">
                <span className="menu__category-emoji">{category.emoji}</span>
                <h3>{lang === 'el' ? category.title_el : category.title}</h3>
              </div>
              <ul className="menu__items">
                {category.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <span className="menu__item-name">
                      {lang === 'el' ? item.name_el : item.name}
                    </span>
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
