const { tracksModel } = require('../models');



/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const  getItems =  async (req, res) => {
    const data = await tracksModel.find({})
    res.send({ data }); // NOTE: data:data = {data}

 }
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Instertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({data})
};

/**
 * Actualizar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const upadateItem = (req, res) => {};

/**
 * Eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};

module.exports =  {getItems, getItem, createItem, upadateItem, deleteItem}