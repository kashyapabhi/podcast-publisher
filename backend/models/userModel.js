const {Schema, model} = require('../Connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number 
})

module.exports = model('users',mySchema);