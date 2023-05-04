const database = require('../models');
const { ProfessorService, AlunoService } = require('../services')

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

    static finishClass = async (req, res) => {
        
    }

    static evaluateStudent = async (req, res) => {
        const values = req.body
        
        try{
            const updatedRecord = await professorService.evaluateStudent(values)
            res.status(200).json(
                {
                    message: "Aluno avaliado com sucesso", 
                    nota: updatedRecord.grade, 
                    frequencia: updatedRecord.attendance, 
                    aprooved: updatedRecord.aprooved 
                })

        } catch (err){
            res.status(500).send(err.message);

        }

    }

}

module.exports = ProfessorController
