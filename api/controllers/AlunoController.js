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
            const novoAluno = await database.Alunos.create(novosDados);
            res.status(200).json(novoAluno);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

}

module.exports = AlunoController