var gestures = require("ui/gestures");
var visibility = require("ui/enums");

var page;

var hide_unhide = function(args) {
  var toHide = page.getViewById("workshop_description_1");
  if(toHide.opacity === 0) {
    toHide.animate({
      opacity: 1, duration: 2000
    });
    toHide.visibility = visibility.Visibility.visible;
  }
  else {
    if(toHide.opacity === 0) {
      toHide.animate({
        opacity: 0, duration: 2000
      });
      toHide.visibility = visibility.Visibility.collapse;
  }
}
exports.hide_unhide = hide_unhide;

var pageLoaded = function(args) {
  page = args.object;
}
exports.pageLoaded = pageLoaded;
