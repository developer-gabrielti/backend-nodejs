//recebe a conexão da base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Tecnologia = require('../models/Tecnologia');

Usuario.init(connection);
Endereco.init(connection);
Tecnologia.init(connection);

Usuario.associate(connection.models);
Endereco.associate(connection.models);
Tecnologia.associate(connection.models);

module.exports = connection;