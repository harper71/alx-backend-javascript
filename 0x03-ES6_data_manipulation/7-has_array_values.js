export default function hasValuesFromArray(sets, Arrays) {
  const hasAll = Arrays.every((value) => sets.has(value));
  return hasAll;
}
