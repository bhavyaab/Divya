'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// app.use(cors());
app.use(express.static(`${__dirname}/build`));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.listen(PORT, function(){
  console.log('server up:', PORT);
});



// var http = require('http')
// setInterval(function() {
//   http.get('http://divyarani.herokuapp.com')
// }, 3000000)
