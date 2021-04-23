const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) => {
    console.log('INFORMAÇÃO DO TOKEN DE USUÁRIO', res.locals.auth_data)
    return res.send({message: 'Essa informação é muito importante. Usuários não autorizados não deveriam recebê-las!'});
})

router.post('/', (req, res) => {
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
})

module.exports = router;