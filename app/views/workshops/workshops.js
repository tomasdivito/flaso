var visibility = require("ui/enums");
var observable = require("data/observable");

var viewmodel = new observable.Observable({});
var page;
var visible;

var hide_unhide = function(args) {
  sender = args.object.id;
  if(sender === "workshop1") {
    viewmodel.set("workshop1_visible", !viewmodel.get("workshop1_visible"));
  }
  else if(sender === "workshop2") {
    viewmodel.set("workshop2_visible", !viewmodel.get("workshop2_visible"));
  }
  else if(sender === "workshop3") {
    viewmodel.set("workshop3_visible", !viewmodel.get("workshop3_visible"));
  }
  else if(sender === "workshop4") {
    viewmodel.set("workshop4_visible", !viewmodel.get("workshop4_visible"));
  }
  else if(sender === "workshop5") {
    viewmodel.set("workshop5_visible", !viewmodel.get("workshop5_visible"));
  }

}
exports.hide_unhide = hide_unhide;

var touch_effect = function(args) {
  obj = args.object;
  obj.opacity = .5;
  obj.animate({
    opacity: 1, duration: 500
  })
}
exports.touch_effect = touch_effect;

var pageLoaded = function(args) {
  page = args.object;
  page.bindingContext = viewmodel;
}
exports.pageLoaded = pageLoaded;
