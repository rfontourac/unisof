const database = require('../models');
const { CursoService } = require('../services')

const cursoService = new CursoService;

class CursoController {
    static buscaCursos = async (req, res) => {
        try{
            const params = req.query;
            const todosCursos = await cursoService.buscaRegistros(params);
            res.status(200).json(todosCursos);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaCursos = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoCurso = await database.Cursos.create(novosDados);
            res.status(200).json(novoCurso);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

}

module.exports = CursoController