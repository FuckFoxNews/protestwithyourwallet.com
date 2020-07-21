const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const axios = require('axios');

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://uriyahann:Evergreen@cluster0.xvpyf.mongodb.net/pwyw-web-db?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true
},{
  useUnifiedTopology: true
});
const companySchema = new mongoose.Schema({
  "_id": Number,
  "companyName": String,
  "companyURL": String,
  "industry": String,
  "description": String
});

const Company = mongoose.model('Company', companySchema, 'pwyw-companies');

router.get('/', async (req,res) => {
  try {
    let companies = await Company.find();
    console.log(companies);
    return res.send(companies);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Company,
  routes: router
}