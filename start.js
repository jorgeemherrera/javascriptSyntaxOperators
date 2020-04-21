function simpleSwitch() {
  let productId = 3;

  switch(productId) {
    default:
      console.log('Unknown Product');
    case 1: 
      console.log('Product 1');
      break;
    case 2:
      console.log('Product 2');
      break;
  }
}

function multipleCases() {
  let color = 'red';

  switch(color) {
    case 'Red':
    case 'Pink':
      console.log('The color is red');
      break;
    case 'Blue':
    case 'Light Blue':
    case 'Dark Blue':
      console.log('The color is blue');
      break;
  }
}

function forgetABreak() {
  let productId = 2;
  
  switch(productId) {
    case 1:
      console.log('HL Road Frame');
      break;
    case 2: 
      console.log('Sport-100 Helmet');
    case 3: 
      console.log('Montain Bike');
      break;
    default:
      console.log('Unknown Product');
      break;
  }
}