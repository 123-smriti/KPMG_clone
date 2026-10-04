// Looks up optional local videos in src/assets/video by file name (same idea as images.js).
// A missing file returns undefined, so the hero falls back to its image.
const videos = import.meta.glob('../assets/video/*.{mp4,webm}', {
  eager: true,
  import: 'default',
});

export function getVideo(fileName) {
  if (!fileName) return undefined;
  return videos[`../assets/video/${fileName}`];
}
