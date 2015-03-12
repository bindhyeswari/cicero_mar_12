var router = require('express').Router();
var multer  = require('multer');

var mongoose = require('mongoose');
var File = mongoose.model('upload', {
    name: {type: String, required: true},
    info: mongoose.SchemaTypes.Mixed
});

router.use(multer({ dest: './uploads/'}));

router.post('/', function (req, res) {
    var file = new File({
        name: req.files.filename.name,
        info: req.files.filename
    });
    file.save(function (err, results) {
        console.log(err);
        if (err) res.status(500).json({message: '500 INTERNAL - NOT IMPLEMENTED'});
        else res.status(200).json({message: 'File Saved!'});
    });
});

router.get('/showfiles', function (req, res) {
    res.render('show_uploads');
});

module.exports = router;