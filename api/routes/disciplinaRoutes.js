const DisciplinaController = require('../controllers/DisciplinaController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/disciplinas', DisciplinaController.buscaDisciplinas)
        .post('/disciplinas', DisciplinaController.criaDisciplinas)


module.exports = router;