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
            const novoDisciplina = await disciplinaService.adicionaRegistro(novosDados);
            res.status(200).json(novoDisciplina);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static alteraDisciplinas = async (req, res) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoDisciplina = await disciplinaService.alteraRegistro(novosDados, id);
            res.status(200).json(novoDisciplina);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static excluiDisciplinas = async (req, res) => {
        try{
            const id = req.params.id
            await disciplinaService.excluiRegistro(id);
            res.status(200).json({message: `O Disciplina de id ${id} foi excluído`});

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }


}

module.exports = DisciplinaController