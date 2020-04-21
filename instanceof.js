'use strict';

function instanceofSample() {
  let prod = new Product(689, "HL Road Frames - Black, 58", "FR-R9B2-58");
  let dt = new Date();
  let name = new String('Product Name');
  let value = "A simple string";

  console.log('prod instanceof Product = ' + (prod instanceof Product).toString());
  console.log('prod instanceof Object = ' + (prod instanceof Object).toString());
  console.log('dt instanceof Date = ' + (dt instanceof Date).toString());
  console.log('dt instanceof Object = ' + (dt instanceof Object).toString());
  console.log('name instanceof String = ' + (name instanceof String).toString());
  console.log('value instanceof String = ' + (value instanceof String).toString());
  console.log('value instanceof Object = ' + (value instanceof Object).toString());
}


function Product(id, name, number) {
  this.productID = id;
  this.name = name;
  this.productNumber = number;
  this.color = "Black";
  this.standarCost = 10;
  this.listPrice = 30;
}