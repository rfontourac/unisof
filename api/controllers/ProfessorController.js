const database = require('../models');
const { ProfessorService } = require('../services')

const professorService = new ProfessorService;

class ProfessorController {
    static buscaProfessores = async (req, res) => {
        try{
            const params = req.query
            const todosProfessores = await professorService.buscaRegistros(params);
            res.status(200).json(todosProfessores);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaProfessores = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoProfessor = await database.Professores.create(novosDados);
            res.status(200).json(novoProfessor);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

}

module.exports = ProfessorController
