export default function getStudentsByLocation(studentsArray, location) {
  const locationsCheck = [];
  // eslint-disable-next-line array-callback-return
  studentsArray.filter((student) => {
    if (student.location === location) {
      locationsCheck.push(student);
    }
  });
  return locationsCheck;
}
