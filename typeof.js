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
    ]
    function typeofSample() {
      let product = _products[0];
      let introDate = new Date();
      let strValue = new String();
      let isActive = false;
      let result;
      let value = null;

      console.log('_products = ' + typeof _products);
      console.log('product = ' + typeof product);
      console.log('product.productID = ' + typeof product.productID);
      console.log('product.productNumber = ' + typeof product.productNumber);
      console.log('strValue = ' + typeof strValue);
      console.log('introDate = ' + typeof introDate);
      console.log('isActive = ' + typeof isActive);
      console.log('result = ' + typeof result);
      console.log('value  = ' + typeof value);
      console.log('typeofSample() = ' + typeof typeofSample)
    }