/**
 * The three main men's collections and their subcategories.
 *
 * Each subcategory belongs to exactly one main category, and products
 * reference these ids, so a casual product can never appear in a formal
 * collection.
 *
 * Image paths point at full-colour photographs in /public/assets.
 */
export const categories = [
  {
    id: 'casual-wear',
    slug: 'casual-wear',
    name: 'CASUAL WEAR',
    shortName: 'Casual Wear',
    description: 'Everyday comfort with effortless style.',
    image: '/assets/images/casual.jpg',
    imageAlt: "Man wearing a full-colour denim jacket over a patterned shirt",
    // Cinematic card media. Stored locally in /public/videos.
    video: '/videos/casual-wear.mp4',
    poster: '/videos/casual-wear.jpg',
    videoAlt: 'Man in a denim jacket walking along a waterfront promenade',
    intro:
      'Relaxed, everyday pieces built around comfortable fits and clean, classic lines.',
    subcategories: [
      {
        id: 'shirts',
        slug: 'shirts',
        name: 'Shirts',
        description: 'Casual shirts for everyday wear.',
        image: '/assets/products/shirts-1.jpg',
      },
      {
        id: 't-shirts',
        slug: 't-shirts',
        name: 'T-Shirts',
        description: 'Easy cotton tees in everyday colours.',
        image: '/assets/products/t-shirts-1.jpg',
      },
      {
        id: 'jeans',
        slug: 'jeans',
        name: 'Jeans',
        description: 'Denim in slim, straight and relaxed fits.',
        image: '/assets/products/jeans-1.jpg',
      },
      {
        id: 'pants',
        slug: 'pants',
        name: 'Pants',
        description: 'Casual trousers and chinos.',
        image: '/assets/products/pants-1.jpg',
      },
      {
        id: 'shorts',
        slug: 'shorts',
        name: 'Shorts',
        description: 'Shorts for warm days and weekends.',
        image: '/assets/products/shorts-1.jpg',
      },
    ],
  },
  {
    id: 'formal-wear',
    slug: 'formal-wear',
    name: 'FORMAL WEAR',
    shortName: 'Formal Wear',
    description: 'Refined looks for professional and special occasions.',
    image: '/assets/images/formal.jpg',
    imageAlt: 'Man in a full-colour formal navy suit and tie',
    video: '/videos/formal-wear.mp4',
    poster: '/videos/formal-wear.jpg',
    videoAlt: 'Man in a blue suit walking through a city street at dusk',
    intro:
      'Tailored shirts, trousers and blazers for the office, the occasion and everything in between.',
    subcategories: [
      {
        id: 'formal-shirts',
        slug: 'formal-shirts',
        name: 'Formal Shirts',
        description: 'Crisp shirts for work and formal occasions.',
        image: '/assets/products/formal-shirts-1.jpg',
      },
      {
        id: 'formal-pants',
        slug: 'formal-pants',
        name: 'Formal Pants',
        description: 'Tailored trousers with a clean drape.',
        image: '/assets/products/formal-pants-1.jpg',
      },
      {
        id: 'blazers',
        slug: 'blazers',
        name: 'Blazers',
        description: 'Structured blazers and suit jackets.',
        image: '/assets/products/blazers-1.jpg',
      },
      {
        id: 'office-wear',
        slug: 'office-wear',
        name: 'Office Wear',
        description: 'Complete, professional office outfits.',
        image: '/assets/products/office-wear-1.jpg',
      },
    ],
  },
  {
    id: 'sports-wear',
    slug: 'sports-wear',
    name: 'SPORTS WEAR',
    shortName: 'Sports Wear',
    description: 'Comfortable styles designed for an active lifestyle.',
    image: '/assets/images/sports.jpg',
    imageAlt: 'Man in full-colour sports wear training with a barbell',
    video: '/videos/sports-wear.mp4',
    poster: '/videos/sports-wear.jpg',
    videoAlt: 'Runner in sportswear training on a park path at golden hour',
    intro:
      'Breathable, movement-friendly pieces for training, running and everyday activity.',
    subcategories: [
      {
        id: 'sports-t-shirts',
        slug: 'sports-t-shirts',
        name: 'Sports T-Shirts',
        description: 'Lightweight tops for training.',
        image: '/assets/products/sports-t-shirts-1.jpg',
      },
      {
        id: 'track-pants',
        slug: 'track-pants',
        name: 'Track Pants',
        description: 'Tapered track pants with an easy stretch.',
        image: '/assets/products/track-pants-1.jpg',
      },
      {
        id: 'tracksuits',
        slug: 'tracksuits',
        name: 'Tracksuits',
        description: 'Matching sets for warm-ups and travel.',
        image: '/assets/products/tracksuits-1.jpg',
      },
      {
        id: 'sports-shorts',
        slug: 'sports-shorts',
        name: 'Sports Shorts',
        description: 'Shorts built for movement.',
        image: '/assets/products/sports-shorts-1.jpg',
      },
    ],
  },
]

/** Look up a main category by its URL slug. */
export function findCategory(slug) {
  return categories.find((category) => category.slug === slug) ?? null
}

/** Look up a subcategory inside a main category. */
export function findSubcategory(category, subSlug) {
  if (!category) return null
  return category.subcategories.find((sub) => sub.slug === subSlug) ?? null
}
