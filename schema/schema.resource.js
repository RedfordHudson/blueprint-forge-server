const mongoose = require('mongoose');

const ResourceSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Resource',ResourceSchema);