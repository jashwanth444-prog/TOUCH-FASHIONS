import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { findCategory, findSubcategory } from '../data/categories'
import { findProduct, formatPrice } from '../data/products'
import { getSizeSet } from '../data/sizes'
import BackButton from '../components/BackButton'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductImage from '../components/ProductImage'
import SizeSelector from '../components/SizeSelector'
import ColourSelector from '../components/ColourSelector'
import WhatsAppEnquiry from '../components/WhatsAppEnquiry'
import NotFound from './NotFound'

/**
 * Product details: large photo, name, price, description, size and colour
 * selection, and the WhatsApp enquiry. Nothing is pre-selected, so the customer
 * always makes a deliberate choice before enquiring.
 */
export default function ProductDetailsPage() {
  const { categorySlug, subcategorySlug, productSlug } = useParams()
  const category = findCategory(categorySlug)
  const subcategory = findSubcategory(category, subcategorySlug)
  const product = findProduct(categorySlug, subcategorySlug, productSlug)

  const [size, setSize] = useState('')
  const [colour, setColour] = useState('')
  const [errors, setErrors] = useState({})

  if (!category || !subcategory || !product) return <NotFound />

  const sizeSet = getSizeSet(product.sizeSet)
  const collectionPath = `/${category.slug}/${subcategory.slug}`

  const chooseSize = (value) => {
    setSize(value)
    setErrors((prev) => ({ ...prev, size: undefined }))
  }

  const chooseColour = (value) => {
    setColour(value)
    setErrors((prev) => ({ ...prev, colour: undefined }))
  }

  const handleValidationError = (missing) => {
    const next = {}
    if (missing.includes('size')) next.size = 'Please select a size before sending your enquiry.'
    if (missing.includes('colour')) next.colour = 'Please select a colour before sending your enquiry.'
    setErrors(next)
  }

  return (
    <div className="page">
      <section className="product-page">
        <div className="container">
          <BackButton to={collectionPath} label={`Back to ${subcategory.name}`} />
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: category.shortName, to: `/${category.slug}` },
              { label: subcategory.name, to: collectionPath },
              { label: product.name },
            ]}
          />

          <div className="product-layout">
            <div className="product-gallery">
              <ProductImage
                className="product-detail-img"
                src={product.image}
                alt={product.name}
                priority
              />
            </div>

            <div className="product-info">
              <p className="eyebrow">
                {category.shortName} &middot; {subcategory.name}
              </p>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-detail-price">{formatPrice(product.price)}</p>
              <p className="product-description">{product.description}</p>

              <div className="product-selection">
                <SizeSelector
                  sizeSet={sizeSet}
                  value={size}
                  onChange={chooseSize}
                  error={errors.size}
                />
                <ColourSelector
                  colours={product.colours}
                  value={colour}
                  onChange={chooseColour}
                  error={errors.colour}
                />
              </div>

              <WhatsAppEnquiry
                product={product}
                categoryName={category.shortName}
                subcategoryName={subcategory.name}
                size={size}
                colour={colour}
                onValidationError={handleValidationError}
              />

              <p className="demo-note">
                Demonstration product — details, price and photograph are samples for
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
