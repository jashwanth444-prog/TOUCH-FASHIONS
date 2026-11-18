# Hero photographs

Nine photographs, one file each. The slider plays them in this order, two
seconds each, then loops.

The **same file is used on every device** — phone, tablet, laptop and desktop.
Do not add mobile or desktop variants; only the displayed size adapts.

| # | Category | File | Subject |
|---|----------|------|---------|
| 1 | Casual Wear | `casual-01.webp` | Full-body model in a casual shirt and jeans |
| 2 | Casual Wear | `casual-02.webp` | Full-body model in a premium T-shirt and jeans |
| 3 | Casual Wear | `casual-03.webp` | Full-body model in a denim jacket and jeans |
| 4 | Formal Wear | `formal-01.webp` | Full-body model in a formal shirt and trousers |
| 5 | Formal Wear | `formal-02.webp` | Full-body model in a suit, sophisticated formal outfit |
| 6 | Formal Wear | `formal-03.webp` | Full-body model in a blazer and formal trousers |
| 7 | Sports Wear | `sports-01.webp` | Full-body model in a sports T-shirt, track pants and sneakers |
| 8 | Sports Wear | `sports-02.webp` | Full-body model in a complete matching tracksuit |
| 9 | Sports Wear | `sports-03.webp` | Full-body model in a sports outfit and sports shoes |

## Status: temporary photographs

All nine slots are filled **with temporary stock photography** so the hero is
complete during development. The client's final campaign photographs replace
these files in place — same filenames, no code change.

| File | Source (Pexels photo page) | Photographer | Licence |
|------|---------------------------|--------------|---------|
| `casual-01.webp` | https://www.pexels.com/photo/a-man-in-gray-button-up-shirt-and-black-jeans-standing-7834590 | Mushtaq Hussain | Pexels Licence |
| `casual-02.webp` | https://www.pexels.com/photo/a-man-standing-while-wearing-a-shirt-and-jeans-5648976 | Alvin Ramadhian | Pexels Licence |
| `casual-03.webp` | https://www.pexels.com/photo/man-wearing-denim-jacket-and-brown-shoes-walking-in-the-street-5534281 | Sarah Khan | Pexels Licence |
| `formal-01.webp` | https://www.pexels.com/photo/man-in-blue-polo-shirt-and-gray-pants-standing-on-the-street-while-seriously-looking-at-the-camera-7037535 | Mushtaq Hussain | Pexels Licence |
| `formal-02.webp` | https://www.pexels.com/photo/man-in-black-suit-jacket-and-black-pants-standing-on-sidewalk-4964952 | Ketut Subiyanto | Pexels Licence |
| `formal-03.webp` | https://www.pexels.com/photo/confident-businessman-in-suit-walking-on-street-4470686 | Milad Heran | Pexels Licence |
| `sports-01.webp` | https://www.pexels.com/photo/man-in-black-shirt-and-pants-wearing-blue-and-white-rubber-shoes-with-cap-12626144 | Evlogia Pictures | Pexels Licence |
| `sports-02.webp` | https://www.pexels.com/photo/9775552 | SHVETS production | Pexels Licence |
| `sports-03.webp` | https://www.pexels.com/photo/model-posing-in-sportswear-16702533 | Camviu Studio | Pexels Licence |

Pexels Licence summary (https://www.pexels.com/license/): free to use for
commercial and non-commercial work, no attribution required, modification
allowed. Not permitted: selling unmodified copies, implying endorsement by the
depicted people, or using images in a defamatory or offensive context.

Because these models are identifiable, keep them as development placeholders.
For the live storefront, prefer the client's own campaign photography so the
brand does not imply an endorsement it does not have.

## Image specification for the final photographs

- **Format:** WebP, quality ~80, sRGB, full colour. No filters are applied by the interface.
- **Aspect:** portrait **2:3** at **1200 × 1800 px** — the exact slot reserved by the hero.
- **Composition:** full body, head to shoes, model centred with a small margin above the head and below the shoes. Never crop legs, feet or shoes.
- **Background:** premium urban, architectural or outdoor editorial setting.
- **Consistency:** all nine should share lighting, tonal treatment and camera distance.
- **Difference:** each of the nine must be a genuinely different photograph.

Temporary files were padded to 2:3 on a `#080808` canvas (matching the hero
background) rather than cropped or stretched, so no model is cut off.

## Notes

- Paths and alt text live in `src/data/heroSlides.js`; edit that file to rename a photograph.
- The hero fits photographs with `object-fit: contain`, so the whole model is always visible.
