Here's a step-by-step guide for each of your tasks, using Node.js:

---

### **1. Run JavaScript Using Node.js**
You can run any JavaScript file directly using the `node` command.

1. Create a JavaScript file (e.g., `app.js`):
   ```javascript
   console.log('Hello, Node.js!');
   ```

2. Run the file using Node.js:
   ```bash
   node app.js
   ```

---

### **2. Use Node.js Modules**
Node.js comes with many built-in modules, like `fs`, `http`, and `path`. You can use these modules by requiring them.

Example:
```javascript
const os = require('os');

console.log(`Your system's architecture is: ${os.arch()}`);
console.log(`Your system's platform is: ${os.platform()}`);
```

Run the script with:
```bash
node app.js
```

---

### **3. Use a Specific Node.js Module to Read Files**
The `fs` (File System) module is used to read files in Node.js.

Example:
```javascript
const fs = require('fs');

// Read a file synchronously
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);

// Read a file asynchronously
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Run the script:
```bash
node app.js
```

---

### **4. Use `process` to Access Command-Line Arguments and the Environment**
You can use `process.argv` to access command-line arguments and `process.env` to access environment variables.

Example:
```javascript
// Access command-line arguments
const args = process.argv.slice(2);
console.log(`Arguments: ${args}`);

// Access environment variables
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
```

Run the script with:
```bash
NODE_ENV=production node app.js arg1 arg2
```

Output:
```text
Arguments: arg1,arg2
NODE_ENV: production
```

---

### **5. Create a Small HTTP Server Using Node.js**
You can create an HTTP server using the `http` module.

Example:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our homepage!');
    res.end();
  } else if (req.url === '/about') {
    res.write('About us page');
    res.end();
  } else {
    res.write('404 - Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Run the script and visit `http://localhost:3000` in your browser.

---

### **6. Create a Small HTTP Server Using Express.js**
Express.js makes it easy to create an HTTP server.

1. Install Express:
   ```bash
   npm install express
   ```

2. Create a file (e.g., `server.js`):
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Welcome to the Express.js homepage!');
   });

   app.get('/about', (req, res) => {
     res.send('About us page');
   });

   app.use((req, res) => {
     res.status(404).send('404 - Not Found');
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

3. Run the server:
   ```bash
   node server.js
   ```

Visit `http://localhost:3000`.

---

### **7. Create Advanced Routes with Express.js**
Express allows you to use route parameters, query strings, and middleware.

Example:
```javascript
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search Query: ${query}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

- Visit `http://localhost:3000/user/123` → Displays `User ID: 123`.
- Visit `http://localhost:3000/search?q=Node.js` → Displays `Search Query: Node.js`.

---

### **8. Use ES6 with Node.js and Babel**
To use ES6 features in Node.js, you'll need Babel.

1. Install Babel and necessary dependencies:
   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
   ```

2. Create a Babel configuration file (`.babelrc`):
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

3. Use ES6 syntax in your JavaScript file (e.g., `index.js`):
   ```javascript
   import express from 'express';

   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello, ES6 with Babel!');
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

4. Run the script with Babel-node:
   ```bash
   npx babel-node index.js
   ```

---

### **9. Use Nodemon to Develop Faster**
Nodemon restarts your server automatically when you make changes.

1. Install Nodemon:
   ```bash
   npm install -g nodemon
   ```

2. Run your server using Nodemon:
   ```bash
   nodemon server.js
   ```

Now, the server will restart automatically whenever you edit and save `server.js`.

---

By completing the steps above, you'll have a solid foundation in Node.js, Express.js, ES6, and tools like Babel and Nodemon for efficient development. Let me know if you'd like further assistance!