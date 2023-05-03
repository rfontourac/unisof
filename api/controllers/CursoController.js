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

    static populateCourse = async (req, res) => {
        try{
            const lists = req.body;
            const course = req.params.id
            const disciplines = lists.disciplinas
            const terms = lists.periodos
            
            if (disciplines.length === terms.length){
                const courseDisciplineList = await cursoService.populateCourse(course, disciplines, terms);
                res.status(200).json(courseDisciplineList);
                
            } else {
                throw new Error;
            }

        } catch (err){
            console.log(err)
            res.status(400).send('Erro')

        }

    }

    static findCourseRelations = async (req, res) => {
        const idCourse = req.params.id
        const model = req.params.model
        try {
            const courseRelation = await cursoService.findCourseRelations(idCourse, model);
            const courseName = courseRelation.name
            const relations = courseRelation[model].map( student => student = student.name  )
                        
            res.status(200).json({curso: courseName, [model]: relations})
                        
        } catch (err){
            console.log(err)
            res.status(500).json({message: "Ocorreu um erro"})
        
        }
    }


}

module.exports = CursoController



// static findDisciplinesPerCourse = async (req, res) => {
//     const idCourse = req.params.id
//     try {
//         const disciplinesPerCourse = await cursoService.findDisciplinesPerCourse(idCourse);
//         const courseName = disciplinesPerCourse.name
//         const disciplines = disciplinesPerCourse.Disciplines.map( discipline => discipline = {disciplina: discipline.name, periodo: discipline.Course_discs.term} )
        
//         res.status(200).json({curso: courseName, disciplinas: disciplines})
        
//     } catch (erro){
//         res.status(500).json({message: "Ocorreu um erro"})
    
//     }
// }

// static findStudentsPerCourse = async (req, res) => {
//     const idCourse = req.params.id
//     try {
//         const studentsPerCourse = await cursoService.findStudentsPerCourse(idCourse);
//         const courseName = studentsPerCourse.name
//         const students = studentsPerCourse.Students.map( student => student = student.name  )
        
//         res.status(200).json({curso: courseName, alunos: students})
                    
//     } catch (erro){
//         console.log(erro)
//         res.status(500).json({message: "Ocorreu um erro"})
    
//     }
// }