let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Sorcerer',
        message: 'try it make better'
    })
});

router.get('/auth', (req, res) => {
    res.send('auth');
});

module.exports = router;