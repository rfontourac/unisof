const { NOW } = require('sequelize');
const database = require('../models');
const Service = require('./Service')

class ProfessorService extends Service {
    constructor(nomeDoModelo){
        super('Professors')
    }

    async evaluateStudent(values){
        const record = await database['Records'].findOne({where: {ClassId: values.ClassId, StudentId: values.StudentId}})
        if (record.dataValues.aprooved != null){
            throw new Error('Disciplina já avaliada.')
        }

        if ( values.grade && values.attendance && values.StudentId && values.ClassId ){
            const newValues = {
                grade: values.grade,
                attendance: values.attendance
            }
            
            values.grade >= 7 && values.attendance >= 0.7 ? newValues.aprooved = true : newValues.aprooved = false

            return record.update(newValues);
             
        } else {
            throw new Error('Não foram informados os parâmetros corretos.')
        
        }

    }

    async closeClass(classId){
        
        if (!(await database['Classes'].findOne({where: {id: classId}}))){
            throw new Error('Turma inexistente.')
        }
        
        const classObject = await database['Classes'].findOne({where: {id: classId}, include: 'Records'})
        const unavaliatedStudents = classObject.Records.filter(record => record.aprooved === null)

        

        if ( unavaliatedStudents.length != 0){
            throw new Error('Existem alunos ainda não avaliados na turma.')
        }
        
        await classObject.update({active: false});

        return `A turma de id ${classObject.id} foi encerrada com sucesso.`
    }

}

module.exports = ProfessorService