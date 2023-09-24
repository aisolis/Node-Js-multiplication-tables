const { createFileByBase } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();


// USANDO DEESTRUCTURACION DEL process.argv
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base] = arg3.split('=');

const { base, listar, hasta } = argv;

// console.log(argv);

createFileByBase(base, listar, hasta)
    .then( successFileName => console.log(`se ha creado el archivo: ${successFileName}`))
    .catch( err => console.log(err));






 

