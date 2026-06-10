const paqueteModel = require('../models/paquetesModel');

const crearPaquete = (req, res) => {

    const nuevoPaquete = req.body;

    paqueteModel.crearPaquete(
        nuevoPaquete,
        (err, resultado) => {

            if (err) {
                return res.status(500).json({
                    mensaje: 'Error al crear paquete',
                    error: err
                });
            }

            res.status(201).json({
                mensaje: 'Paquete creado correctamente',
                id: resultado.insertId
            });
        }
    );
};

module.exports = {
    crearPaquete
};