/**
 * Homepage hero slider content.
 *
 * Exactly nine photographs, one file each, in a fixed order: three per
 * category, casual → formal → sports, then back to casual.
 *
 * The same nine files are used on every device — phones, tablets, laptops and
 * desktops differ only in how the photograph is sized and positioned on the
 * page, never in which photograph is shown. There are no mobile/desktop
 * variants and no fallback substitutes, so no photograph can repeat inside the
 * sequence.
 *
 * Files live in /public/assets/hero (see the README there for the required
 * resolution and composition). Every photograph must be a full-body editorial
 * shot: head, legs and shoes all inside the frame.
 *
 * The copy belongs to the category, not the photograph, so the label, heading,
 * description and CTA change only at a category boundary while that category's
 * three photographs play.
 */
const photo = (id, file, alt) => ({
  id,
  file,
  image: `/assets/hero/${file}`,
  alt,
})

export const heroSlides = [
  {
    id: 'casual',
    label: 'Casual Wear',
    heading: 'Own Your Style.',
    description: 'Discover everyday fashion designed for comfort and confidence.',
    cta: 'Explore Casual Wear',
    to: '/casual-wear',
    photos: [
      photo(
        'casual-01',
        'casual-01.webp',
        'Full-body model in a stylish casual shirt and jeans',
      ),
      photo(
        'casual-02',
        'casual-02.webp',
        'Full-body model in a premium casual T-shirt and jeans',
      ),
      photo(
        'casual-03',
        'casual-03.webp',
        'Full-body model in a denim jacket and jeans',
      ),
    ],
  },
  {
    id: 'formal',
    label: 'Formal Wear',
    heading: 'Dress to Impress.',
    description: 'Discover sophisticated styles for every important occasion.',
    cta: 'Explore Formal Wear',
    to: '/formal-wear',
    photos: [
      photo(
        'formal-01',
        'formal-01.webp',
        'Full-body model in a premium formal shirt and trousers',
      ),
      photo(
        'formal-02',
        'formal-02.webp',
        'Full-body model in a sophisticated formal outfit',
      ),
      photo(
        'formal-03',
        'formal-03.webp',
        'Full-body model in a stylish blazer and formal trousers',
      ),
    ],
  },
  {
    id: 'sports',
    label: 'Sports Wear',
    heading: 'Move with Confidence.',
    description: 'Discover modern sportswear made for an active lifestyle.',
    cta: 'Explore Sports Wear',
    to: '/sports-wear',
    photos: [
      photo(
        'sports-01',
        'sports-01.webp',
        'Full-body model in a premium sports T-shirt and track pants',
      ),
      photo(
        'sports-02',
        'sports-02.webp',
        'Full-body model in a complete athletic tracksuit',
      ),
      photo(
        'sports-03',
        'sports-03.webp',
        'Full-body model in a stylish sports outfit and sports shoes',
      ),
    ],
  },
]
