const RoomTypeModel = require("../model/roomType");


exports.getRoomType = async (req, res) => {
    const { role } = req.user;
    if (role !== 'admin') return res.status(401).json({message: "You are not authorized to get roomtype"})

    try {
        const roomTypes = await RoomTypeModel.find({});

        res.status(200).json({message: "Room type gotten successfully", data: roomTypes});
    } catch (error) {
        res.status(500).json({message: "Failed to add room type"});
    }
}



exports.addRoomType = async (req, res) => {
    const { role } = req.user;
    const { name, price } = req.body
    if (role !== 'admin') return res.status(401).json({message: "You are not authorized to add roomtype"})

    try {
        const newRoomType = await RoomTypeModel.create({
            name, price
        });

        res.status(201).json({message: "Room type added successfully", data: newRoomType});
    } catch (error) {
        res.status(500).json({message: "Failed to add room type"});
    }
}

exports.editRoomType = async (req, res) => {
    const { role } = req.user;
    const { id } = req.params;
    const { name, price } = req.body
    if (role !== 'admin') return res.status(401).json({message: "You are not authorized to edit roomtype"})
    if (!id) return res.status(400).json({message: "Id is a required param"});

    try {
        const updatedRoomType = await RoomTypeModel.findByIdAndUpdate(id, { name, price }, {new: true});

        res.status(200).json({message: "Room type edited successfully", data: updatedRoomType});
    } catch (error) {
        res.status(500).json({message: "Failed to edit room type"});
    }
}

exports.deleteRoomType = async (req, res) => {
    const { role } = req.user;
    const { id } = req.params;
    if (role !== 'admin') return res.status(401).json({message: "You are not authorized to delete roomtype"})
    if (!id) return res.status(400).json({message: "Id is a required param"});

    try {
        const deletedRoomType = await RoomTypeModel.findByIdAndDelete(id);

        res.status(200).json({message: "Room type deleted successfully", data: deletedRoomType});
    } catch (error) {
        res.status(500).json({message: "Failed to delete room type"});
    }
}