const database = require('../models');
const Service = require('./Service')

class AlunoService extends Service {
    constructor(nomeDoModelo){
        super('Students')
    }

    async registerStudentToCourse(studentId, courseId){
        const student = await database[this.nomeDoModelo].findOne( { where: { id: studentId } } )
        const course = await database['Courses'].findOne( { where: { id: courseId } } );
                
        await student.addCourse(course, { through: { retired: false, graduated: false } } )

        return `O aluno ${student.name} foi matriculado no curso ${course.name}`

    }

}

module.exports = AlunoService