const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});
//schema for User data(Signup)
const UserSchema = new Schema({

    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    }
});
//schema to add buildings
const BuildingSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Building name is required']
    },
    rooms: [{
        noOfRooms: Number
    }],
    assets: [
        Number
    ],
    state: {
        type: String
    },
    city: {
        type: String
    },
    phone: {
        type: Number
    }
});

//schema for rooms
const RoomSchema = new Schema({
    roomNo: {
        type: Number
    },
    buildingName: {
        type: String
    },
    buildingId: {
        type: String
    },
    assets: [{
        id: {
            type: Number
        }
    }]
});

//Schema for Assets
const AssetsSchema = new Schema({
    assetName: {
        type: String
    },
    inUse: {
        type: Boolean
    },
    building: [{
        buildingId: String,
        buildingName: String
    }],
    room: [{
        roomId: String,
        roomNname: String
    }],
    serialNo: {
        type: String
    },
    modelNo: {
        type: String
    },
    category: {
        type: String
    },
    descrip: {
        type: String
    },
    assignedTo: [{
        userId: String,
        assignedDate: String
    }],
    workingStatus: {
        type: Boolean
    },
    purchaseDate: {
        type: Date
    },
    warrentyExpire: {
        type: Date
    },
    serviceRequired: {
        type: Boolean
    },
    warrentyServiceCount: {
        type: Number
    },
    servicesGivenCount: {
        type: Number
    },
    outForService: {
        type: Boolean
    },
    serviceCenter: [{
        name: String,
        receiveDate: Date,
        toDeliverDate: Date,
        deliveredDate: Date
    }],
});


const Ninja = mongoose.model('ninja', NinjaSchema);
const Building = mongoose.model('Building', BuildingSchema);
const Room = mongoose.model('Room', RoomSchema);
const Assets = mongoose.model('Assets', AssetsSchema);
const User = mongoose.model('User', UserSchema);

module.exports.Ninja = Ninja;
module.exports.Building = Building;
module.exports.Room = Room;
module.exports.Assets = Assets;
module.exports.User = User;
