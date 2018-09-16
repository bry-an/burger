var orm = require('../config/orm');

let burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res => {
            cb(res);
        }));
    },
    create: (name, devoured, cb) => {
        orm.insertOne('burgers', name, devoured, (res => {
            cb(res);
        }));
    },
    update: (id, devoured, cb) => {
        orm.updateOne('burgers', id, devoured, (res => {
            cb(res);
        }));
    }
}
