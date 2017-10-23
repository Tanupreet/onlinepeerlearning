const express = require('express');
const router = express.Router();
const vm = require('../utility')


//hitting vm method to get compiled code result
router.post('/executeCode', function(req,res) {

    let result = vm.add(req.body.run);
    res.json({ result: result })

});

module.exports = router;
