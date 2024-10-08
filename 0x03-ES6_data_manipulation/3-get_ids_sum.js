export default function getStudentIdsSum(ListOfStudents) {
  const sumIds = ListOfStudents.reduce((id, currentValue) => id + currentValue.id, 0);
  return sumIds;
}
