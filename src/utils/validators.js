export const SEARCH_MIN_LENGTH = 3;

export function isValidSearchTerm(value) {
  return value.trim().length >= SEARCH_MIN_LENGTH;
}
