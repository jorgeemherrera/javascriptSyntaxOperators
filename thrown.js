function throwError() {
  try {
    attemptDivision();
  } catch(error) {
    console.log(error.message + " - Error Type: " + error.name);
  }
}

function attemptDivision() {
  let result;

  try {
    result = x / 10;
  } catch (error) {
    // Always include at least a 'message'  and 'name' properties
    throw {
      "message": "In the attemptDivision() method the following error occur",
      "name": "CustomError"
    }
  }
}