"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
//create an express server
var express = require('express');
require('dotenv').config();
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI;
var cookieParser = require('cookie-parser');
app.use(cookieParser());
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
    app.use(bodyParser.json());
    app.use(cors());
})
    .catch(function (err) {
    console.log(err);
});
exports.db = mongoose.connection;
exports.db.on('error', console.error.bind(console, 'connection error:'));
exports.db.once('open', function () {
    console.log('MongoDB Connected...');
});
app.listen(port, function () {
    console.log("Server started on port ".concat(port));
});
