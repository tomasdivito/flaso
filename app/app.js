var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var Toast = require("nativescript-toast");

application.cssFile = "./app.css";

firebase.init({
  onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      //alert(message.title + ": " + message.body);
      var toast = Toast.makeText(message.title + ": " + message.body, "long");
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

application.start({ moduleName: "main-page" });
