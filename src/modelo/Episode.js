const { model, Schema } = require('mongoose');
const Character =  require('./Character');

const episode = new Schema({
    _id: String,
    name: String,
    air_date: String,
    episode:  String,
    characters:[String],
    created: String,
});


module.exports = model('Episode', episode);