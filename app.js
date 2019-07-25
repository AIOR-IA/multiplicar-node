//requireds hay 3 tipos
const argv = require('./config/yargs').argv;
var colors = require('colors');
//1 esta que es copiar
//const fs = require('fs');

//2 const fs = require('express');   no son nativos de node , hicieron otras personas
// const fs = require('./fs');  ./ (punto pleca);
const { creararchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 4;

//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//yargs 
//console.log('Limite', argv.limite);

//recibir de procesos
//console.log(argv2);