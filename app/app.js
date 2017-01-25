var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var platform = require("platform");

application.cssFile = "./app.css";

firebase.init({
  onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      var toast = Toast.makeText(message.body, "long");
      toast.show();
    }
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
firebase.subscribeToTopic("news");
console.log("subscribed to news")

application.start({ moduleName: "main-page" });
