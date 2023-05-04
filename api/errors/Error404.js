const BaseError = require("./BaseError");

class Error404 extends BaseError{
    constructor(message, status){
        super(message="O dados não foram encontrados", status=404)
    }

}

module.exports = Error404