const fs = require('fs');
var colors = require('colors');


// const createFileByBase = (base) => {
//     return new Promise((resolve, reject) => {

//         try {
//             console.log('========================');
//             console.log(`      TABLA DEL`, base);
//             console.log('========================');

//             let salida = '';
//             const filename = `tabla-${base}.txt`;

//             for (let x = 0; x <= 10; x++) {
//                 salida += `${base} x ${x} = ${base * x}\n`;
//             }
//             fs.writeFileSync(filename, salida);
//             resolve(filename);
//         } catch {
//             reject(error);
//         }
//     });

// }

const createFileByBase = async (base, listar, hasta) => {

    try {

        let salida = '';
        const filename = `./pruebas-fs/tabla-${base}.txt`;

        for (let x = 0; x <= hasta; x++) {
            let result = base * x;
            salida += `${base} ${ 'x'.green } ${x} ${ '='.green} ${result}\n`;
        }

        fs.writeFileSync(filename, salida);

        if(listar){
            printTable(base, salida);
        }

        return (filename);
    } catch (error) {
        throw `No se pudo crear el archivo ${filename} porque: ${error}`;
    }
}


function printTable(base, salida){
    console.log('========================'.green);
    console.log(`      TABLA DEL`.green, base);
    console.log('========================'.green);
    console.log(salida);
}

module.exports = {
    createFileByBase
}