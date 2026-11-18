/**
 * Central size configuration.
 *
 * Every product references one of these sets through `sizeSet`, so changing a
 * garment's sizes here updates every product that uses it. The `label` is shown
 * above the selector, so waist sizes never appear as a letter size.
 *
 * Size rules:
 *  - Shirts and T-Shirts: M, L, XL, XXL (no S or XS).
 *  - Pants, Formal Pants, Jeans and Track Pants: waist measurements 28-36
 *    (no letter sizes, no larger spread).
 *  - Shorts, Sports T-Shirts, Tracksuits, Sports Shorts, Blazers and Office
 *    Wear each get their own set suited to the garment.
 */
export const sizeSets = {
  // Casual and formal shirts: no S or XS.
  shirt: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'Shirts are sized M to XXL.',
  },
  // T-shirts and sports tees: no S or XS.
  tshirt: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'T-shirts are sized M to XXL.',
  },
  // Casual trousers, chinos and formal trousers: waist in inches.
  waist: {
    label: 'Waist',
    options: ['28', '30', '32', '34', '36'],
    note: 'Waist sizes in inches.',
  },
  // Casual shorts and sports shorts.
  shorts: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'Shorts are sized M to XXL.',
  },
  // Blazers and suit jackets: chest measurement in inches.
  blazer: {
    label: 'Chest',
    options: ['38', '40', '42', '44', '46'],
    note: 'Chest sizes in inches.',
  },
  // Denim: same waist scale as trousers, never letter sizes.
  jeans: {
    label: 'Waist',
    options: ['28', '30', '32', '34', '36'],
    note: 'Waist sizes in inches.',
  },
  // Track pants: waist in inches with an elasticated band.
  track: {
    label: 'Waist',
    options: ['28', '30', '32', '34', '36'],
    note: 'Waist sizes in inches.',
  },
  // Tracksuits: top size, matching the shirt/t-shirt scale.
  tracksuit: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'Tracksuits are sized M to XXL.',
  },
  // Sports shorts: slightly roomier cut, letter sizing.
  sportsshorts: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'Sports shorts are sized M to XXL.',
  },
  // Sports t-shirts: athletic cut, letter sizing.
  sportstshirt: {
    label: 'Size',
    options: ['M', 'L', 'XL', 'XXL'],
    note: 'Sports t-shirts are sized M to XXL.',
  },
  // Office wear: chest measurement, matching blazers.
  office: {
    label: 'Chest',
    options: ['38', '40', '42', '44', '46'],
    note: 'Chest sizes in inches.',
  },
}

/** Returns the size set for a key, or null when a product has no size choice. */
export function getSizeSet(key) {
  return sizeSets[key] ?? null
}