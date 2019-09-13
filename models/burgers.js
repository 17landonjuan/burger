
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function (cb) {
    orm.selectAll("tableName", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (burgerName, cb) {
    orm.insertOne(burgerName, function (res) {
      cb(res);
    });
  },
  updateOne: function (burgerId, cb) {
    orm.updateOne(burgerId, function (res) {
      cb(res);
    })
  }

};


module.exports = burgers;