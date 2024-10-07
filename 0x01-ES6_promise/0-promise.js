export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('success');
    } else {
      reject(new Error('data not sucessfully allocated'));
    }
  });
}
