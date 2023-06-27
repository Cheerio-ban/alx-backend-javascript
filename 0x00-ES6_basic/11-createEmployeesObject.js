export default function createEmployeesObject(departmentName, employees) {
  const newobj = { [departmentName]: [...employees] };
  return newobj;
}
