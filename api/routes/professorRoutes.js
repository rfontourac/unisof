const ProfessorController = require('../controllers/ProfessorController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/professores', ProfessorController.buscaProfessores)
        .post('/professores', ProfessorController.criaProfessores)


module.exports = router;