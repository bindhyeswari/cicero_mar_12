var router = require('express').Router();
var multer  = require('multer');

var mongoose = require('mongoose');


router.use(multer({ dest: './uploads/'}));

router.post('/', function (req, res) {
    console.log(req.files);
    res.status(200).json({message: 'ok'});
});

router.get('/showfiles', function (req, res) {
    res.render('show_uploads');
});

module.exports = router;