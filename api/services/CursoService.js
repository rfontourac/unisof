const database = require('../models');
const Service = require('./Service')

class CursoService extends Service {
    constructor(nomeDoModelo){
        super('Courses')
    }

    async populacurso(idCourse, disciplinas, periodos){
        const disciplinasMatriculadas = [];
        // const curso = await database[this.nomeDoModelo].findOne({where: {id: idCourse}});

        for (let i=0; i<disciplinas.length; i++){
            let matricula = {
                DisciplineId: disciplinas[i],
                CourseId: idCourse,
                term: periodos[i]
            }

            await database['Course_discs'].create(matricula);
            // let matricula = curso.addDiscipline({DisciplineId: disciplinas[i], term: periodos[i]})

            disciplinasMatriculadas.push(matricula);

        }

        return disciplinasMatriculadas;

    }

    async findDisciplinesPerCourse(curso){ 
        return await database[this.nomeDoModelo].findOne(
            {
                where: {
                    id: curso
                }, 
                include: 'Disciplines'
            })   
    }

}

module.exports = CursoService