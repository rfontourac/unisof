const routes = require('./routes')
const Express = require('express')

const app = Express();
const port = 3000;

routes(app);

app.listen(port, (err) => {
    
    if (err){
        throw new Error(err);
    }

    console.log(`Servidor ouvindo na porta ${port}`)

})

