const Rooms = require('../../models/schema.js').Room;
const Error = require('../../error/error');

module.exports = {

    //get rooms
    getRooms: function (req, res, next) {
        console.log("get Rooms Api");
        Rooms.find().then((data) => {
            res.status(200).send({ status: "success", msg: data });
        }).catch((e) => {
            next(new Error(400, e.message));

        });
    },

    getSingleRoom: (req, res, next) => {
        Rooms.findById(req.params.id).then((data) => {
            res.status(200).send({ status: "success", msg: data });
        }).catch((e) => {
            // next({ status: 402, message: e.message });
            next(new Error(400, e.message));
        });
    },

    addRooms: (req, res, next) => {
        var room = new Rooms(req.body);
        room.save().then((data) => {
            res.status(200).send({ status: "success", msg: data });
        }).catch((e) => {
            next(new Error(400, e.message));
        });
    },
    deleteRoom: (req, res, next) => {
        Console / log("Api delete room")
        Room.findOneAndRemove({ "_id": req.body.id }).then((data) => {
            res.status(200).send({ status: "success", msg: data });
        }).catch((e) => {
            next.status(200).send(400, e.message);
        });
    }
}