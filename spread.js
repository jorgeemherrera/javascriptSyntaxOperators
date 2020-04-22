// String to array
function stringToArray() {
  let productNumber = "FR-R92B-58";
  let values = [...productNumber];

  console.log(values);
}

// copy an array
function copyArray() {
  let arr = [1,2,3];
  let arr2 = [...arr];

  // Make changes to duplicated array
  arr2.push(4);
  arr2[0] = 99;

  console.log(arr);
  console.log(arr2);
}

// Copy an Array of Objects
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

function copyObjectToArrays() {
  // Careful with object arrays
  // The array is copied, but the underlying objects are still accessed
  let diff = [..._products];

  // Modify a property of the new array
  diff[0].productID = 999;

  console.log(_products[0].productID);
  console.log(diff[0].productID);
}

// Concatenate two arrays

let _newProducts = [
  {
    productID: 1000,
    name: "HT Road Frame - Black, 58",
    productNumber: 'FR-R92B-58',
    color: "White",
    standardCost: 90981.31,
    listPrice: 124.50
  },
  {
    productID: 9081,
    name: "Win Sport Fail - Black, 58",
    productNumber: 'WSF-R1002B-58',
    color: "Blue",
    standardCost: 67.08,
    listPrice: 90.99
  },
  {
    productID: 653,
    name: "Cerro el Volador, 508",
    productNumber: 'CEV-R92B-508',
    color: "Green",
    standardCost: 3.9897,
    listPrice: 91.50
  }
];

function concatenateArray() {
  let allProducts = _products.concat(_newProducts);
  console.log(allProducts.length);

  let spreadProducts = [..._products, ..._newProducts];
  console.log(spreadProducts.length);
}

// Spreand in a constructor
function spreadInConstructors() {
  let dt = new Date(2019,10,15);
  console.log('dt', dt);

  let dateFields = [2019,11,15];
  dt = new Date(...dateFields);
  console.log('dt 2 ', dt)
}

// Spread function arguments
function spreadForFunctionArgs() {
  multipleParams(1, 2, 3);

  let args = [1, 2, 3];
  multipleParams(...args);
}

function multipleParams(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log('');
}

// Shallow copy on Object Literals
function objectLiterals() {
  let product = {
    productID: 680,
    name: 'Hl Road Frame - Black, 58',
    standardCost: 1098.98,
    listPrice: 1375.12
  };

  // Following performs a shallow-copy
  // Similar to Obejct.assing()
  let prod2 = { ...product };

  // Change the newly copied object
  prod2.productID = 999;
  prod2.name = "Example";

  // Display the objects
  console.log(product);
  console.log(prod2);

  // Display the changed value
  console.log('');
  console.log(product.productID);
  console.log(prod2.productID);
  console.log(prod2.name);
}
