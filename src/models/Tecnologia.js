const { Model, DataTypes } = require('sequelize');

class Tecnologia extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'tecnologias' // quando undersCored for false, parece que se torna necessário informar qual é nome da correto da table.
        })
    }

    static associate(models) {
        this.belongsToMany(models.Usuario, { foreignKey: 'tecId', through: 'usuarioTecnologias', as: 'usuarios'})
    }
}

module.exports = Tecnologia;