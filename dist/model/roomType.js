"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoomTypeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    price: { type: Number }
});
const RoomTypeModel = mongoose_1.default.model('RoomType', RoomTypeSchema);
module.exports = RoomTypeModel;
