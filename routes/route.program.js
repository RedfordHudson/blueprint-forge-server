const express = require('express').Router();

const programSchema = require('../schema/schema.program');

express.get('/',(req,res) => {
    programSchema.find({})
        .then(resources => res.send(resources))
        .catch(err => res.status(500).send('Error: '+err));
})

module.exports = express;