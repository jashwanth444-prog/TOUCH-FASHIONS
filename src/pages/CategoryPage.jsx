import { useParams } from 'react-router-dom'
import { findCategory } from '../data/categories'
import { products } from '../data/products'
import BackButton from '../components/BackButton'
import Breadcrumbs from '../components/Breadcrumbs'
import SubcategoryCard from '../components/SubcategoryCard'
import NotFound from './NotFound'

/**
 * Main category page: shows ONLY the subcategories that belong to this
 * category, each opening its own product collection.
 */
export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = findCategory(categorySlug)

  if (!category) return <NotFound />

  const countFor = (subcategoryId) =>
    products.filter(
      (product) =>
        product.categoryId === category.id && product.subcategoryId === subcategoryId,
    ).length

  return (
    <div className="page">
      <section className="page-head page-head--dark">
        <div className="container">
          <BackButton to="/" label="Back to Home" />
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: category.shortName }]} />
          <p className="eyebrow">{category.shortName}</p>
          <h1 className="page-title">{category.name}</h1>
          <p className="lede">{category.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="subcategory-grid">
            {category.subcategories.map((subcategory) => (
              <SubcategoryCard
                key={subcategory.id}
                subcategory={subcategory}
                to={`/${category.slug}/${subcategory.slug}`}
                productCount={countFor(subcategory.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
