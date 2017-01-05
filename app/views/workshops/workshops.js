var gestures = require("ui/gestures");
var Visibility = require("ui/enums").Visibility;

var page;

var hide_unhide = function(args) {
  var toHide = page.getViewById("workshop_description_1");
  if(toHide.opacity === 0) {
    toHide.animate({
      opacity = 1, duration = 1000
    });
    toHide.visibility = Visibility.visible;
  }
  else {
    if(toHide.opacity === 0) {
      toHide.animate({
        opacity = 0, duration = 1000
      });
      toHide.visibility = Visibility.collapse;
  }
}

exports.hide_unhide = hide_unhide;

var pageLoaded = function(args) {
  page = args.object;
}
exports.pageLoaded = pageLoaded;
