export const getAllRooms: (req: any, res: any) => void = (req, res) => {
    res.send('get all rooms');
}
export const createRoom: (req: any, res: any) => void = (req, res): void => {
    res.json(req.body);
}
export const getRoom: (req: any, res: any) => void = (req, res) => {
    res.json({id:req.params.id});
}
export const updateRoom: (req: any, res: any) => void = (req, res) => {
    res.send('update room');
}
export const deleteRoom: (req: any, res: any) => void = (req, res) => {
    res.send('delete room');
}



// module.exports = {
//    getAllRooms,
//    createRoom,
//    getRoom,
//    updateRoom,
//    deleteRoom
// }