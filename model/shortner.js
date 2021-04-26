const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const ShortnerSchema = new Schema({
    code: { type: String, required: true, unique: true },
    url: { type:String,required: true},
    hits: { type: Number},
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shortner', ShortnerSchema);

//const Shortner = mongoose.model('Shortner')

/* new Shortner({
    code: "V7Pv3CrfVPb",
    url: "https://www.youtube.com/c/GuiadoProgramador/videos",
    hits: null,
    created: null
}).save().then(() => {
    console.log("URL encurtado com sucesso!")
}).catch((err) => {
    console.error("Houve um erro ao encurtar o url."+ err)
})
*/
