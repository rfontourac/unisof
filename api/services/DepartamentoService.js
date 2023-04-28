const database = require('../models');
const Service = require('./Service')

class DepartamentoService extends Service {
    constructor(nomeDoModelo){
        super('Departamentos')
    }


}

module.exports = DepartamentoService