function simpleTryCatch() {
  let result;

  try {
    result = x / 10;
  }
  catch (error) {
    console.log(error.message);
  }
}
function finallyCatch() {
  let result;

  try {
    console.log("An error will occur");
    result = x / 10;
    console.log("This line will never run.");
  }
  catch (error) {
    console.log("In the 'Catch' block: " + error.message);
  }
  finally {
    console.log("In the 'finally' block");
  }
}
function finallySuccess() {
  let result;
  let x = 100;
  try {
    console.log("An error won't occur");
    result = x / 10;
  }
  catch (error) {
    console.log("In the 'Catch' block: " + error.message);
  }
  finally {
    console.log("In the 'finally' block");
  }
}