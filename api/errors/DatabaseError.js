const BaseError = require("../errors/BaseError");

class DatabaseError extends BaseError{
    constructor(message, status){
        super(message="Parâmetros de busca incorretos", status=400)
    }

}

module.exports = DatabaseError