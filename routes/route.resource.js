const express = require('express').Router();

const ResourceSchema = require('../schema/schema.resource');

express.get('/', async (req,res) => {
    ResourceSchema.find({})
        .then(resources => res.status(200).send(resources))
        .catch(err => res.status(500).send('Error: '+err));
})

express.post('/add', async (req,res) => {
    const resource = ResourceSchema({
        name: req.body.name
    })

    resource.save()
        .then(() => res.json('Resource Added!'))
        .catch(err => res.status(500).send('Error: '+err));
})

module.exports = express;