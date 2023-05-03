const database = require('../models');
const Service = require('./Service')

class CursoService extends Service {
    constructor(nomeDoModelo){
        super('Courses')
    }

    async populateCourse(idCourse, disciplines, terms){
        const registeredDisciplines = [];
        const course = await database[this.nomeDoModelo].findOne({where: {id: idCourse}});

        for (let i=0; i<disciplines.length; i++){
            
            let discipline = await database['Disciplines'].findOne({where: { id: disciplines[i]}});
            let registration = course.addDiscipline(discipline, { through: { term: terms[i] } })

            registeredDisciplines.push({curso: course.name, disciplina: discipline.name, periodo: terms[i]});

        }

        return registeredDisciplines;

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