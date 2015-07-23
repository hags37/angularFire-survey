"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", ["ngRoute"]);

// your Firebase URL goes here
app.constant("FBURL", "https://glaring-torch-90.firebaseio.com/surveys");
