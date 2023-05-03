const AlunoController = require('../controllers/AlunoController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/alunos', AlunoController.buscaAlunos)
        .post('/alunos', AlunoController.criaAlunos)
        .post('/alunos/matriculaaluno/', AlunoController.registerStudentInCourse)
        .post('/alunos/matriculaemturma/', AlunoController.registerToClass)
        .put('/alunos/:id', AlunoController.alteraAlunos)
        .delete('/alunos/:id', AlunoController.excluiAlunos)


module.exports = router;