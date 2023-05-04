const database = require('../models');
const { DepartamentoService } = require('../services')

const departamentoService = new DepartamentoService;

class DepartamentoController {
    static buscaDepartamentos = async (req, res) => {
        try{
            const params = req.query;
            const todosDepartamentos = await departamentoService.buscaRegistros(params);
            res.status(200).json(todosDepartamentos);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
    
    static criaDepartamentos = async (req, res) => {
        try{
            const novosDados = req.body;
            const novoDepartamento = await departamentoService.adicionaRegistro(novosDados);
            res.status(200).json(novoDepartamento);

        } catch (err){
            res.status(500).send(err.message);
        
        }
        
    }

    static alteraDepartamentos = async (req, res) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoDepartamento = await departamentoService.alteraRegistro(novosDados, id);
            res.status(200).json(novoDepartamento);

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }

    static excluiDepartamentos = async (req, res) => {
        try{
            const id = req.params.id
            await departamentoService.excluiRegistro(id);
            res.status(200).json({message: `O departamento de id ${id} foi excluído`});

        } catch (err){
            res.status(500).send(err.message);
        
        }
    }
   
}

module.exports = DepartamentoController