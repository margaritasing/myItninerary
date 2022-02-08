const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerCiudades, ObtenerItynerarios} = citiesController // desestructuración del controlador de Ciudades



Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerCiudades)


Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)



module.exports = Router