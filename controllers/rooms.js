const getAllRooms = (req, res) => {
    res.send('get all rooms');
}
const createRoom = (req, res) => {
    res.json(req.body);
}
const getRoom = (req, res) => {
    res.json({id:req.params.id});
}
const updateRoom = (req, res) => {
    res.send('update room');
}
const deleteRoom = (req, res) => {
    res.send('delete room');
}



module.exports = {
   getAllRooms,
   createRoom,
   getRoom,
   updateRoom,
   deleteRoom
}