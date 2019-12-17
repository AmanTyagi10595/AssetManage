const router = require("express").Router();
const roomController = require("../controllers/room/room.controller");

//Get all Rooms
router.get('/', roomController.getRooms);

//Get all rooms of a buildin with building_id =id
router.get('/:id', roomController.getroomsOfaBuilding);  // here id is of building

//add room
router.post('/add', roomController.addRooms);

//delete room
// router.delete('/delete', roomController.deleteRoom);


// Update room
// router.patch('/update', roomController.updateRoom);

module.exports = router;