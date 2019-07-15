const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Contact
        .create(req.body)
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
};