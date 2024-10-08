// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint object is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the count to 1 for this endpoint
    weakMap.set(endpoint, 1);
  } else {
    // If it already exists, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // If the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
