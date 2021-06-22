const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');

module.exports = {
    async cadastrar(req, res) {
        try {
            const { userId } = req.params;
            console.log(userId);
            const { cep, rua, numero } = req.body;

            const usuario = await Usuario.findByPk(userId);

            if (!usuario) {
                return res.status(400).json({ error: 'Usuário não foi encontrado' });
            }

            const endereco = await Endereco.create({
                cep,
                rua,
                numero,
                userId,
            });

            return res.json(endereco);
        } catch (error) {
            console.log(error)
        }

    },

    async listar(req, res) {
        const { userId } = req.params;

        const usuario = await Usuario.findByPk(userId, {
            include: { association: 'enderecos'}
        });

        return res.json(usuario);
    }
}