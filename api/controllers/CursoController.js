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
            const novoCurso = await cursoService.adicionaRegistro(novosDados);
            res.status(200).json(novoCurso);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static alteraCursos = async (req, res) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoCurso = await cursoService.alteraRegistro(novosDados, id);
            res.status(200).json(novoCurso);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static excluiCursos = async (req, res) => {
        try{
            const id = req.params.id
            await cursoService.excluiRegistro(id);
            res.status(200).json({message: `O Curso de id ${id} foi excluído`});

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static populaCurso = async (req, res) => {
        //recebe dois arrays, um de nome de cursos e um de periodos
        // post /cursos/:id/populacurso
        

    }


}

module.exports = CursoController