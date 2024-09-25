const mongoose = require('mongoose')

async function dbconnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/productos');
        console.log('Conexión exitosa a la base de datos');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}
module.exports= dbconnect;