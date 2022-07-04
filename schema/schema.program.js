const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    name: {type:String, required:true},
    type: {type:String, required:true},
    icon_URL: {type:String, required:true},
    skills: {type:Array, required:true},
})

module.exports = mongoose.model('programs',programSchema);