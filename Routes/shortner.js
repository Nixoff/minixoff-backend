const express = require('express');
const router = express.Router();
const Shortners = require('../model/shortner')

const site = 'minix.gq/';

/* GET Homepage */
router.get('/', function(req, res, next) {
    return res.send(console.error('Oi test'))
  });

function generateCript() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0;i<11;i++)
    text += possible.charAt(Math.floor(Math.random()*possible.length));
    return text
}

router.post('/new', (req,res,next)=>{
    const url = req.body.url;
    // console.log(url)
    // res.send(url)
    const code = generateCript();
    res.send(site + code)
})








router.post('/create', async (req, res) => {
    const { code, url, hits, created } = req.body;
    // if (!code || !url || !hits ) return res.status(400).send({ error: 'Dados insuficientes!'});

    try {
        if(await Shortners.findOne({ code })) return res.status(400).send({ error: 'URL encurtada já registrado!'});

        const shortner = await Shortners.create(req.body);
        shortner.url = undefined;

        return res.status(201).send({shortner});

    } 
    catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar url encurtada!' });
    }
});
module.exports = router;