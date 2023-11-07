const mongoose = require('mongoose')
const { Schema } = mongoose

const bakerSchema = new Schema ({
    name: {
        type: String,
        require: true,
        enum: ['Rachel','Monica','Joey','Chandler','Ross','Phoene']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker