const database = require('../models');
const { AlunoService } = require('../services')


const alunoService = new AlunoService;

class AlunoController {
    static buscaAlunos = async (req, res) => {
        try{
            const params = req.query;
            const todosAlunos = await alunoService.buscaRegistros(params);
            res.status(200).json(todosAlunos);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaAlunos = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoAluno = await alunoService.adicionaRegistro(novosDados);
            res.status(200).json(novoAluno);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static alteraAlunos = async (req, res) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoAluno = await alunoService.alteraRegistro(novosDados, id);
            res.status(200).json(novoAluno);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static excluiAlunos = async (req, res) => {
        try{
            const id = req.params.id
            await alunoService.excluiRegistro(id);
            res.status(200).json({message: `O Aluno de id ${id} foi excluído`});

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static registerStudentInCourse = async (req, res) => {
        try {
            const studentId = req.body.studentId
            const courseId = req.body.courseId

            const alunoMatriculado = await alunoService.registerStudentToCourse(studentId, courseId)
            res.status(200).send(alunoMatriculado);
            

        } catch (erro){
            res.status(500).json({message: "Ocorreu um erro"})
        }
    
    }

    static registerToClass = async (req, res) => {
        try{
            const newClassRegistration = await alunoService.registerStudentToClass(req.body.studentId,req.body.classId)
            res.status(200).send(newClassRegistration)
        
        } catch (err){
            res.status(500).send(err.message)
            
        }

        //cria aluno_turma
        //cria aluno_disc
        //cria historico
        
    }




}

module.exports = AlunoController