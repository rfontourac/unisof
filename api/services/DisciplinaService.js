const database = require('../models');
const Service = require('./Service')

class DisciplinaService extends Service {
    constructor(nomeDoModelo){
        super('Disciplines')
    }

}

module.exports = DisciplinaService