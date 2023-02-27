"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const rooms_1 = require("../controllers/rooms");
router.route('/').get(rooms_1.getAllRooms).post(rooms_1.createRoom);
router.route('/:id').get(rooms_1.getRoom).patch(rooms_1.updateRoom).delete(rooms_1.deleteRoom);
module.exports = router;
