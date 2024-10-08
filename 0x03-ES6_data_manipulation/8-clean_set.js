export default function cleanSet(set, startString) {
  // Check if startString is valid
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and map the values of the set
  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length)) // Extract the part after startString
    .join('-'); // Join them with '-'

  return result;
}
