//Esto es pa' configurar la base de datos

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agencia_viajes'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }

    console.log('Base de datos conectada');
});

module.exports = connection;