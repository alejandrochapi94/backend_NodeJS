const datos = [

];	

exports.getAllUsers = (req, res) => {
  res.json(datos);

};
exports.createUser = (req, res) => {
    const newdatos ={ 
        id: datos.length + 1,
        ...req.body
    };
    datos.push(newdatos);
    res.status(201).json(newdatos);
};  
