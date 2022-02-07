const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos} = citiesController // desestructuración del controlador de Ciudades



Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)



module.exports = Router