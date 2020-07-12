const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
//const fs = require('fs');
//const https = require('https');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended : false
}));

const mongoose = require('mongoose');
const uri = 'mongodb+srv://uriyahann:@cluster0.xvpyf.mongodb.net/pwyw-web-db?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true ,
  useUnifiedTopology: true
});

// const cookieParser = require('cookie-parser');
// app.use(cookieParser);

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", async (req, res) => {
  res.send("hello /");
});

app.get("/api", async (req, res) => {
  res.send('hello /api');
})

const company = require('./companyRoutes.js');
app.use("/api/company", company.routes);

app.listen(3000, () => {
  console.debug('Server listening on 3000');
});