import Express from "express";

const app = Express();
const port = 3000;


app.get('/', (req, res) => {
    res.status(200).send({message: "Conexão OK."})
})


app.listen(port, (err) => {
    console.log(`Servidor escutando na porta ${port}`)
})