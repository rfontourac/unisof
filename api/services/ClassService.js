const database = require('../models');
const Service = require('./Service')

class ClassService extends Service {
    constructor(nomeDoModelo){
        super('Classes')
    }

    // async createClass(professorId, disciplineId){
    //     return database['Classes'].create({ProfessorId: professorId, DisciplineId: disciplineId, startdate: NOW()});

    // }

}

module.exports = ClassService