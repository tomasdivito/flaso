var gestures = require("ui/gestures");

var page;

var hide_unhide = function(args) {
  var toHide = page.getViewById("workshop_description_1");
  if(toHide.opacity === 0) {
    toHide.opacity = 100;
  }
  else {
    toHide.opacity = 0;
  }
}
exports.hide_unhide = hide_unhide;

var pageLoaded = function(args) {
  page = args.object;
}
exports.pageLoaded = pageLoaded;
