'use strict';

let _products = [
  {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    productNumber: 'FR-R92B-58',
    color: "Black",
    standardCost: 1059.31,
    listPrice: 1431.50
  },
  {
    productID: 707,
    name: "Sport 100 Frame - Black, 58",
    productNumber: 'SP-R1002B-58',
    color: "Red",
    standardCost: 13.08,
    listPrice: 34.99
  },
  {
    productID: 609,
    name: "Montain bike socks, 508",
    productNumber: 'MBS-R92B-508',
    color: "White",
    standardCost: 3.12465,
    listPrice: 9.50
  }
];
    function helperFunctionsSample() {
      let introDate = new Date();
      let result;
      let value = null;

      // Use helper functions that return true/false
      console.log('_product is Array? = ' + isArray(_products));
      console.log('introDate is Date? = ' + isDate(introDate));

      // Be sure to check if something is null prior using
      console.log('result = ' + isNullOrUndefined(result) ? 'null/undefined' : '');
      console.log('value = ' + isNullOrUndefined(value) ? 'null/undefined' : '');
    }

    // Helper functions 
    function isArray(value) {
      return value.constructor.toString().indexOf('Array') > -1;
    }
    function isDate(value) {
      return value.constructor.toString().indexOf('Date') > -1;
    }
    function isNullOrUndefined(value) {
      return value === null || value === undefined;
    }