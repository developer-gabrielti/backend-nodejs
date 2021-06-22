const express = require('express');
const app = express();
const routes = require('./router/routes');

require('./database');

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})