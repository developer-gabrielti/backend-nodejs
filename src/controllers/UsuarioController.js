const Usuario = require('../models/Usuario');

module.exports = {

    async listar(req, res) {
        const user = await Usuario.findAll();
        return res.json(user);
    },
    async cadastro(req, res) {
        try {
            const { nome, email } = req.body;

            const usuario = await Usuario.create({ nome, email });

            return res.json(usuario);
        } catch (error) {
            console.log(error)
        }
    }
}