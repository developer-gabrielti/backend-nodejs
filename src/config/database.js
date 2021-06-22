//undersCored como false, para poder seguir o padrão do sequelize -> updateAt, userId, createdAt

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Asdw1998@',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: false,
    }
};