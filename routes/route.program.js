const express = require('express').Router();

const programSchema = require('../schema/schema.program');

express.get('/', (req,res) => {
    programSchema.find({})
        .then(resources => res.send(resources))
        .catch(err => res.status(500).send('Error: '+err));
})

express.post('/add', async (req,res) => {
    const program = new programSchema({
        name:req.body.name,
        type:req.body.type,
        icon_URL:req.body.iconURL,
        skills:req.body.skills
    })

    program.save()
        .then(() => res.json('Program added!'))
        .catch(err => res.status(500).json('Error: '+err));
});

module.exports = express;