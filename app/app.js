var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
/*
	*/

application.cssFile = "./app.css";

firebase.init({
  onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);

      var toast = Toast.makeText(message.body, "long");
      toast.show();

      // if your server passed a custom property called 'foo', then do this:
      console.log("Value of 'foo': " + message.foo);
    }
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

//uncomment next line when implemmented in the plugin :(
firebase.subscribeToTopic("flasoma");
console.log("subscribed to flasoma")

application.start({ moduleName: "main-page" });
