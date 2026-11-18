/**
 * DEMO CATALOGUE
 * ==============
 * These are demonstration products for development. They are not real shop
 * inventory, prices or stock.
 *
 * Every product belongs to exactly one main category and one subcategory, so a
 * casual product can never appear in a formal or sports collection.
 *
 * - `sizeSet` maps to the central sets in src/data/sizes.js
 * - `colours` must use names from `colourSwatches` below
 * - `image` is 4:5; replace the file in /public/assets/products to update it
 */

/** Interface-safe swatch values for the colour selector. */
export const colourSwatches = {
  Black: '#000000',
  White: '#ffffff',
  'Navy Blue': '#1b2a4a',
  Grey: '#8a8a8a',
  Olive: '#5a5f3a',
  Maroon: '#5a1f2b',
  Beige: '#d9cbb5',
}

export function getColourSwatch(name) {
  return colourSwatches[name] ?? '#000000'
}

const demo = (categoryId, subcategoryId, index, name, price, colours, sizeSet, description) => ({
  id: `${subcategoryId}-${index}`,
  slug: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  name,
  categoryId,
  subcategoryId,
  price,
  colours,
  sizeSet,
  // Every subcategory has one correct garment photograph, saved as
  // `<subcategory>-1.jpg`, plus a tighter second framing `<subcategory>-2.jpg`.
  // Products alternate between those two framings, so a card can never show a
  // different garment from a different collection.
  image: `/assets/products/${subcategoryId}-${index % 2 === 1 ? 1 : 2}.jpg`,
  description,
})

