const express = require('express');
const cors = require('cors');

const paquetesRoutes = require('./routes/paquetesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/paquetes', paquetesRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});