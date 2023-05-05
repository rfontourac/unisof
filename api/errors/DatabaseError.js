const BaseError = require("../errors/BaseError");

class DatabaseError extends BaseError{
    constructor(message="Parâmetros de busca incorretos", status=400){
        super(message, status)
    }

}

module.exports = DatabaseError