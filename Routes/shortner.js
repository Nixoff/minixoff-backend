const express = require('express');
const router = express.Router();

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

module.exports = router;