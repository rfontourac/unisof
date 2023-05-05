const BaseError = require("./BaseError");

class ValidationError extends BaseError {
    constructor(err){
        const errMessages = err.errors
            .map( error => error = error.message)
            .join('; ')
        
        super(`Ocorreram os seguintes erros: ${errMessages}`, 400);

    }
}

module.exports = ValidationError