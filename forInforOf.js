'use strict';

// Using a for/in loop
function forInSample() {
  let product = {
    "productId": 680,
    "name": "HL Road Frame",
    "productNumber": "FR-R92B-58",
    "color": "black",
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    calculateGrossProfit: function () {
      return this.listPrice - this.standardCost;
    }
  };
  for (const key in product) {
    console.log("'" + key + "' = " + product[key]);
  }
}

let _product = [
    {
      "productId": 680,
      "name": "HL Road Frame",
      "productNumber": "FR-R92B-58",
      "color": "black",
      "standardCost": 1059.31,
      "listPrice": 1431.50
    },
    {
      "productId": 890,
      "name": "HL Loping Frame",
      "productNumber": "KL-R92B-58",
      "color": "red",
      "standardCost": 13.31,
      "listPrice": 6789.50
    },
    {
      "productId": 981,
      "name": "HL Loop Frame",
      "productNumber": "KL-R92B-58",
      "color": "red",
      "standardCost": 21.31,
      "listPrice": 675.50
    }
  ];

function forofSample() {
  for(const item of _product) {
    console.log(JSON.stringify(item))
  }
}

function loopStringSmaple() {
  let productName = 'HL Road Frame - Black, 58';
  let letters = "";
  for (const char of productName) {
    letters += char;
  }
  console.log(letters);
}
function breakSample() {
  for ( const item of _product) {
    if (item.standardCost < 20) {
      break;
    }
    console.log(JSON.stringify(item))
  }
}
function continueSample() {
  for (const item of _product) {
    if (item.standardCost > 1000) {
      continue;
    }
    console.log(JSON.stringify(item))
  }
}