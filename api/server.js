const routes = require('./routes')
const Express = require('express')
const errManager = require('./controllers/errManager');
const manager404 = require('./controllers/manager404');

const app = Express();
const port = 3000;

routes(app);

app.use(manager404);

app.use(errManager);

app.listen(port, (err) => {
    
    if (err){
        throw new Error(err);
    }

    console.log(`Servidor ouvindo na porta ${port}`)

})

