const bodyParser = require('body-parser')
const departamentos = require('./departamentoRoutes.js')
const professores = require('./professorRoutes.js')
const alunos = require('./alunoRoutes.js')
const disciplinas = require('./disciplinaRoutes.js')
const cursos = require('./cursoRoutes.js')
const classes = require('./classRoutes.js')


module.exports = function (app) {
     
    app.use(
        bodyParser.json(),
        departamentos,
        professores,
        alunos,
        disciplinas,
        cursos,
        classes
    )
}