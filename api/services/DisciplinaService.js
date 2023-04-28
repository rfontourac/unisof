const database = require('../models');
const Service = require('./Service')

class DisciplinaService extends Service {
    constructor(nomeDoModelo){
        super('Disciplinas')
    }

}

module.exports = DisciplinaService