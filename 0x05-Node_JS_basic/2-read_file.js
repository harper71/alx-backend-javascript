const fs = require('fs');

function countStudents(path) {
  try {
      // Read the file synchronously
      const data = fs.readFileSync(path, 'utf-8');

      // Split the file into lines and filter out empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Validate that the file is not empty and has at least a header
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      // Extract the header and data
      const header = lines[0].split(',');
      const studentData = lines.slice(1);

      const fieldIndex = header.indexOf('field');
      const firstnameIndex = header.indexOf('firstname');
      
      if (fieldIndex === -1 || firstnameIndex === -1) {
        throw new Error('Invalid database format');
      }

      // Count the number of students and group them by field
      const studentCount = studentData.length;
      const fieldMap = {};

      studentData.forEach(line => {
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

      // Log the total number of students
      console.log(`Number of students: ${studentCount}`);

      // Log the number of students in each field
      for (const [field, students] of Object.entries(fieldMap)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
