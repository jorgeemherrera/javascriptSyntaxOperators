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
    function constructorSample() {
      let product = _products[0];
      let introDate = new Date();
      let strValue = new String();
      let isActive = false;

      console.log('_products = ' +  _products.constructor.toString());
      console.log('product = ' +  product.constructor.toString());
      console.log('product.productID = ' +  product.productID.constructor.toString());
      console.log('product.productNumber = ' +  product.productNumber.constructor.toString());
      console.log('strValue = ' +  strValue.constructor.toString());
      console.log('introDate = ' +  introDate.constructor.toString());
      console.log('isActive = ' +  isActive.constructor.toString());
      console.log('constructorSample() = ' +  constructorSample.constructor.toString)
    }