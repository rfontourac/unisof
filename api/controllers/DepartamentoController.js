const database = require('../models');
const { DepartamentoService } = require('../services')

const departamentoService = new DepartamentoService;

class DepartamentoController {
    static buscaDepartamentos = async (req, res, next) => {
        try{
            const params = req.query;
            const todosDepartamentos = await departamentoService.buscaRegistros(params);
            res.status(200).json(todosDepartamentos);

        } catch (err){
            next(err);
        
        }
    }
    
    static criaDepartamentos = async (req, res, next) => {
        try{
            const novosDados = req.body;
            const novoDepartamento = await departamentoService.adicionaRegistro(novosDados);
            res.status(200).json(novoDepartamento);

        } catch (err){
            next(err);
        
        }
        
    }

    static alteraDepartamentos = async (req, res, next) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoDepartamento = await departamentoService.alteraRegistro(novosDados, id);
            res.status(200).json(novoDepartamento);

        } catch (err){
            next(err);
        
        }
    }

    static excluiDepartamentos = async (req, res, next) => {
        try{
            const id = req.params.id
            await departamentoService.excluiRegistro(id);
            res.status(200).json({message: `O departamento de id ${id} foi excluído`});

        } catch (err){
            next(err);
        
        }
    }
   
}

module.exports = DepartamentoController