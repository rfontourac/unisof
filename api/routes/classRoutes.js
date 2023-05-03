const ClassController = require('../controllers/ClassController')
const { Router } = require('express')

const router = Router();

    router  
        .get('/turmas', ClassController.findClasses)
        .post('/turmas', ClassController.createClass)
        .put('/turmas/:id', ClassController.alterClass)
        .delete('/turmas/:id', ClassController.deleteClass)


module.exports = router;