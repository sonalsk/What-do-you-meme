const express    = require('express'),
      router     = express.Router()
      uuid       = require('uuid');


// INDEX ROUTES
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/choices', (req, res) => {
    let roomID = uuid.v4();
    res.render('choices', {id: roomID});
});

module.exports = router;