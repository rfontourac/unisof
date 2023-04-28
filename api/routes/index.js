const bodyParser = require('body-parser')
const departamentos = require('./departamentoRoutes.js')

module.exports = function (app) {
    
    app.use(
        bodyParser.json(),
        departamentos
    )
}