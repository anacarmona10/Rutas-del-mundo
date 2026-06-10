const express = require('express');
const router = express.Router();

const {
    crearPaquete
} = require('../controllers/paquetesController');

router.post('/', crearPaquete);

module.exports = router;