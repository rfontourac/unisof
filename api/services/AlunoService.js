const database = require('../models');
const Service = require('./Service')

class AlunoService extends Service {
    constructor(nomeDoModelo){
        super('Students')
    }

}

module.exports = AlunoService