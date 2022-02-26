const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerCiudades, ObtenerItynerarios} = citiesController // desestructuración del controlador de Ciudades
const usersControllers = require ("../controllers/usersControllers")
const {nuevoUsuario} = usersControllers


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerCiudades)


Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)

Router.route("/signup")
.post(nuevoUsuario)


module.exports = Router