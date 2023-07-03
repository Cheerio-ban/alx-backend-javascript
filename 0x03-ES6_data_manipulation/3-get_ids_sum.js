export default function getStudentIdsSum(listOfStudents) {
  if (Array.isArray(listOfStudents)) {
    return listOfStudents.reduce((currSum, { id }) => currSum + id, 0);
  }
  return 0;
}
