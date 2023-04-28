const bodyParser = require('body-parser')
const departamentos = require('./departamentoRoutes.js')
const professores = require('./professorRoutes.js')

module.exports = function (app) {
    
    app.use(
        bodyParser.json(),
        departamentos,
        professores
    )
}