import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'

/** Subcategory tile shown inside a main category page. */
export default function SubcategoryCard({ subcategory, to, productCount }) {
  return (
    <Link className="subcategory-card" to={to}>
      <div className="subcategory-media">
        <ProductImage
          className="subcategory-img"
          src={subcategory.image}
          alt={`${subcategory.name} collection`}
        />
      </div>
      <div className="subcategory-body">
        <h3 className="subcategory-name">{subcategory.name}</h3>
        <p className="subcategory-desc">{subcategory.description}</p>
        <span className="subcategory-meta">
          {productCount} {productCount === 1 ? 'style' : 'styles'}
          <span className="subcategory-cta" aria-hidden="true">
            Explore
          </span>
        </span>
      </div>
    </Link>
  )
}
