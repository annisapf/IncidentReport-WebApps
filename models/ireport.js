const orm = require("../config/orm.js");

var ireport = {
    all: function (cb) {
        orm.all("IncidentReport", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("IncidentReport", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("IncidentReport", objColVals, condition, function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller (burger_controller.js).
module.exports = ireport;
