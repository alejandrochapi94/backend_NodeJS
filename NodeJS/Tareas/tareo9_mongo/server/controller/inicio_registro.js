const ModelUser = require("../model");

// clase de inicio de sesion de usuario y registro de nuevo usuario

class inicio_registro {

    //metodo de inicio de sesion
    static async login(req, res) {
        try {
            const { name, email } = req.body;
            validacion_datos.validar_nombre(name);
            validacion_datos.validar_email(email);

            const user = await ModelUser.findOne({ name });
            if (!user) {
                return res.status(401).json({ message: "Usuario no encontrado" });
            }
            return res.status(200).json({ message: "Bienvenido" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    //metodo de registro de nuevo usuario
    static async register(req, res) {
        try {
            const { name, email } = req.body;
            validacion_datos.validar_nombre(name);
            validacion_datos.validar_email(email);

            const existingUser = await ModelUser.findOne({ name });
            if (existingUser) {
                return res.status(401).json({ message: "Usuario ya existe" });
            }
            
            const user = await ModelUser.create({ name, email });
            return res.status(200).json({ message: "Usuario registrado exitosamente" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

// clase de validacion de datos

class validacion_datos {
  
    static validar_nombre(name) {
        if (!/^[a-zA-Z]+$/.test(name)) {
            throw new Error("El nombre de usuario solo puede contener letras");
        }

        if (name.length > 10) {
            throw new Error("El nombre de usuario no puede tener más de 10 caracteres");
        }

        return true;
    }

    static validar_email(email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("El email no es valido");
        }

        if (email.length > 50) {
            throw new Error("El email no puede tener más de 50 caracteres");
        }

        return true;
    }
}

module.exports = inicio_registro;
