const express = require('express').Router();

const blueprintSchema = require('../schema/schema.blueprint');

express.get('/', async (req,res) => {
    blueprintSchema.find({})
        .then(blueprints => res.json(blueprints))
        .catch(err => res.status(500).json('ERROR: '+err));
})

express.get('/:name', async (req,res) => {
    blueprintSchema.find({
        'name':req.params.name
    })
        .then(blueprint => res.json(blueprint))
        .catch(err => res.status(500).json('ERROR: '+err));
})

express.patch('/update/:id', async (req,res) => {
    blueprintSchema.findById(req.params.id)
        .then(blueprint => {
            blueprint.name = req.body.name;
            blueprint.level = req.body.level;
            blueprint.nodes = req.body.nodes;

            blueprint.save()
                .then(() => res.json('Blueprint Updated!'))
                .catch(err => res.status(500).json('ERROR: '+err))
        })
})

module.exports = express;