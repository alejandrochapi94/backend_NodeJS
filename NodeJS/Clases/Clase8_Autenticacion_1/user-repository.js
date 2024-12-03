import DBLocal from 'db-local';
import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
const {Schema} = new DBLocal({path: './db'});

const User = Schema('User', {
    _id: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

export class UserRepository {
    static async create ({username, password}) {
        //1. Validaciones de username
        if (typeof username !== 'string') {
            throw new Error('El username debe ser una cadena de texto');
        }
        if (username.length < 5) {
            throw new Error('El username debe tener al menos 5 caracteres');
        }
        //2. Validaciones de password
        if (typeof password !== 'string') {
            throw new Error('El password debe ser una cadena de texto');
        }
        if (password.length < 4) {
            throw new Error('El password debe tener al menos 4 caracteres');
        }

        //2 Asegurarque de que el username existe
        const user = User.findOne({username});
        if (user) {
            throw new Error('El username ya existe');
        }

        const id = crypto.randomUUID();
        const hashedPassword = await bcrypt.hash(password, 10); //sal 10
        User.create({
            _id: id, 
            username, 
            password: hashedPassword 
        }).save()

            return id

    }
    static login ({username, password}) {
        Validacion.username(username);
        Validacion.password(password);

        const user = User.findOne({username});
        if (!user) {
            throw new Error('El username no existe');
        }   

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            throw new Error('El password es incorrecto');
        }

        return {
            _id: user._id,
            username: user.username,
            password: user.password
        }
    }


}

class Validacion {
    static username (username) {
        //1. Validaciones de username
        if (typeof username !== 'string') {
            throw new Error('El username debe ser una cadena de texto');
        }
        
    }

    static password (password) {    
        //2. Validaciones de password
        if (typeof password !== 'string') {
            throw new Error('El password debe ser una cadena de texto');
        }
    }

}

