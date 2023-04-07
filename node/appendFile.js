const fs = require('fs');

const data = '\n\nThis is some additional content.';

fs.appendFile('example.txt', data, (err) => {
  if (err) throw err;
  console.log('The data has been appended to the file!');
});