const fs = require('fs');

const man = {
    people: 1,
    age: 43,
    name: "Bob"
}


fs.writeFile('man.json', JSON.stringify(man), (err) => {

});


