export default function createIteratorObject(report) {
  const allemployeess = Object.values(report.allEmployees);
  const arr = [];
  for (const employee of allemployeess) {
    for (const employed of employee) {
      arr.push(employed);
    }
  }
  return arr;
}
