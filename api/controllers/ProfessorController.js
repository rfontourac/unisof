const database = require('../models');
const { ProfessorService, AlunoService } = require('../services')

const professorService = new ProfessorService;

class ProfessorController {
    static buscaProfessores = async (req, res, next) => {
        try{
            const params = req.query
            const todosProfessores = await professorService.buscaRegistros(params);
            res.status(200).json(todosProfessores);

        } catch (err){
            next(err);
        
        }
    }
    
    static criaProfessores = async (req, res, next) => {
        try{
            const novosDados = req.body;
            const novoProfessor = await professorService.adicionaRegistro(novosDados);
            res.status(200).json(novoProfessor);

        } catch (err){
            next(err);
        
        }
    }

    static alteraProfessores = async (req, res, next) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoProfessor = await professorService.alteraRegistro(novosDados, id);
            res.status(200).json(novoProfessor);

        } catch (err){
            next(err);
        
        }
    }

    static excluiProfessores = async (req, res, next) => {
        try{
            const id = req.params.id
            await professorService.excluiRegistro(id);
            res.status(200).json({message: `O Professor de id ${id} foi excluído`});

        } catch (err){
            next(err);
        
        }
    }

    static closeClass = async (req, res, next) => {
        const ClassId = req.params.id
        try {
            console.log()
            const closedClass = await professorService.closeClass(ClassId);
            res.status(200).json({
                message: closedClass
            })
        } catch (err){
            next(err);
        }
    }

    static evaluateStudent = async (req, res, next) => {
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
            next(err);

        }

    }

}

module.exports = ProfessorController
