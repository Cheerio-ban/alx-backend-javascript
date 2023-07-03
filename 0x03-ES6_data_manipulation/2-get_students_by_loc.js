export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((elem) => elem.location === city);
}
