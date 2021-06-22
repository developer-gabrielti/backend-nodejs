const Tecnologia = require('../models/Tecnologia');
const Usuario = require('../models/Usuario');

module.exports = {
    async cadastrar(req, res) {
        const { userId } = req.params;
        const { nome } = req.body;

        const usuario = await Usuario.findByPk(userId);

        if (!usuario) {
            return res.status(400).json({ error: 'Usuário não foi encontrado' });
        }

        const [ tecnologia ] = await Tecnologia.findOrCreate({
            where: {
                nome
            }
        });

        await usuario.addTecnologia(tecnologia); // metodos magicos

        return res.json(tecnologia);

    },

    async remover(req, res) {
        const { userId } = req.params;
        const { nome } = req.body;

        const usuario = await Usuario.findByPk(userId);

        if (!usuario) {
            return res.status(400).json({ error: 'Usuário não foi encontrado' });
        }

        const tecnologia = await Tecnologia.findOne({
            where: {nome}
        });

        await usuario.removeTecnologia(tecnologia);

        return res.json();

    },

    async listar(req, res) {
        const { userId } = req.params;

        const usuario = await Usuario.findByPk(userId, {
            include: { association: 'tecnologias', through: { attributes: [] }}
        });

        return res.json(usuario.tecnologias);
    }
}