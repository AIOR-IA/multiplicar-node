const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('========================='.cyan);
    console.log(`====== tabla de ${base}=======`.cyan);
    console.log('========================='.cyan);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base*i}`);
    }
}

let creararchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor ${base} no es un numero`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos = datos + (`${base} * ${i} = ${base*i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`El archivo tabla-${base} ha sido creado`.cyan);

            }
        });
    });
}

module.exports = {
    creararchivo,
    listarTabla
}