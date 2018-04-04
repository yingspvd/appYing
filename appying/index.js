const express = require('express');
const path = require('path');

const morgan = require('morgan');

const app = express();

app.use(express.static('static'));
app.set('views' , path.join(__dirname , 'src'));
app.set('view engine' , 'ejs');
app.use(morgan('dev'));

app.get('/' , function(req , res) {
    res.render('index');
});

app.get('/player' , function(req , res) {
    res.render('player');
});

app.get('/start' , function(req , res) {
    res.render('start');
});

app.get('/wait' , function(req , res) {
    res.render('wait');
});

app.get('/quiz:name' , function(req , res) {
    console.log(req.params.name);
    res.render('quiz' , {
        name : req.params.name
    });
});

app.listen(8000);
console.log('Hello Ying');