const Sequelize = require('sequelize')
const BaseError = require('../errors/BaseError')
const DatabaseError = require('../errors/DatabaseError');
const Error404 = require('../errors/Error404')
const ValidationError = require('../errors/ValidationError')

function errManager (err, req, res, next) {
    if (err instanceof Sequelize.DatabaseError){
        //new DatabaseError(err.message).sendMessage(res);
        res.status(500).json(err)

    } else if (err instanceof Sequelize.ValidationError){
        new ValidationError(err).sendMessage(res)
        
    } else if (err instanceof Error404) {
        err.sendMessage(res);
    
    }else{
        new BaseError(err.message, err.cause).sendMessage(res);
        
    }
}

module.exports = errManager;