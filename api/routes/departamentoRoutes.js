const DepartamentoController = require('../controllers/DepartamentoController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/departamentos', DepartamentoController.buscaTodosDepartamentos)
        .post('/departamentos', DepartamentoController.criaDepartamentos)


module.exports = router;