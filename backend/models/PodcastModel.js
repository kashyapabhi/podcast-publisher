const {Schema, model, Types} = require('../Connection')


const myPodcast = new Schema ({
    title : String,
    description: String,
    genre : String,
    image : String,
    file : String,
    createdBy : {type : Types.ObjectId, ref : 'users'},
    createdAt : Date,
})


module.exports = model('podcast', myPodcast);