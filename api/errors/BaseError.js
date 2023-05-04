class BaseError extends Error{
    constructor(message = "Erro interno de servidor", status = 500){
        super();
        this.message = message;
        this.status = status;
    }

    sendMessage(res) {
        res
            .status(this.status)
            .send({
                message: this.message,
                status: this.status
            })
    }

}

module.exports = BaseError