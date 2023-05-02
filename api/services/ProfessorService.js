const database = require('../models');
const Service = require('./Service')

class ProfessorService extends Service {
    constructor(nomeDoModelo){
        super('Professors')
    }

}

module.exports = ProfessorService