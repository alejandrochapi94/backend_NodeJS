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
        }
    },
    {
        timestamps: true,
        versionKey: false   
    }
)

const ModelUser = mongoose.model('users', userModel);

module.exports = ModelUser;