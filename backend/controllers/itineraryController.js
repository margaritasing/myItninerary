const Itinerary = require("../models/itinerary.js")

const itynerarController = {
    ObteneDatos:async(req,res) => {
      
        let itinerary
        let error = null
        try {           
            itinerary = await Itinerary.find()
            console.log(itinerary)
            
        } catch (err) {
            error = err
            console.log(error)
            
        }

        res.json({            
            response:error?"ERROR":{itinerary},
            success:error?false:true,
            error:error
        })

    } // req=require res=response
}



module.exports = itynerarController