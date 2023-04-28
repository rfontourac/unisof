const database = require('../models');

class Service {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaRegistros(where = {}) {
        return await database[this.nomeDoModelo].findAll({where: where});
    }
}

module.exports = Service;