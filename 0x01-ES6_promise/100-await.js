import uploadPhoto from './5-photo-reject'; // Adjust the path based on your file structure
import createUser from './4-user-promise'; // Adjust the path based on your file structure

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('photo-profile-1'); // Call uploadPhoto
    const user = await createUser('Guillaume', 'Salva'); // Call createUser
    return {
      photo, // Response from uploadPhoto
      user, // Response from createUser
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
