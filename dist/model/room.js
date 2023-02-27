"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoomSchema = new mongoose_1.default.Schema({
    roomNummber: {
        type: Number,
        required: true
    },
    name: { type: String, required: true },
    roomType: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'RoomType',
        required: true
    }
});
const RoomModel = mongoose_1.default.model('Rooms', RoomSchema);
module.exports = RoomModel;
