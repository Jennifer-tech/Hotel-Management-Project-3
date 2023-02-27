"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getRoomType, addRoomType, editRoomType, deleteRoomType } = require('../controllers/roomType');
const { validateToken } = require('../middleware/validateToken');
const express_1 = require("express");
// const router = require('express').Router();
// import router, { Router, Get, Post, } from 'express';
const router = (0, express_1.Router)();
router.get('/', validateToken, getRoomType);
router.post('/', validateToken, addRoomType);
router.put('/:id', validateToken, editRoomType);
router.delete('/:id', validateToken, deleteRoomType);
exports.default = router;
// common js => modeule.exports, require("")
// es6 => export default, import * from ""
