var orm = require('../config/orm');

let burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res => {
            cb(res);
        }));
    },
    create: (name, cb) => {
        orm.insertOne('burgers', name, (res => {
            cb(res);
        }));
    },
    update: (id, devouredStatus, cb) => {
        orm.updateOne('burgers', id, devouredStatus, (res => {
            cb(res);
        }));
    }
}

module.exports = burger;