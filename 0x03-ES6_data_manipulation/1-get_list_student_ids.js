export default function getListStudentIds(arrOfObjects) {
  if (!Array.isArray(arrOfObjects)) {
    return [];
  }
  return arrOfObjects.map((elem) => elem.id);
}
