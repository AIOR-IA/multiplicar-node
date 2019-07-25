const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'lim',
        default: 10
    }
}

const argv = require('yargs')

.command('crear', 'Crea un nuevo documento de la tabla de multiplicar', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}