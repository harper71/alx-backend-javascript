import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto('photo-profile-1'),
      createUser('Guillaume', 'Salva'),
    ]);
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
}
