const {Schema, model} = require('../Connection')


const myPodcast = new Schema ({
    title : String,
    genre : String,
    image : String,
    file : String,
    createdBy : String,
    createdAt : Date,
})


module.experts = model('podcast', myPodcast);