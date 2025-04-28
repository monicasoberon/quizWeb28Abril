const express = require('express');
const app = express();
const apiRoutes = require('./src/app/api/auth/Route');
const errorHandler = require('./src/app/backend/middleware/Error');

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});