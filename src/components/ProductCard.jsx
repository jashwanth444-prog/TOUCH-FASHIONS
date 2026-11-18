import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import { formatPrice } from '../data/products'

/** A product tile: the whole card is a link to the product details page. */
export default function ProductCard({ product, to }) {
  return (
    <Link className="product-card" to={to} aria-label={`${product.name}, ${formatPrice(product.price)}`}>
      <div className="product-media">
        <ProductImage className="product-img" src={product.image} alt={product.name} />
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <span className="product-cta">View Details</span>
      </div>
    </Link>
  )
}
