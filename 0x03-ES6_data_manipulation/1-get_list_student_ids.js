export default function getListStudentIds(arrayName) {
  if (Array.isArray(arrayName) === false) {
    return [];
  }
  const Ids = [];
  // eslint-disable-next-line array-callback-return
  arrayName.map((value) => {
    Ids.push(value.id);
  });

  return Ids;
}
