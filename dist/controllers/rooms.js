"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.getRoom = exports.createRoom = exports.getAllRooms = void 0;
const getAllRooms = (req, res) => {
    res.send('get all rooms');
};
exports.getAllRooms = getAllRooms;
const createRoom = (req, res) => {
    res.json(req.body);
};
exports.createRoom = createRoom;
const getRoom = (req, res) => {
    res.json({ id: req.params.id });
};
exports.getRoom = getRoom;
const updateRoom = (req, res) => {
    res.send('update room');
};
exports.updateRoom = updateRoom;
const deleteRoom = (req, res) => {
    res.send('delete room');
};
exports.deleteRoom = deleteRoom;
// module.exports = {
//    getAllRooms,
//    createRoom,
//    getRoom,
//    updateRoom,
//    deleteRoom
// }
