const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'enderecos' // quando undersCored for false, parece que se torna necessário informar qual é nome da correto da table.
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'userId', as: 'user' })
    }
}

module.exports = Endereco;