const database = require('../models');

class Service {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaRegistros(where = {}) {
        return await database[this.nomeDoModelo].findAll({where: where});
    }
    
    async adicionaRegistro(dados) {
        return await database[this.nomeDoModelo].create(dados);
    }

    async alteraRegistro(dados, id) {
        await database[this.nomeDoModelo].update(dados, {
            where: {
                id: Number(id)
            }
        })
        return database[this.nomeDoModelo].findOne({
            where: {
                id: Number(id)
            }
        });
    }

    async excluiRegistro(id) {
        return await database[this.nomeDoModelo].destroy({
            where: {
                id: Number(id)
            }
        });
    }


}

module.exports = Service;