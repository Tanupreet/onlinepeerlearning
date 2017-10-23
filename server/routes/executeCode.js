const express = require('express');
const router = express.Router();
const vm = require('../utility')


router.post('/executeCode', function(req, res) {

    let result = vm.add(req.body.script);
    res.json({ result: result })

});

module.exports = router;
