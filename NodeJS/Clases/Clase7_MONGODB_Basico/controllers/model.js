//Modelo a usar para la base de datos con Mongoose
const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String
        },
        password: {
            type: String
        },

         direccion: {
            type: String
         }
    },
    {
        timestamps: true,
        versionKey: false   
    }
)

const ModelUser = mongoose.model('users', userModel);

module.exports = ModelUser;