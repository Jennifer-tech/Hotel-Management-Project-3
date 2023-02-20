const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    roomNummber: {
        type: Number,
        required: true
    },
    name: { type: String, required: true },
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomType',
        required: true
    }
});

const RoomModel = mongoose.model('Rooms', RoomSchema);

module.exports = RoomModel;