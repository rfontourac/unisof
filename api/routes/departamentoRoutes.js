const DepartamentoController = require('../controllers/DepartamentoController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/departamentos', DepartamentoController.buscaDepartamentos)
        .post('/departamentos', DepartamentoController.criaDepartamentos)
        .put('/departamentos/:id', DepartamentoController.alteraDepartamentos)
        .delete('/departamentos/:id', DepartamentoController.excluiDepartamentos)


module.exports = router;