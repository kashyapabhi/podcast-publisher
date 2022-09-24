const mongoose = require('mongoose');
const dbName = 'Podcast2000'
const url = `mongodb+srv://kashyapabhi:kashyap123@cluster0.j4yobgx.mongodb.net/${dbName}?retryWrites=true&w=majority`



mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;
