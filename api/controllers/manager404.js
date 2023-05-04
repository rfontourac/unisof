const Error404 = require('../errors/Error404')

function manager404 (req, res, next) {
    const error404 = new Error404();
    next(error404);
}

module.exports = manager404