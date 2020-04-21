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