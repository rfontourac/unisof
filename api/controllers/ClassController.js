const { NOW } = require('sequelize');
const database = require('../models');
const { ClassService } = require('../services')

const classService = new ClassService;

class ClassController {
    static findClasses = async (req, res, next) => {
        try{
            const params = req.query;
            const todosDisciplinas = await classService.buscaRegistros(params);
            res.status(200).json(todosDisciplinas);

        } catch (err){
            next(err);
        
        }
    }
    
    static createClass = async (req, res, next) => {
        
        const classObject = req.body
        
        try{
            const newClass = await classService.adicionaRegistro(classObject);
            res.status(200).json(newClass);
        
        } catch(err){
            next(err);
        
        }
    }

    static alterClass = async (req, res, next) => {
        try{
            const id = req.params.id
            const novosDados = req.body;
            const novoDisciplina = await disciplinaService.alteraRegistro(novosDados, id);
            res.status(200).json(novoDisciplina);

        } catch (err){
            next(err);
        
        }
    }

    static deleteClass = async (req, res, next) => {
        try{
            const id = req.params.id
            await disciplinaService.excluiRegistro(id);
            res.status(200).json({message: `O Disciplina de id ${id} foi excluído`});

        } catch (err){
            next(err);
        
        }
    }


}

module.exports = ClassController