const DisciplinaController = require('../controllers/DisciplinaController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/disciplinas', DisciplinaController.buscaDisciplinas)
        .post('/disciplinas', DisciplinaController.criaDisciplinas)
        .put('/disciplinas/:id', DisciplinaController.alteraDisciplinas)
        .delete('/disciplinas/:id', DisciplinaController.excluiDisciplinas)


module.exports = router;