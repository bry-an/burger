let express = require('express');
let burger = require('../models/burger')

let app = express();


let router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        let burgObj = {
            burgers: data,
        }
        console.log(burgObj);
        res.render('index', burgObj)
    })
});

router.post('/api/burgers', (req, res) => {
    let name = req.body.name;
    burger.create(name, (result => {
        res.json({ id: result.insertId });
    }))
})

router.put('/api/burgers/:id', (req, res) => {
    let burgerId = req.params.id;
    let devouredStatus = req.body.devouredStatus;

    burger.update(burgerId, devouredStatus, (result => {
        if (result.changedRows === 0) {
        return res.status(400).end();
        }
        else res.status(200).end();
    }));
})

module.exports = router;