/**
 * The special three-video men's fashion carousel.
 *
 * Each slide plays its own MP4 from /public/assets/videos. To swap a clip, drop
 * a new file in that folder and update `src` (and optionally `poster`).
 *
 * If a source is missing or a file fails to load, the slide falls back to its
 * full-colour poster with a clearly marked "video coming soon" badge. Nothing
 * is filtered, desaturated or grey-scaled.
 */
export const videos = [
  {
    id: 'casual',
    name: 'Casual Wear',
    // Real MP4 stored in /public/assets/videos (540x960, muted-friendly, ~7s loop).
    src: '/assets/videos/casual.mp4',
    poster: '/assets/videos/casual.jpg',
    description:
      "Casual men's fashion in full colour: casual shirts, t-shirts, jeans and everyday outfits.",
  },
  {
    id: 'formal',
    name: 'Formal Wear',
    src: '/assets/videos/formal.mp4',
    poster: '/assets/videos/formal.jpg',
    description:
      "Formal men's fashion in full colour: formal shirts, trousers, blazers and professional outfits.",
  },
  {
    id: 'sports',
    name: 'Sports Wear',
    src: '/assets/videos/sports.mp4',
    poster: '/assets/videos/sports.jpg',
    description:
      "Sports men's fashion in full colour: sports t-shirts, track pants, tracksuits and activewear.",
  },
]
