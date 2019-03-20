// requireds

const fs = require('fs');
//const fs = require('express');  paquetes que no estan en node
//const fs = require('./fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`===tabla de ${base}===`.blue);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`)


    }




}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;


        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            // console.log("2*" + i + "=" + base * i);
            data += (`${base}*${i}=${base*i}\n`);

        }

        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`El archivo table-${base} al ${limite}.txt se creo correctamente`);
        });



    })
}


module.exports = {
    crearArchivo,
    listarTabla
}