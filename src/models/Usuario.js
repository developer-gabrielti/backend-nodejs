const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'userId', as: 'enderecos'});
        this.belongsToMany(models.Tecnologia, { foreignKey: 'userId', through: 'usuarioTecnologias', as: 'tecnologias'})
    }
}

module.exports = Usuario;