/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
export default function appendToEachArrayValue(array, appendString) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = appendString + value;
  }

  return array;
}
