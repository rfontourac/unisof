const ProfessorController = require('../controllers/ProfessorController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/professores', ProfessorController.buscaTodosProfessores)
        .post('/professores', ProfessorController.criaProfessores)


module.exports = router;