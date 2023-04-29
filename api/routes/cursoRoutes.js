const CursoController = require('../controllers/CursoController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/cursos', CursoController.buscaCursos)
        .post('/cursos', CursoController.criaCursos)
        .put('/cursos/:id', CursoController.alteraCursos)
        .delete('/cursos/:id', CursoController.excluiCursos)


module.exports = router;