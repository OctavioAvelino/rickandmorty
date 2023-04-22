const { model, Schema } = require('mongoose');


const location = new Schema({
    _id: String,
    name: String,
    type: String,
    dimension: String,
    residents: [String],
    created: String,
});


module.exports = model('Location', location);