var tabViewModule = require("ui/tab-view")
var gestures      = require("ui/gestures");
var observable    = require("data/observable");
var webViewModule = require("ui/web-view");
var frameModule   = require("ui/frame");
var utilityModule = require("utils/utils");
var firebase = require("nativescript-plugin-firebase");

// Our new Observable view model for data binding
var viewmodel = new observable.Observable({});


//links section
exports.estrellas_invitadas = function() {
  frameModule.topmost().navigate("views/estrellas_invitadas/estrellasinvitadas");
}
exports.workshop = function() {
  frameModule.topmost().navigate("views/workshops/workshops");
}
exports.teatrohotelsede = function() {
  frameModule.topmost().navigate("views/hotelyteatro/hotelyteatro");
}
exports.faq = function() {
  frameModule.topmost().navigate("views/faq/faq");
}
exports.comites = function() {
  frameModule.topmost().navigate("views/ComiteColaboradores/comitecolaboradores");
}
exports.masinformacion = function() {
  frameModule.topmost().navigate("views/masinformacion/masinformacion");
}
exports.schedule = function() {
  frameModule.topmost().navigate("views/schedule/schedule");
}
exports.gallery = function () {
  frameModule.topmost().navigate("views/gallery/gallery");
}
//end of link section

function toggle_header() {
  viewmodel.set("isVisible", !viewmodel.get("isVisible"));
}
exports.toggle_header = toggle_header;

function gotoweb(args) {
  var sender = args.object;
  if(sender.id === "website") {
    utilityModule.openUrl("http://www.flasomaargentina2017.com");
  }
  else if(sender.id === "sponsor-flasoma") {
    utilityModule.openUrl("http://www.flasoma.org/");
  }
  else if(sender.id === "sponsor-fism") {
    utilityModule.openUrl("http://fism.org/web/");
  }
}
exports.gotoweb = gotoweb;

function touch_effect(args) {
  obj = args.object;
  obj.opacity = .5;
  obj.animate({
    opacity: 1, duration: 500
  })
}
exports.touch_effect = touch_effect;

// Page loaded
function pageLoaded(args) {
    //code in order to show the iframe
    var page = args.object;
    touch_effect(args);

    viewmodel.set("htmlString", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.19233623234!2d-58.3838516!3d-34.609267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7ad5404e98d8613!2sTeatro+Avenida!5e0!3m2!1ses!2sar!4v1470673305099" width="100%" height="+"resize"+" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');

    page.bindingContext = viewmodel;
}
exports.pageLoaded = pageLoaded;
