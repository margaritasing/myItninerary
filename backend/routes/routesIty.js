const Router = require("express").Router();
const itynerarController = require("../controllers/itineraryController")
const {ObteneDatos} = itynerarController // desestructuración del controlador de Ciudades



Router.route("/itynerary") // "datos" parte de la url de la consulta
.get(ObteneDatos)



module.exports = Router