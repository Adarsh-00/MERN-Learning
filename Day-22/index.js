const bcrypt = require('bcrypt');

const salt = 10;

const hash = bcrypt.hashSync('hello', salt);

console.log(hash);

const status = bcrypt.hashSync('hello', salt);

console.log(status);