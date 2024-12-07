import DBLocal from 'db-local'; //ES6  //npm install db-local
import crypto from 'node:crypto'; //modulo de nodejs para generar id
import bcrypt from 'bcrypt'; //npm install bcrypt

const {Schema} = new DBLocal({path: './db'});

const User = Schema('User', {
    _id: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

export class UserRepository {
    //No necesita constructor
    static createNuevo({username, password}){
        //Lógica del servidor
        //1. Validación de los datos
        //Validar el username
        if(typeof username !== 'string'){
            throw new Error('El username debe ser una cadena de texto');
        }
        if (username.length < 5){
            throw new Error('El username debe tener al menos 5 caracteres');
        }
        //Validar el password
        if (typeof password !== 'string'){
            throw new Error('El password debe ser una cadena de texto');
        }
        if (password.length < 5){
            throw new Error('El password debe tener al menos 5 caracteres');
        }
        //Asegurarse que el usuario no exista

        const user = User.findOne({username});
        if (user){
            throw new Error('El usuario ya existe');
        }
        
        //MongoDB tiene un id automático (número aleatorio)
        const _idGenerado = crypto.randomUUID();
        
        //Encriptar el password
        const hashedPassword = bcrypt.hashSync(password, 10); //salt 10 



        //Crear el usuario
        User.create({
            _id: _idGenerado,
            username,
            password: hashedPassword
        }).save();

        return _idGenerado;

    }
    static login({username, password}){
        //1. Validación de los datos


        const user = User.findOne({username});
        if (!user){
            throw new Error('El usuario no existe');
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword){
            throw new Error('Password incorrecto');
        }

        return {
            _id: user._id,
            username: user.username,
            password: user.password //no se hace
        }

    }
    
}

