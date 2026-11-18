import ProductCard from './ProductCard'

/**
 * Responsive product grid: two per row on phones, three on tablets,
 * four on laptops and desktops (handled in CSS).
 */
export default function ProductGrid({ products, buildHref, emptyMessage }) {
  if (!products.length) {
    return <p className="grid-empty">{emptyMessage || 'No products in this collection yet.'}</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} to={buildHref(product)} />
      ))}
    </div>
  )
}
