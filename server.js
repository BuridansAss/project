let express = require('express');
let app = express();
let main = require('./src/api/main');

app.use(express.static('public'));
app.set('view engine', 'pug');

app.use('/', main);

app.listen(3000, function () {
    console.log('Port 3000 listening');
});