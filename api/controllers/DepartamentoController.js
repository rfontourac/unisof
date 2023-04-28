const database = require('../models');
const Service = require('../services/Service')

const DepartamentoService = new Service('Departamentos')

class DepartamentoController {
    static buscaTodosDepartamentos = async (req, res) => {
        try{
            const todosDepartamentos = await DepartamentoService.buscaTodosRegistros();
            res.status(200).json(todosDepartamentos);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaDepartamentos = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoDepartamento = await database.Departamentos.create(novosDados);
            res.status(200).json(novoDepartamento);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

}

module.exports = DepartamentoController