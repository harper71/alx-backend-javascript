import { uploadPhoto, createUser } from './utils';

export default function handleProfilesSignup() {
  return new Promise((resolve, reject) => {
    resolve(
      Promise.all([uploadPhoto(), createUser()])
        .then((data) => {
          console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
        }),
    );
    reject(new Error('data could not be gotten'));
  });
}
