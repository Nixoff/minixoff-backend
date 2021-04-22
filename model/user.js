const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, unique: false },
    username: { type:String,required: true, unique: true, lowercase:true },
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true, select: false },
    created: { type: Date, default: Date.now }
});



module.exports = mongoose.model('User', UserSchema);