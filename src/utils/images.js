// Looks up local images in src/assets/images by file name.
// Data files store plain names like "featured-1.jpg". A missing file returns
// undefined, so components can show a placeholder until the real image is added.
const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

export function getImage(fileName) {
  if (!fileName) return undefined;
  return images[`../assets/images/${fileName}`];
}
