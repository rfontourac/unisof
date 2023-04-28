const database = require('../models');
const Service = require('./Service')

class CursoService extends Service {
    constructor(nomeDoModelo){
        super('Cursos')
    }

}

module.exports = CursoService