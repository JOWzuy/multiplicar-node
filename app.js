const argv = require('./config/yargs').argv;
const colors = require('colors/safe');




const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando desconocido');

}

































//let base = 5;
/* 
let argv2 = process.argv;
 */
/* console.log('Limite', argv.limite);
 */ //let parametro = argv[2];
//let base = parametro.split('=')[1]


//crearArchivo(base)
//.then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e => console.log(e))