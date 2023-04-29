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
            const novoProfessor = await professorService.adicionaRegistro(novosDados);
            res.status(200).json(novoProfessor);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static alteraProfessores = async (req, res) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoProfessor = await professorService.alteraRegistro(novosDados, id);
            res.status(200).json(novoProfessor);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static excluiProfessores = async (req, res) => {
        try{
            const id = req.params.id
            await professorService.excluiRegistro(id);
            res.status(200).json({message: `O Professor de id ${id} foi excluído`});

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static criaTurma = async (req, res) => {

    }

    static avaliaAluno = async (req, res) => {
        
    }

}

module.exports = ProfessorController
