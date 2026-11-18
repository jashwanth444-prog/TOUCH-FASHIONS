import { useParams } from 'react-router-dom'
import { findCategory, findSubcategory } from '../data/categories'
import { productsInSubcategory } from '../data/products'
import BackButton from '../components/BackButton'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductGrid from '../components/ProductGrid'
import NotFound from './NotFound'

/**
 * Product collection page: only products from this category and subcategory.
 */
export default function CollectionPage() {
  const { categorySlug, subcategorySlug } = useParams()
  const category = findCategory(categorySlug)
  const subcategory = findSubcategory(category, subcategorySlug)

  if (!category || !subcategory) return <NotFound />

  const collection = productsInSubcategory(category.id, subcategory.id)

  return (
    <div className="page">
      <section className="page-head page-head--dark">
        <div className="container">
          <BackButton to={`/${category.slug}`} label={`Back to ${category.shortName}`} />
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: category.shortName, to: `/${category.slug}` },
              { label: subcategory.name },
            ]}
          />
          <p className="eyebrow">{category.shortName}</p>
          <h1 className="page-title">
            {subcategory.name} <span className="page-title-sub">Collection</span>
          </h1>
          <p className="lede">{subcategory.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="collection-bar">
            <p className="collection-count">
              {collection.length} demo {collection.length === 1 ? 'style' : 'styles'}
            </p>
          </div>

          <ProductGrid
            products={collection}
            buildHref={(product) => `/${category.slug}/${subcategory.slug}/${product.slug}`}
            emptyMessage="No products in this collection yet."
          />

          <p className="demo-note">
            Demonstration catalogue — these products and prices are samples, not live shop
            inventory.
          </p>
        </div>
      </section>
    </div>
  )
}
