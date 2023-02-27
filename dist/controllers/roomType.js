"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoomTypeModel = require("../model/roomType");
exports.getRoomType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.user;
    if (role !== 'admin')
        return res.status(401).json({ message: "You are not authorized to get roomtype" });
    try {
        const roomTypes = yield RoomTypeModel.find({});
        res.status(200).json({ message: "Room type gotten successfully", data: roomTypes });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to add room type" });
    }
});
exports.addRoomType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.user;
    const { name, price } = req.body;
    if (role !== 'admin')
        return res.status(401).json({ message: "You are not authorized to add roomtype" });
    try {
        const newRoomType = yield RoomTypeModel.create({
            name, price
        });
        res.status(201).json({ message: "Room type added successfully", data: newRoomType });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to add room type" });
    }
});
exports.editRoomType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.user;
    const { id } = req.params;
    const { name, price } = req.body;
    if (role !== 'admin')
        return res.status(401).json({ message: "You are not authorized to edit roomtype" });
    if (!id)
        return res.status(400).json({ message: "Id is a required param" });
    try {
        const updatedRoomType = yield RoomTypeModel.findByIdAndUpdate(id, { name, price }, { new: true });
        res.status(200).json({ message: "Room type edited successfully", data: updatedRoomType });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to edit room type" });
    }
});
exports.deleteRoomType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.user;
    const { id } = req.params;
    if (role !== 'admin')
        return res.status(401).json({ message: "You are not authorized to delete roomtype" });
    if (!id)
        return res.status(400).json({ message: "Id is a required param" });
    try {
        const deletedRoomType = yield RoomTypeModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Room type deleted successfully", data: deletedRoomType });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete room type" });
    }
});
