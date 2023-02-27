const { getRoomType,addRoomType, editRoomType, deleteRoomType } = require('../controllers/roomType');
const { validateToken } = require('../middleware/validateToken');

import { Router } from 'express';
// const router = require('express').Router();
// import router, { Router, Get, Post, } from 'express';
const router = Router();


router.get('/', validateToken, getRoomType);
router.post('/', validateToken, addRoomType);
router.put('/:id', validateToken, editRoomType);
router.delete('/:id', validateToken, deleteRoomType);

export default router;

// common js => modeule.exports, require("")
// es6 => export default, import * from ""