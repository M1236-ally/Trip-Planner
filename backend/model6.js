const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//const collection=mongoose.Collecti

const touristPlaces=new Schema({
    Destination:{
        type:String
    },

        PlaceImag:{
        type:[String]
        },

        PlaceName:{
        type:[String]
        },
    
        Date:{
            type:String
        },
    
    
            HotelImag:{
            type:[String]
            },
    
            HotelName:{
             type:[String]
            }
    
});

module.exports =mongoose.model('PlaceHotels',touristPlaces);