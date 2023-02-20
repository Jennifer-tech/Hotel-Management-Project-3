const mongoose = require('mongoose');


const RoomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {type: Number}
})

const RoomTypeModel = mongoose.model('RoomType', RoomTypeSchema)

module.exports = RoomTypeModel
