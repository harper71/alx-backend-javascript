const fs = require('fs');

function countStudents(csvFile) {
  let length = 0
  const csvData = fs.readFileSync(csvFile, 'utf8')
  const students = csvData.split('\n')

 students.forEach((elements) => {
  length += 1;
  const columns = elements.split(',')
 })

 //removing the row with the data info
 totalSudents = length - 1
 console.log(totalSudents);
 
}
countStudents('database.csv');
