const database = require('../models');
const { ProfessorService } = require('../services')

const professorService = new ProfessorService;

class ProfessorController {
    static buscaTodosProfessores = async (req, res) => {
        try{
            const todosProfessores = await professorService.buscaTodosRegistros();
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
