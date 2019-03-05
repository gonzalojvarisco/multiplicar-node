const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`${base} o ${limite} no es un numero. Verifiquelo`);
            return;
        }
        let resultado = '';

        for (i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${base*i}\n`;
        }

        console.log(`Tabla del ${base}`.green);

        resolve(resultado);
    })
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado`.blue);
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};