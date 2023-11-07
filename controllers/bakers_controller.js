const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

baker.get('/data/seed', async (req,res) => {
    await Baker.insertMany(bakerSeedData)
    res.redirect('/breads')
})

module.exporst = baker