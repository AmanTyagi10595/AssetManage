const router = require("express").Router();
const roomController = require("../controllers/room/room.controller");

//Get all Rooms
router.get('/', roomController.getRooms);

//Get single room
router.get('/:id', roomController.getSingleRoom);

//add room
router.post('/add', roomController.addRooms);

//delete room
// router.delete('/delete', roomController.deleteRoom);


// Update room
// router.patch('/update', roomController.updateRoom);

module.exports = router;