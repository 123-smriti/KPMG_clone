// Hero slideshow content. Edit this file to change what the hero shows.
//
// WHERE TO PUT THE PHOTOS
//   Drop your images into  src/assets/images/  and put the file name in `image` below
//   (.jpg, .png, .webp, .avif or .svg all work). Recommended: landscape photos, about
//   1600 x 900 px, subject placed on the right (the left ~40% is covered by the blue panel).
//   Suggested names: hero-slide-1.jpg, hero-slide-2.jpg, hero-slide-3.jpg
//
// VIDEO
//   A slide can also have `video` (a file name in src/assets/video). The video plays muted and
//   looping on the right side; `image` is then its poster (shown while loading, when autoplay is
//   blocked, and for visitors who prefer reduced motion). `duration` is how long the slide stays,
//   in ms; set it to the video length so the clip plays through once before the next slide.
export const heroSlides = [
  {
    id: 'cyber-day',
    video: 'hero.mp4',
    duration: 8000, // length of hero.mp4
    image: 'hero-poster.jpg', // first frame of the video
    imageAlt: 'Four smiling children looking at a tablet together in a city park',
    title: 'Global Cyber Day',
    description:
      'Celebrating 10 years of making the difference by uniting global communities to be cyber smart.',
    buttonText: 'Learn more',
    href: '#',
  },
];

// Time each slide stays on screen, in milliseconds.
export const HERO_SLIDE_INTERVAL = 5500;
