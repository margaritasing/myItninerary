const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos} = citiesController // desestructuración del controlador de Ciudades

const itynerarController = require("../controllers/itineraryController")
const {ObteneDatos} = itynerarController

Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObteneDatos)

module.exports = Router