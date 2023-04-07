const fs = require('fs');

const data = 'Hello, world!';

fs.writeFile('example.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});