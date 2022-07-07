const mongoose = require('mongoose');

const blueprintSchema = mongoose.Schema({
    name:{type:String, required:true},
    level:{type:Number, required:true},
    nodes:{type:Array, required:true}
})

module.exports = mongoose.model('blueprints',blueprintSchema);