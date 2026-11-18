import { categories } from '../data/categories'
import CategoryCard from './CategoryCard'

/**
 * The three main collections. Each card opens that category's own page,
 * which lists only its own subcategories.
 */
export default function CategorySection() {
  return (
    <section
      className="section section--collections"
      id="collections"
      aria-labelledby="collections-title"
    >
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Three Distinct Collections</p>
          <h2 className="section-title" id="collections-title">
            Explore Our Collections
          </h2>
          <p className="lede">
            Every collection is its own range, styled for its own occasion &mdash; choose the
            one that fits the moment.
          </p>
        </header>

        <div className="cards-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
