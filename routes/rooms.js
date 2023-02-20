const express = require('express');
const router = express.Router();

const {getAllRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/rooms');

router.route('/').get(getAllRooms).post(createRoom);
router.route('/:id').get(getRoom).patch(updateRoom).delete(deleteRoom);

module.exports = router;