const ProfessorController = require('../controllers/ProfessorController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/professores', ProfessorController.buscaProfessores)
        .post('/professores', ProfessorController.criaProfessores)
        .put('/professores/avaliaaluno', ProfessorController.evaluateStudent)
        .put('/professores/:id', ProfessorController.alteraProfessores)
        .delete('/professores/:id', ProfessorController.excluiProfessores)


module.exports = router;