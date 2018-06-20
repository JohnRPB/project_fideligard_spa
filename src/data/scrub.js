const config = require('./config.js');
const companies = config.companies;
const dateRange = config.dateRange;

const fs = require('fs');
const moment = require('moment');
const dateArray = require('moment-array-dates');

let scrubbed = {
  companies: companies,
  dates: [],
  byDate: {},
};
//for (var i = 0, len = dates.length; i < len; i++) {
  //scrubbed.byDate[dates[i]] = [];
//}
console.log(scrubbed);

companies.forEach((company) => {
  let file = JSON.parse(fs.readFileSync(__dirname + `/${company}.json`, 'utf8'));

  let companyTicker = file.dataset.dataset_code;
  let companyName = file.dataset.name;

  let data = file.dataset.data;

  let block;

  let date;
  let closePrice;
  for (var i = 0, len = data.length; i < len; i++) {
    block = data[i];

    date = block[0];
    closePrice = block[4];
   
    if (!scrubbed.byDate[date]) scrubbed.byDate[date] = [];
    scrubbed.byDate[date].push({
      ticker: companyTicker,
      name: companyName,
      close: closePrice
    });
    if (!scrubbed.dates[i]) scrubbed.dates.push(date);
  }
});

const findClosePrice = (dateArr, ticker) => {
  for (var i = 0, len = dateArr.length; i < len; i++) {
    if (dateArr[i].ticker === ticker) {
      console.log(dateArr[i].close);
      return dateArr[i].close;
    }
  }
  return "";
}


let d1;
let d7;
let d30;
for (date in scrubbed.byDate) {
  d1 = moment(date).add(+1, 'days').format('YYYY-MM-DD'); 
  d7 = moment(date).add(+7, 'days').format('YYYY-MM-DD');
  d30 = moment(date).add(+30, 'days').format('YYYY-MM-DD') ;

  let d1Price;
  let d7Price;
  let d30Price;
  scrubbed.byDate[date].forEach((company_block) => {
    //console.log("date: ", d1);
    //console.log("scrubbed.byDate: ", scrubbed.byDate);
    //console.log("scrubbedbyDate[d1]: ", scrubbed.byDate[d1]);
    
    
    d1Price = scrubbed.byDate[d1] ? findClosePrice(scrubbed.byDate[d1], company_block.ticker) : "";
    d7Price = scrubbed.byDate[d7] ? findClosePrice(scrubbed.byDate[d7], company_block.ticker) : "";
    d30Price = scrubbed.byDate[d30] ? findClosePrice(scrubbed.byDate[d30], company_block.ticker) : "";

    company_block["d1"] = d1Price;
    company_block["d7"] = d7Price;
    company_block["d30"] = d30Price;
  });
}

console.log(JSON.stringify(scrubbed, null, 2));

fs.writeFileSync(__dirname + "/result.json", JSON.stringify(scrubbed, null, 2));


module.exports = scrubbed;


  
//});
