const Usuario = require('../models/Usuario')

const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        // encontra todos os usuarios que tenham um email que terminem com gmail
        // desses usuarios eu quero buscar todos os usuarios que morarem na rua alberto alves cabral
        // desses usuarios eu quero buscar as tecnologias que começam com react

        const usuario = await Usuario.findAll({
            attributes: ['nome', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'enderecos', where: { rua: 'Rua Alberto Alves Cabral' } }, // endereços
                {
                    association: 'tecnologias',
                    where: {
                        nome: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
        })

        return res.json(usuario);
    }
}