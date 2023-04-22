const { model, Schema, Types } = require('mongoose');

const character = new Schema({
    _id: String,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: { 
        type: Schema.Types.ObjectId, 
        ref: 'Location'
     },
    image: String,
    created: String,
    location: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Location' 
    }],
    episodes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Episode'
    }]
});

 module.exports = model('Character', character);
