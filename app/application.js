// Setup the application
var App = new SuperApp;

// On jQuery.ready, setup the application's views and change to the __tasks__ state.
jQuery(function($){
  App.view = new SuperApp.View($("#views"));
  
  App.change("tasks");
});