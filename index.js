const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.listen(3000);
//
app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect('mongodb+srv://nhatlongtien229:Qazwsx@229@cluster0-8moas.mongodb.net/EnglishApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function(error) {
    if (error) {
        console.log("Fail to connect to mongodb")
    } else {
        console.log("connect to mongodb successfully")
    }
});
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(express.static('views'));
//
const topicRoute = require('./Route/Topic.route');
app.use('/admin/topic', topicRoute);

app.get('/', function(req, res) {
    res.send("Hello")
});