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

    static matriculaEmCurso = (req, res) => {

    }

    static matriculaEmDisciplina = (req, res) => {
        //cria aluno_turma
        //cria historico
        //cria aluno_disc
    }




}

module.exports = AlunoController