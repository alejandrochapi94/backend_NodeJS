import mongoose from 'mongoose';
const userModel = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        name: {
            type: String,
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

const ModelUser = mongoose.model('registros', userModel);

export default ModelUser;
//module.exports = ModelUser;