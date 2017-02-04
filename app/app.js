var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var platform = require("platform");
var dialogs = require("ui/dialogs");


application.cssFile = "./app.css";

firebase.init({
  onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      if(message.title !== undefined) {
        dialogs.alert({
          title: message.title,
          message: message.body
        });
      }
      else {
        dialogs.alert({
          title: 'New notification',
          message: message.body
        });
      }
    }
}).then(
    function (instance) {
      console.log("firebase.init done");
      firebase.subscribeToTopic("news");
      console.log("subscribed to news")
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

application.start({ moduleName: "main-page" });
