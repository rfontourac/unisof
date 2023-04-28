const database = require('../models');
const { DisciplinaService } = require('../services')

const disciplinaService = new DisciplinaService;

class DisciplinaController {
    static buscaDisciplinas = async (req, res) => {
        try{
            const params = req.query;
            const todosDisciplinas = await disciplinaService.buscaRegistros(params);
            res.status(200).json(todosDisciplinas);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaDisciplinas = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoDisciplina = await database.Disciplinas.create(novosDados);
            res.status(200).json(novoDisciplina);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

}

module.exports = DisciplinaController