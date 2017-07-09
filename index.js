require("babel-core/register");
require("babel-polyfill");
require("./app");

var Rollbar = require("rollbar");
var rollbar = new Rollbar("ca842d60f54c488b86a66b13785929d7");

rollbar.log("Hello world!");
