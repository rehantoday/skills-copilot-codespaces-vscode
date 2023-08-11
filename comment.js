// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set folder public
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use multer
app.use(upload.array());

// Create router
var commentRouter = require('./router/comment.router');
app.use('/comment', commentRouter);

// Create server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});