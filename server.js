const express = require('express');
const authRoutes = require('./src/routes/auth');
const errorHandler = require('./src/middleware/error');

const app = express();

// MUY IMPORTANTE: Hacer que Express entienda JSON antes de las rutas
app.use(express.json());

// Para servir archivos estáticos como index.html
app.use(express.static('public'));

// Tus rutas
app.use('/api/auth', authRoutes);

// Manejo de errores
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});