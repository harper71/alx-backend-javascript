// eslint-disable-next-line import/extensions
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const newClassRooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return (newClassRooms);
}
