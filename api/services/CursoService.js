const database = require('../models');
const Service = require('./Service')

class CursoService extends Service {
    constructor(nomeDoModelo){
        super('Courses')
    }

    async populacurso(idCourse, disciplinas, periodos){
        const disciplinasMatriculadas = [];
        const course = await database[this.nomeDoModelo].findOne({where: {id: idCourse}});

        for (let i=0; i<disciplinas.length; i++){
            
            let disciplina = await database['Disciplines'].findOne({where: {id: disciplinas[i]}});
            let matricula = course.addDiscipline(disciplina, { through: {term: periodos[i] } })

            disciplinasMatriculadas.push({curso: course.name, disciplina: disciplina.name, periodo: periodos[i]});

        }

        return disciplinasMatriculadas;

    }

    async findCourseRelations(courseId, model){ 
        return await database[this.nomeDoModelo].findOne(
            {
                where: {
                    id: courseId
                }, 
                include: model
            })   
    }

}

module.exports = CursoService

// async findDisciplinesPerCourse(courseId, model){ 
//     return await database[this.nomeDoModelo].findOne(
//         {
//             where: {
//                 id: curso
//             }, 
//             include: 'Disciplines'
//         })   
// }

// async findStudentsPerCourse(curso){ 
//     return await database[this.nomeDoModelo].findOne(
//         {
//             where: {
//                 id: curso
//             }, 
//             include: 'Students'
//         })   
// }