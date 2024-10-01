export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array, then join with ' | '
  return [...reportWithIterator].join(' | ');
}
