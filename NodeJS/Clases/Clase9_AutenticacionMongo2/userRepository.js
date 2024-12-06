//import DBLocal from 'db-local';
import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
//const {Schema} = new DBLocal({path: './db'});

import ModelUser from './models/userModel.js';
/*
const User = Schema('User', {
    _id: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
})
*/
export class UserRepository {
    static async create ({name, password}) {
        //1. Validaciones de name
        if (typeof name !== 'string') {
            throw new Error('El name debe ser una cadena de texto');
        }
        if (name.length < 5) {
            throw new Error('El name debe tener al menos 5 caracteres');
        }
        //2. Validaciones de password
        if (typeof password !== 'string') {
            throw new Error('El password debe ser una cadena de texto');
        }
        if (password.length < 4) {
            throw new Error('El password debe tener al menos 4 caracteres');
        }

        //2 Asegurarque de que el name existe
        const user = await ModelUser.find({name});
        if (user.length > 0) {
            //console.log(user);
            throw new Error('El name ya existe');
        }

        const id = crypto.randomUUID();
        console.log(id);
        const hashedPassword = await bcrypt.hash(password, 10); //sal 10

        const newUser = {
            _id: id, 
            name, 
            password: hashedPassword 
        };
        
        await ModelUser.create(newUser);

            return id

    }
    static async login ({name, password}) {
        Validacion.name(name);
        Validacion.password(password);
    
        const user = await ModelUser.find({name});
        if (user.length === 0) {
            throw new Error('El name no existe');
        }
    
        const isValidPassword = bcrypt.compareSync(password, user[0].password);
        if (!isValidPassword) {
            throw new Error('El password es incorrecto');
        }
    
        return {
            _id: user[0]._id,
            name: user[0].name,
            // No es recomendable devolver la contraseña en la respuesta
            // password: user[0].password
        }
    }


}

class Validacion {
    static name (name) {
        //1. Validaciones de name
        if (typeof name !== 'string') {
            throw new Error('El name debe ser una cadena de texto');
        }
        
    }

    static password (password) {    
        //2. Validaciones de password
        if (typeof password !== 'string') {
            throw new Error('El password debe ser una cadena de texto');
        }
    }

}

