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
        try{
            const listas = req.body;
            const curso = req.params.id
            const disciplinas = listas.disciplinas
            const periodos = listas.periodos
            
            if (disciplinas.length !== periodos.length){
                throw new Error;
            }

            const listaDisciplinasCurso = await cursoService.populacurso(curso, disciplinas, periodos);

            res.status(200).json(listaDisciplinasCurso);


        } catch (erro){
            console.log(erro)
            res.status(400).send('Erro')
        }

    }

    static findDisciplinesPerCourse = async (req, res) => {
        const idCourse = req.params.id
        try {
            const disciplinesPerCourse = await cursoService.findDisciplinesPerCourse(idCourse);
            const courseName = disciplinesPerCourse.name
            const disciplines = disciplinesPerCourse.Disciplines.map( discipline => discipline = {disciplina: discipline.name, periodo: discipline.Course_discs.term} )
            
            res.status(200).json({curso: courseName, disciplinas: disciplines})
            // res.status(200).json(disciplinesPerCourse)

        } catch (erro){
            res.status(500).json({message: "Ocorreu um erro"})
        
        }
    }


}

module.exports = CursoController