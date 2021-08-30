const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (error, data) => {
    console.log(data);
})