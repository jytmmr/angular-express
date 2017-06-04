var express = require('express');
var router = new express.Router();

router.get('/testing', function (req, res){

    res.status(200).json({'hello': 'test'});
})

module.exports = router;
