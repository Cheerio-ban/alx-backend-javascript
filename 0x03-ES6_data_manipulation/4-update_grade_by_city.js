export default function updateStudentGradeByCity(
  getListStudent,
  city,
  newGrades
) {
  getListStudent
    .filter((elem) => elem.location === city)
    .map((elem) => {
      for (const grades of newGrades) {
        if (grades.studentId === elem.id) {
          return { ...elem, grade: grades.grade };
        }
        return { ...elem, grade: "N/A" };
      }
    });
}
