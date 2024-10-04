export default function createIteratorObject(report) {
  const employees = [];

  // Gather all employees from each department
  // eslint-disable-next-line no-restricted-syntax
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  // Return an iterator
  return employees[Symbol.iterator]();
}
