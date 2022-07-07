const express = require('express').Router();

const blueprintSchema = require('../schema/schema.blueprint');

express.get('/',(req,res) => {
    blueprintSchema.find({})
        .then(blueprints => res.json(blueprints))
        .catch(err => res.status(500).json('Error: '+err));
})

module.exports = express;