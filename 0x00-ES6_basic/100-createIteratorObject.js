export default function createIteratorObject(report) {
  const allemployeess = Object.keys(report.allemployees);
  const arr = [];
  for (const employee of allemployeess) {
    for (const employed of report.allemployees[employee]) {
      arr.push(employed);
    }
  }
  return arr;
}
