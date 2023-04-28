const database = require('../models');

class Service {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaTodosRegistros() {
        return await database[this.nomeDoModelo].findAll();
    }
}

module.exports = Service;