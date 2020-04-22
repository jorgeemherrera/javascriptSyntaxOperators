'use strict'

// Global scope - 'this' is mapped to global/window object
console.log('Begin: global scope sample');
console.log(this.toString());
console.log('this === window = ' + (this === window).toString());
console.log('End: global scope sample');

// Function scope - 'this' is mapped to global/window object
// Uncomment 'use strict' above to show it affects this function
function functionScope() {
  console.log(this.toString());
  console.log('this === window = ' + (this === window).toString());
}

// Pass 'this' to function from event handler
function eventHandler(ctl) {
  console.log('ctl', ctl.toString());
}

// Object literal
function objectLiteral() {
  let product = {
    "productID": 680,
    "name": 'HL Road Frame - Black, 58',
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    grossProfit: function () {
      return (this.listPrice - this.standardCost)
      .toLocaleString('es-CO', {
        style: 'currency', currency: 'COP'
      });
    }
  };
  console.log(product.grossProfit());
}

// call() and apply()
function callAndApply() {
    let product = {
      "productID": 680,
      "name": 'HL Road Frame - Black, 58',
      "standardCost": 1059.31,
      "listPrice": 1431.50,
      grossProfit: function () {
        return (this.listPrice - this.standardCost)
        .toLocaleString('es-CO', {
          style: 'currency', currency: 'COP'
        });
      }
    };

    let product2 = {
      "standardCost": 500,
      "listPrice": 850 
    }
    // call using reference to 'product' properties
    console.log(product.grossProfit.call(product));
    // call using reference to 'product2' properties
    console.log(product.grossProfit.call(product2));
    console.log('');
    console.log(product.grossProfit.apply(product));
    console.log(product.grossProfit.apply(product2));
}

//constructed functions
function Product(id, name, cost, price) {
  this.productID = id;
  this.name = name;
  this.standardCost = cost;
  this.listPrice = price;

  this.grossProfit = function () {
    return (this.listPrice - this.standardCost).toLocaleString('es-CO', {
      style: 'currency', currency: 'COP'
    });
  }
}

function constructorFunctions() {
  let product1 = new Product(680, "HL Road Frame - Black, 58",
  1059.31, 1431.50);
  let product2 = new Product(707, "Sport-100 Helmet, Red",
  13.08, 34.99);

  console.log(product1.grossProfit());
  console.log(product2.grossProfit());
}
