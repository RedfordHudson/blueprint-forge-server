const mongoose = require('mongoose');

const blueprintSchema = mongoose.Schema({
    name:{type:String, required:true},
    complete:{type:Boolean, required:true},
    series:{type:Array, required:true}
})

module.exports = mongoose.model('blueprints',blueprintSchema);