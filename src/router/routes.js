const express = require('express');
const routes = express.Router();

const UsuarioController = require('../controllers/UsuarioController.js');
const EnderecoController = require('../controllers/EnderecoController.js');
const TecnologiaController = require('../controllers/TecnologiaController');
const ReportController = require('../controllers/ReportController');

routes.get('/usuario', UsuarioController.listar);
routes.post('/usuario', UsuarioController.cadastro);

routes.post('/usuario/:userId/enderecos', EnderecoController.cadastrar);
routes.get('/usuario/:userId/enderecos', EnderecoController.listar);

routes.post('/usuario/:userId/tecnologias', TecnologiaController.cadastrar);
routes.get('/usuario/:userId/tecnologias', TecnologiaController.listar);
routes.delete('/usuario/:userId/tecnologias', TecnologiaController.remover);

routes.get('/report', ReportController.show);

module.exports = routes;