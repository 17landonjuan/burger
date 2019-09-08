var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    selectAll: function (callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {

            callback(result);

        });
    },



    insertOne: function (burger, callback) {
        var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        burger.complete = burger.complete || 0;
        connection.query(s, [
            burger.text, burger.complete
        ], function (err, result) {

            callback(result);

        });
    },

    updateOne: function (burger, callback) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            burger.text, burger.id
        ], function (err, result) {

            callback(result);

        });
    }

};

module.exports = orm;