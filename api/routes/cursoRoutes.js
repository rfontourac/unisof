const CursoController = require('../controllers/CursoController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/cursos', CursoController.buscaCursos)
        .get('/cursos/:id/busca/:model', CursoController.findCourseRelations)
        .post('/cursos', CursoController.criaCursos)
        .post('/cursos/:id/populacurso', CursoController.populateCourse)
        .put('/cursos/:id', CursoController.alteraCursos)
        .delete('/cursos/:id', CursoController.excluiCursos)


module.exports = router;