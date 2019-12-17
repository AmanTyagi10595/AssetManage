const Assets = require('../../models/schema').Assets;
const Error = require('../../error/error');

module.exports = {
    // add assets
    addAsset: (req, res, next) => {
        console.log("api running addAsset", req.body);
        var asset = new Assets(req.body);
        asset.save().then(function (data) {
            console.log(data.toObject(), "saved");
            res.status(200).send(data);
        }).catch((err) => {
            next(new Error(400, e.message));
        });
    },

    getAssetsOfRoom: (req, res, next) => {
        console.log("getAsset Api running now");
    }
}