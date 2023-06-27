export default function createIteratorObject(report) {
  const allemployees = Object.values(report);
  const arr = [];
  for (const employee of allemployees) {
    for (const employed of employee) {
      arr.push(employed);
    }
  }
  return arr;
}
