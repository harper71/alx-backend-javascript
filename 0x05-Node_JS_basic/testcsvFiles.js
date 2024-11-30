const fs = require('fs');

function csvParseer(file) {
  
  const csvData = fs.readFileSync(file, 'utf8');

  const row = csvData.split('\n').filter(line => line.trim() !== '');
  const header = row[0].split(',');
  console.log(`headers: ${header}`);
  const studentData = row.slice(1);
  console.log(studentData);
  
  
  console.log(row);
  let length = row.length;
  console.log(length - 1);  
}

csvParseer('database.csv');

