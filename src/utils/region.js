// Guesses the visitor's country from the browser language (e.g. "en-IN" -> "India").
// No network request is made. Returns '' when the region can't be worked out.
export function detectCountry() {
  try {
    const region = (navigator.language || '').split('-')[1];
    if (!region) return '';
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(region.toUpperCase()) || '';
  } catch {
    return '';
  }
}
