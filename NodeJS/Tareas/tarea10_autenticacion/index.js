import express from 'express';
import {UserRepository} from './user-repository.js';

const PORT = 3000;
const app = express();

//Middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Servidor bienvenida');
});

//Controller (simulación)
app.post('/register', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);

    try {
        const id = UserRepository.createNuevo({username, password});
        res.send({id}); //todo ok
    } catch (error) {
        res.status(400).json({error: error.message});//algo fue mal
    }
})
app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);

    try{
        const user = UserRepository.login({username, password});
        res.send({user});
    } catch (error){
        res.status(401).json({error: error.message});
    }

})
app.get('/logout', (req, res) => {} )
app.get('/protected', (req, res) => {} )



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

