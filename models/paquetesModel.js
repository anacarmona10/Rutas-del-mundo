//modelo de datos

const db = require('../config/db');

const crearPaquete = (datos, callback) => {

    const sql = `
        INSERT INTO paquetesTuristicos
        (nombre, destino, duracion, precioBase, descripcion, disponibilidad)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            datos.nombre,
            datos.destino,
            datos.duracion,
            datos.precioBase,
            datos.descripcion,
            datos.disponibilidad
        ],
        callback
    );
};

module.exports = {
    crearPaquete
};