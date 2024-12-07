import db from "db-local";
import bcrypt from "bcrypt";
import crypto from "node:crypto";



const { schema } =  new db.Schema({
    name: String,
    email: String,
    password: String
});

const User = db.model("User", schema);

export default User;


class UserRepository {

    static async createUser(user) {

        //verificar si el usuario existe
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        
        // hashear la contraseña
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = new User({ ...user, password: hashedPassword });
        return newUser.save();
    }
   
}
