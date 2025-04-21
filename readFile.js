const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
