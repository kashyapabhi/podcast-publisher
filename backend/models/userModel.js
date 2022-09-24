const {Schema, model} = require('../Connection');

const mySchema = new Schema({
    Name : String,
    email : String,
    password : String,
    age : Number 
})

module.exports = model('users',mySchema);