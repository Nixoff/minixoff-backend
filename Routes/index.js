const express = require('express');
const router = express.Router();

router.get('/', (rez, res) => {
    return res.send({message: 'Essa informação é muito importante. Usuários não autorizados não deveriam recebê-las!'});
})

router.post('/', (rez, res) => {
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
})

module.exports = router;