export const products = [
  // ---------------- CASUAL WEAR ----------------
  demo('casual-wear', 'shirts', 1, 'Classic Casual Shirt', 1299, ['Black', 'White', 'Navy Blue'], 'shirt',
    'A clean, easy-fitting casual shirt with a soft collar and a relaxed drape.'),
  demo('casual-wear', 'shirts', 2, 'Linen Blend Casual Shirt', 1599, ['Beige', 'Olive', 'White'], 'shirt',
    'Light linen blend shirt with a breathable feel for warm days.'),
  demo('casual-wear', 'shirts', 3, 'Checked Casual Shirt', 1399, ['Navy Blue', 'Maroon', 'Grey'], 'shirt',
    'A subtle checked pattern on a comfortable everyday shirt.'),
  demo('casual-wear', 'shirts', 4, 'Denim Casual Shirt', 1499, ['Navy Blue', 'Grey'], 'shirt',
    'Soft-washed denim shirt that layers well over tees.'),

  demo('casual-wear', 't-shirts', 1, 'Premium Cotton T-Shirt', 799, ['Black', 'White', 'Grey', 'Olive'], 'tshirt',
    'Combed cotton tee with a clean neckline and a comfortable fit.'),
  demo('casual-wear', 't-shirts', 2, 'Crew Neck T-Shirt', 649, ['Black', 'White', 'Navy Blue'], 'tshirt',
    'Everyday crew neck tee in a smooth, mid-weight cotton.'),
  demo('casual-wear', 't-shirts', 3, 'Relaxed Fit T-Shirt', 899, ['Grey', 'Olive', 'Maroon'], 'tshirt',
    'A relaxed cut with dropped shoulders and a soft hand feel.'),
  demo('casual-wear', 't-shirts', 4, 'Printed Graphic T-Shirt', 749, ['Black', 'White', 'Maroon'], 'tshirt',
    'Graphic tee with a minimal print and a classic straight fit.'),

  demo('casual-wear', 'jeans', 1, 'Slim Fit Jeans', 1899, ['Navy Blue', 'Black', 'Grey'], 'jeans',
    'Slim fit denim with a touch of stretch for all-day comfort.'),
  demo('casual-wear', 'jeans', 2, 'Straight Fit Jeans', 1799, ['Navy Blue', 'Black'], 'jeans',
    'A straight leg cut that sits cleanly over everyday shoes.'),
  demo('casual-wear', 'jeans', 3, 'Relaxed Fit Jeans', 1699, ['Navy Blue', 'Grey', 'Beige'], 'jeans',
    'Roomy through the leg with a comfortable mid-rise waist.'),
  demo('casual-wear', 'jeans', 4, 'Stretch Denim Jeans', 2099, ['Black', 'Navy Blue'], 'jeans',
    'Flexible stretch denim that holds its shape through the day.'),

  demo('casual-wear', 'pants', 1, 'Casual Chino Pants', 1499, ['Beige', 'Olive', 'Navy Blue'], 'waist',
    'Classic chinos with a clean front and an easy tapered leg.'),
  demo('casual-wear', 'pants', 2, 'Cotton Casual Pants', 1399, ['Black', 'Grey', 'Beige'], 'waist',
    'Breathable cotton trousers cut for everyday wear.'),
  demo('casual-wear', 'pants', 3, 'Relaxed Fit Trousers', 1599, ['Navy Blue', 'Olive'], 'waist',
    'A relaxed trouser with a soft waistband and straight leg.'),
  demo('casual-wear', 'pants', 4, 'Everyday Casual Pants', 1349, ['Black', 'Grey'], 'waist',
    'Simple, hard-wearing pants that pair with almost anything.'),

  demo('casual-wear', 'shorts', 1, 'Cotton Casual Shorts', 899, ['Black', 'Beige', 'Olive'], 'shorts',
    'Soft cotton shorts with an elastic back and side pockets.'),
  demo('casual-wear', 'shorts', 2, 'Linen Blend Shorts', 999, ['Beige', 'White', 'Grey'], 'shorts',
    'Lightweight linen blend shorts for warm afternoons.'),
  demo('casual-wear', 'shorts', 3, 'Cargo Casual Shorts', 1199, ['Olive', 'Black', 'Beige'], 'shorts',
    'Utility pockets and a comfortable, slightly relaxed cut.'),
  demo('casual-wear', 'shorts', 4, 'Printed Casual Shorts', 849, ['Navy Blue', 'Maroon'], 'shorts',
    'A subtle print on a quick-drying everyday short.'),

  // ---------------- FORMAL WEAR ----------------
  demo('formal-wear', 'formal-shirts', 1, 'Classic Formal Shirt', 1499, ['White', 'Black', 'Navy Blue'], 'shirt',
    'Crisp formal shirt with a structured collar and a clean placket.'),
  demo('formal-wear', 'formal-shirts', 2, 'Premium Cotton Formal Shirt', 1699, ['White', 'Grey', 'Beige'], 'shirt',
    'Fine cotton shirt with a smooth finish for long working days.'),
  demo('formal-wear', 'formal-shirts', 3, 'Slim Fit Formal Shirt', 1599, ['White', 'Navy Blue', 'Black'], 'shirt',
    'A tailored slim cut that sits neatly under a blazer.'),
  demo('formal-wear', 'formal-shirts', 4, 'Wrinkle Resistant Formal Shirt', 1799, ['White', 'Grey'], 'shirt',
    'A wrinkle-resistant weave that stays sharp through travel.'),

  demo('formal-wear', 'formal-pants', 1, 'Formal Office Pants', 1799, ['Black', 'Navy Blue', 'Grey'], 'waist',
    'Tailored office trousers with a pressed crease and clean drape.'),
  demo('formal-wear', 'formal-pants', 2, 'Slim Fit Formal Trousers', 1899, ['Black', 'Navy Blue'], 'waist',
    'Slim formal trousers with a flat front and a sharp line.'),
  demo('formal-wear', 'formal-pants', 3, 'Tailored Formal Pants', 1999, ['Grey', 'Navy Blue', 'Black'], 'waist',
    'A refined tailored fit for meetings and formal occasions.'),
  demo('formal-wear', 'formal-pants', 4, 'Classic Dress Pants', 1749, ['Black', 'Beige'], 'waist',
    'Classic dress trousers with a comfortable, straight leg.'),

  demo('formal-wear', 'blazers', 1, 'Single Breasted Blazer', 4299, ['Navy Blue', 'Black', 'Grey'], 'blazer',
    'A single-breasted blazer with notch lapels and a clean finish.'),
  demo('formal-wear', 'blazers', 2, 'Slim Fit Suit Jacket', 4999, ['Navy Blue', 'Black'], 'blazer',
    'Structured shoulders and a slim cut for a sharp silhouette.'),
  demo('formal-wear', 'blazers', 3, 'Textured Formal Blazer', 4599, ['Grey', 'Navy Blue'], 'blazer',
    'A lightly textured weave that lifts an otherwise simple outfit.'),
  demo('formal-wear', 'blazers', 4, 'Classic Navy Blazer', 4799, ['Navy Blue', 'Black'], 'blazer',
    'The dependable navy blazer, cut for both office and evening.'),

  demo('formal-wear', 'office-wear', 1, 'Complete Office Suit', 6999, ['Navy Blue', 'Black'], 'office',
    'A matching jacket and trouser set for a complete office look.'),
  demo('formal-wear', 'office-wear', 2, 'Office Shirt and Trouser Set', 3499, ['White', 'Navy Blue'], 'office',
    'A coordinated shirt and trouser pairing for the working week.'),
  demo('formal-wear', 'office-wear', 3, 'Business Formal Set', 5499, ['Black', 'Grey'], 'office',
    'A business-ready set with a structured jacket and pressed trousers.'),
  demo('formal-wear', 'office-wear', 4, 'Professional Office Outfit', 4299, ['Navy Blue', 'Grey'], 'office',
    'A polished, professional outfit built for daily wear.'),

  // ---------------- SPORTS WEAR ----------------
  demo('sports-wear', 'sports-t-shirts', 1, "Men's Sports T-Shirt", 899, ['Black', 'Grey', 'Navy Blue'], 'sportstshirt',
    'Lightweight training tee with a breathable, quick-dry finish.'),
  demo('sports-wear', 'sports-t-shirts', 2, 'Quick Dry Training T-Shirt', 999, ['Black', 'Olive', 'Grey'], 'sportstshirt',
    'Fast-drying fabric that moves with you through a session.'),
  demo('sports-wear', 'sports-t-shirts', 3, 'Breathable Gym T-Shirt', 849, ['Black', 'Navy Blue', 'Maroon'], 'sportstshirt',
    'Airy mesh panels keep this gym tee cool under effort.'),
  demo('sports-wear', 'sports-t-shirts', 4, 'Performance Sports Tee', 1099, ['Grey', 'Black', 'Navy Blue'], 'sportstshirt',
    'A performance cut with flat seams to reduce chafing.'),

  demo('sports-wear', 'track-pants', 1, 'Comfortable Track Pants', 1299, ['Black', 'Navy Blue', 'Grey'], 'track',
    'Easy track pants with an elastic waist and tapered leg.'),
  demo('sports-wear', 'track-pants', 2, 'Slim Fit Track Pants', 1399, ['Black', 'Olive'], 'track',
    'A slimmer track pant that still moves freely.'),
  demo('sports-wear', 'track-pants', 3, 'Quick Dry Track Pants', 1499, ['Grey', 'Navy Blue', 'Black'], 'track',
    'Lightweight quick-dry fabric for training and travel.'),
  demo('sports-wear', 'track-pants', 4, 'Tapered Training Pants', 1349, ['Black', 'Maroon'], 'track',
    'Tapered training pants with zip pockets and a soft lining.'),

  demo('sports-wear', 'tracksuits', 1, 'Classic Tracksuit Set', 2499, ['Black', 'Navy Blue'], 'tracksuit',
    'A matching jacket and pant set in a smooth, easy fabric.'),
  demo('sports-wear', 'tracksuits', 2, 'Fleece Lined Tracksuit', 2899, ['Grey', 'Black'], 'tracksuit',
    'Warm fleece lining for early training sessions and travel.'),
  demo('sports-wear', 'tracksuits', 3, 'Lightweight Sports Tracksuit', 2699, ['Navy Blue', 'Olive'], 'tracksuit',
    'A light, packable tracksuit for warm-ups and cool-downs.'),
  demo('sports-wear', 'tracksuits', 4, 'Everyday Tracksuit Set', 2299, ['Black', 'Grey'], 'tracksuit',
    'An everyday tracksuit with a relaxed fit and clean lines.'),

  demo('sports-wear', 'sports-shorts', 1, 'Sports Training Shorts', 749, ['Black', 'Grey', 'Navy Blue'], 'sportsshorts',
    'Light training shorts with a drawcord waist and side splits.'),
  demo('sports-wear', 'sports-shorts', 2, 'Running Shorts', 699, ['Black', 'Navy Blue'], 'sportsshorts',
    'Featherweight running shorts with a breathable inner brief.'),
  demo('sports-wear', 'sports-shorts', 3, 'Activewear Shorts', 799, ['Grey', 'Olive', 'Black'], 'sportsshorts',
    'Stretch activewear shorts built for gym and field sessions.'),
  demo('sports-wear', 'sports-shorts', 4, 'Lightweight Sports Shorts', 649, ['Black', 'Maroon'], 'sportsshorts',
    'A simple, quick-drying short for everyday activity.'),
]

/** All products that belong to one subcategory of one main category. */
export function productsInSubcategory(categoryId, subcategoryId) {
  return products.filter(
    (product) =>
      product.categoryId === categoryId && product.subcategoryId === subcategoryId,
  )
}

/** Look up a single product by its category, subcategory and product slug. */
export function findProduct(categoryId, subcategoryId, productSlug) {
  return (
    products.find(
      (product) =>
        product.categoryId === categoryId &&
        product.subcategoryId === subcategoryId &&
        product.slug === productSlug,
    ) ?? null
  )
}

/** Indian Rupee formatting, e.g. 1299 -> "₹1,299". */
export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`
}
