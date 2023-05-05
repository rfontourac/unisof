const database = require('../models');
const { AlunoService } = require('../services')
const BaseError = require('../errors/BaseError')


const alunoService = new AlunoService;

class AlunoController {
    static buscaAlunos = async (req, res, next) => {
        try{
            const params = req.query;
            const todosAlunos = await alunoService.buscaRegistros(params);
            res.status(200).json(todosAlunos);

        } catch (err){
            next(err);
                    
        }
    }
    
    static criaAlunos = async (req, res, next) => {
        try{
            const novosDados = req.body;
            const novoAluno = await alunoService.adicionaRegistro(novosDados);
            res.status(200).json(novoAluno);

        } catch (err){
            next(err)
                    
        }
    }

    static alteraAlunos = async (req, res, next) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoAluno = await alunoService.alteraRegistro(novosDados, id);
            res.status(200).json(novoAluno);

        } catch (err){
            next(err);
        
        }
    }

    static excluiAlunos = async (req, res, next) => {
        try{
            const id = req.params.id
            await alunoService.excluiRegistro(id);
            res.status(200).json({message: `O Aluno de id ${id} foi excluído`});

        } catch (err){
            next(err);
        
        }
    }

    static registerStudentInCourse = async (req, res, next) => {
        try {
            const studentId = req.body.studentId
            const courseId = req.body.courseId

            const alunoMatriculado = await alunoService.registerStudentToCourse(studentId, courseId)
            res.status(200).send(alunoMatriculado);
            

        } catch (err){
            next(err);
        }
    
    }

    static registerToClass = async (req, res, next) => {
        try{
            const newClassRegistration = await alunoService.registerStudentToClass(req.body.studentId, req.body.classId)
            res.status(200).send(newClassRegistration)
        
        } catch (err){
            next(err);
            
        }
    }




}

module.exports = AlunoController