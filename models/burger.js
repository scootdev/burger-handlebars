const orm = require("../config/orm");

const burger = {
    all: (cb) => {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger