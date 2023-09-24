const argv = require('yargs')
                    .option('b', {
                        alias : 'base',
                        type: 'number',
                        demandOption: true,
                        describe : 'argumento para especificar base de la tabla a crear'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default : false,
                        describe : 'argumento para mostrar la tabla o no'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default : 10,
                        describe : 'Establece el limite al que llegara la tabla'
                    })
                    .check( (argv, options) => {
                        if(isNaN(argv.b || argv.h)){
                            throw 'la base o final debe ser un numero';
                        }
                        return true;
                    })
                    .argv;


module.exports = argv;