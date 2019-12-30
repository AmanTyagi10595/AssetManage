const User = require('../../models/schema').User;
const Error = require('../../error/error');


module.exports = {
    // Adding Building
    signUp: (req, res, next) => {
        console.log(req.body, "api running for signUp");
        var data = {
            email: req.body.email,
            password: req.body.psw
        };
        User.findOne({ email: req.body.email }).then((result) => {
            if (result == null) {
                let user = new User(data);
                user.save().then((result) => {
                    res.status(200).send({ status: "success", msg: "registered successfully" });
                }).catch((e) => {
                    next(new Error(400, e.message));
                });
            } else {
                res.status(200).send({ status: "failure", msg: "already registered email" });
            }
        }).catch((e) => {
            res.status(406).send({ status: "failure", msg: "somthing wrong" });
        });
    },

    login: (req, res, next) => {
        console.log("loging Api", req.body);
        User.findOne({ 'email': req.body.email, 'password': req.body.password }).then((result) => {
            console.log("result herer");
            if (result == null) {
                res.status(401).send({ status: "failure", msg: "wrong credentials" });
            } else {
                res.status(200).send({ status: "success", msg: "successfully login" });
            }

        }).catch((e) => {
            console.log(e, "DB error in lofgin api")
            res.status(400).send({ status: "failure", msg: "somthing wrong" });
        });
    }

};