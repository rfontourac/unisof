const Sequelize = require('sequelize')
const BaseError = require('../errors/BaseError')
const DatabaseError = require('../errors/DatabaseError');
const Error404 = require('../errors/Error404')

function errManager (err, req, res, next) {
    if (err instanceof Sequelize.DatabaseError){
//        res.status(500).send({message: err.message, status: err.status});    
        new DatabaseError().sendMessage(res);
    } else if (err instanceof Error404) {
        err.sendMessage(res);
    }else{
        console.log(err.name)
        new BaseError(err.message).sendMessage(res);
        
        //res.status(500).send(err)
    
    }
}

module.exports = errManager;