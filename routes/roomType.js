const { getRoomType,addRoomType, editRoomType, deleteRoomType } = require('../controllers/roomType');
const { validateToken } = require('../middleware/validateToken');

const router = require('express').Router();


router.get('/', validateToken, getRoomType);
router.post('/', validateToken, addRoomType);
router.put('/:id', validateToken, editRoomType);
router.delete('/:id', validateToken, deleteRoomType);

module.exports = router;