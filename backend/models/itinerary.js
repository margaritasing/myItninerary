const mongoose = require("mongoose") // va a almacenar los datos de las ciudades cities

const itinerarySchema = new mongoose.Schema ({
    name: {type:String,require:true},
    city: {type:String,require:true},
    description:{type:String,require:true},
    price: {type:String,require:true},
    time: {type:String,require:true},    
    image: {type:String,require:true},
    imagen : [{
        imagen1 : {type:String,require:true},
        imagen2 : {type:String,require:true},
        imagen3 : {type:String,require:true},        
         }],
    tittle: [{
        tittle1 : {type:String,require:true},
        tittle2 : {type:String,require:true},
        tittle3 : {type:String,require:true},  
    }],
    commenta:[{
        comenta1 : {type:String,require:true},
        comenta2 : {type:String,require:true},
        comenta3 : {type:String,require:true}, 
    }],
   
})

const Itinerary = mongoose.model("itinerary",itinerarySchema)

module.exports = Itinerary; 
