const express = require('express');
const fs = require('fs');
const csvFilePath = process.argv[2];
if (!csvFilePath) {
  console.error('usage: node <filename> <database>');
  process.exit(1);
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // Reject the Promise if the file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the file into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Validate that the file is not empty and has at least a header
        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        // Extract the header and data
        const header = lines[0].split(',');
        const studentData = lines.slice(1);

        const fieldIndex = header.indexOf('field');
        const firstnameIndex = header.indexOf('firstname');

        if (fieldIndex === -1 || firstnameIndex === -1) {
          reject(new Error('Invalid database format'));
          return;
        }

        // Count the number of students and group them by field
        const studentCount = studentData.length;
        const fieldMap = {};

        studentData.forEach((line) => {
          const values = line.split(',');

          // Ensure the line has the same number of columns as the header
          if (values.length !== header.length) {
            return;
          }

          const field = values[fieldIndex];
          const firstname = values[firstnameIndex];

          if (!fieldMap[field]) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(firstname);
        });

        // Prepare the output
        let output = `Number of students: ${studentCount}\n`;
        for (const [field, students] of Object.entries(fieldMap)) {
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        // Resolve the Promise with the output
        resolve(output.trim());
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.set('content-type', 'text/plain');
  res.status(200).send('Hello ALX!');
});

app.get('/students', (req, res) => {
  let display = ['This is the list of our students']
  countStudents(csvFilePath)
    .then((data) => {
      display.push(data);
      const dataFormatted = display.join('\n');
      res.set('content-type', 'text/plain');
      res.status(200).send(dataFormatted);
    })
    .catch((err) => {
      res.set('content-type', 'text/html')
      res.status(500).send(`<h1>Not Found: ${err}</h1>`);
  });
});

app.listen(1245, () => {});
