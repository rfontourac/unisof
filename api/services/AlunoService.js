const database = require('../models');
const Service = require('./Service');
// const config = require('../config/config.json')
// const { Sequelize } = require('sequelize');
// console.log(config)

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

    async registerStudentToClass(studentId, classId){
        
        const student = await database[this.nomeDoModelo].findOne( { where: { id: studentId }, include: 'Records' } )
        const studentNewClass = await database['Classes'].findOne( { where: { id: classId } } )
        const discipline = await database['Disciplines'].findOne( { where: { id: studentNewClass.DisciplineId } } );
        const studentDiscipline = await database['Student_discs'].findOne( { where: { DisciplineId: studentNewClass.DisciplineId, StudentId: studentId } } );

        const newRecord = {
            StudentId: studentId,
            ClassId: classId,
            DisciplineId: studentNewClass.DisciplineId,
            ProfessorId: studentNewClass.ProfessorId,

        }
        
        await database.sequelize.transaction( async (t) => {
            await student.addClass(studentNewClass, {transaction: t});
            
            if (!(await student.hasDiscipline(discipline))){
                await student.addDiscipline(discipline, { through: {qttcoursed: 1}, transaction: t }  )
                                                
            } else if(studentDiscipline.qttcoursed !== null && studentDiscipline.qttcoursed < 4){
                await studentDiscipline.update({qttcoursed: studentDiscipline.qttcoursed + 1}, {transaction: t} )
                            
            } else {
                throw new Error('O aluno já chegou ao limite de tentativas da disciplina.')
                            
            }
            
            if ( student.Records.filter( record => record.dataValues.ClassId === classId).length === 0 ){
                await database['Records'].create(newRecord, {transaction: t});
                
            } else {
                throw new Error('Já existe um registro de histórico desta turma para este aluno.')

            }

        })

        return `O aluno ${student.name} foi matriculado na turma ${studentNewClass.id} da disciplina ${discipline.name}`

    }

}

module.exports = AlunoService