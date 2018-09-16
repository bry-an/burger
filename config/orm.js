let connection = require('./connection');

let orm = {
    selectAll: (table, cb) => {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, table, (err, res) => {
            if (err) throw err;
            cb(res)
        });
    }, 
    insertOne: (table, name, cb) => {
        let queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';
        connection.query(queryString, [table, name, true ], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }, 
    updateOne: (table, id, devoured, cb) => {
        let queryString = 'UPDATE ?? SET devoured = ? WHERE id = ?';
        connection.query(queryString, [table, devoured, id], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}


module.exports = orm;