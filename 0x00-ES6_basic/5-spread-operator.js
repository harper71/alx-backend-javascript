export default function concatArrays(array1, array2, string) {
  const arr = Array.from(string);
  return [...array1, ...array2, ...arr];
}
