'use strict';

    //Check for type of error
    function referenceError() {
      let result;

      try {
        // Reference error because 'x' is not defined
        result = x / 10;
      } catch (error) {
        handleError(error);
      }
    }
    function rangeErrorSample() {
      let result = 0;

      try {
        // Range error because a number cannot have 200 significant digits
        result.toPrecision(200);
      } catch (error) {
        handleError(error);
      }
    }
    function typeErrorSample() {
      let result = 0;

      try {
        // Type error because result is a numeric
        result.toUpperCase();
      } catch (error) {
        handleError(error);
      }
    }
    function uriErrorSample() {
      let uri = "http://www.netinc.com/path%%%/file name";

      try {
        // URI error
        decodeURI(uri);
      } catch (error) {
        handleError(error);
      }
    }
    function syntaxErrorSample() {
      try {
        // Syntax error because missing a final single quote
        let sum = eval("alert('Hello)");
      } catch (error) {
        handleError(error);
      }
    }
    function handleError(error) {
      switch(error.name) {
        case 'ReferenceError':
          console.log("Reference error: " + error.message);
          break;
        case 'RangeError':
          console.log("Range error: " + error.message);
          break;
        case 'TypeError':
          console.log("Type error: " + error.message);
          break;
        case 'URIError':
          console.log("URI error: " + error.message);
          break;
        case 'SyntaxError':
          console.log("Syntax error: " + error.message);
          break;
      }
    }