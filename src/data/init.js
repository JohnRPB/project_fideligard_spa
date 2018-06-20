// ---------------------------------------------------------
// Script to make quandl calls then store them in /data 
// 2018-01-08 11:08
// ---------------------------------------------------------

const config = require('./config.js');
const companies = config.companies;
const dateRange = config.dateRange;
var path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env")
});
const fetch = require('node-fetch');
const pLimit = require('p-limit');
const fs = require('fs');

const limit = pLimit(1);

console.log("process.env.API_KEY: ", process.env.API_KEY);

const makeFilesFromData = async (company) => {
  let response = await fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${company}.json?trim_start=${dateRange[0]}&trim_end=${dateRange[1]}&api_key=${process.env.API_KEY}`)
  let json = await response.json();
  console.log(json);
  fs.writeFileSync(__dirname + `/${company}.json`, JSON.stringify(json, null, 2));
}

companies.forEach((company) => {
    limit(makeFilesFromData(company));
});


//const getData = async (company) => {
  //return new Promise((resolve, reject) => {
    //let response = await fetch(`https://www.quandl.com/api/v3/datatables/WIKI/PRICES?ticker=${company}&date=1999-12-31%2C1999-11-18%2C1999-11-19%2C1999-11-22&api_key=${process.env.API_KEY}`)
    //let json = await response.json();
    //resolve(json);
  //})
//}

//let JSON_companies = companies.map(async (company) => {
  //return limit(getData(company));
//});


//getData("AAPL")
  //.then((data) => {
    //console.log(JSON.stringify(data, null 2));
  //})
  //.catch((err) => {
    //console.log(err);
  //})


//fetch(`https://www.quandl.com/api/v3/datatables/WIKI/PRICES?ticker=AAPL&date=1999-12-31%2C1999-11-18%2C1999-11-19%2C1999-11-22&api_key=${process.env.API_KEY}`)
      //.then((response) => {
        //return response.json();
      //})
      //.then((json) => {
        //console.log(json);
      //})
      //.catch((err) => {
        //console.log(err);
      //})

