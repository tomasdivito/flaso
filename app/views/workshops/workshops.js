var visibility = require("ui/enums");

var page;
var visible ? visibility.Visibility.visible : visibility.Visibility.collapse;

var hide_unhide = function(args) {
  var toHide = page.getViewById("workshop_description_1");
  visible = !toHide.visibility;
  toHide.visibility = visibile;
}
exports.hide_unhide = hide_unhide;

var pageLoaded = function(args) {
  page = args.object;
}
exports.pageLoaded = pageLoaded;
