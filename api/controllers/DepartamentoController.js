const database = require('../models');
const { DepartamentoService } = require('../services')

const departamentoService = new DepartamentoService;

class DepartamentoController {
    static buscaTodosDepartamentos = async (req, res) => {
        try{
            const todosDepartamentos = await departamentoService.buscaTodosRegistros();
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