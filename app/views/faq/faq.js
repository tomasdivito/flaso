var visibility = require("ui/enums");
var observable = require("data/observable");

var viewmodel = new observable.Observable({});
var page;
var visible;

var toggle = function(args) {
  sender = args.object;
  if(sender.id === "pregunta1") {
    viewmodel.set("pregunta1_visible", !viewmodel.get("pregunta1_visible"));
    viewmodel.set("pregunta1_sign", !viewmodel.get("pregunta1_sign"));
  }
  else if(sender.id === "pregunta2") {
    viewmodel.set("pregunta2_visible", !viewmodel.get("pregunta2_visible"));
    viewmodel.set("pregunta2_sign", !viewmodel.get("pregunta2_sign"));
  }
  else if(sender.id === "pregunta3") {
    viewmodel.set("pregunta3_visible", !viewmodel.get("pregunta3_visible"));
    viewmodel.set("pregunta3_sign", !viewmodel.get("pregunta3_sign"));
  }
  else if(sender.id === "pregunta4") {
    viewmodel.set("pregunta4_visible", !viewmodel.get("pregunta4_visible"));
    viewmodel.set("pregunta4_sign", !viewmodel.get("pregunta4_sign"));
  }
  else if(sender.id === "pregunta5") {
    viewmodel.set("pregunta5_visible", !viewmodel.get("pregunta5_visible"));
    viewmodel.set("pregunta5_sign", !viewmodel.get("pregunta5_sign"));
  }
  else if(sender.id === "pregunta6") {
    viewmodel.set("pregunta6_visible", !viewmodel.get("pregunta6_visible"));
    viewmodel.set("pregunta6_sign", !viewmodel.get("pregunta6_sign"));
  }
  else if(sender.id === "pregunta7") {
    viewmodel.set("pregunta7_visible", !viewmodel.get("pregunta7_visible"));
    viewmodel.set("pregunta7_sign", !viewmodel.get("pregunta7_sign"));
  }
  else if(sender.id === "pregunta8") {
    viewmodel.set("pregunta8_visible", !viewmodel.get("pregunta8_visible"));
    viewmodel.set("pregunta8_sign", !viewmodel.get("pregunta8_sign"));
  }
  else if(sender.id === "pregunta9") {
    viewmodel.set("pregunta9_visible", !viewmodel.get("pregunta9_visible"));
    viewmodel.set("pregunta9_sign", !viewmodel.get("pregunta9_sign"));
  }
}
exports.toggle = toggle;

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
