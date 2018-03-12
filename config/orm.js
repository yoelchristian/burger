var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callBack(res);
        });
    },

    insertOne: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        connection.query(queryString, vals, function(err, res) {
            if(err) throw err;
            callBack(res);
        })
    },

    updateOne: function(table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
        queryString += condition;
        
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            callBack(res);
        });
    }
};

module.exports = orm;