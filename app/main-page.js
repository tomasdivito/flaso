var tabViewModule = require("ui/tab-view")
var gestures      = require("ui/gestures");
var observable    = require("data/observable");
var webViewModule = require("ui/web-view");
var frameModule   = require("ui/frame");

// Our new Observable view model for data binding
var viewmodel = new observable.Observable({});



exports.estrellas_invitadas = function() {
  frameModule.topmost().navigate("views/estrellas_invitadas/estrellasinvitadas")
}

exports.workshop = function() {
  frameModule.topmost().navigate("views/workshops/workshops")
}

exports.teatrohotelsede = function() {
  frameModule.topmost().navigate("views/hotelyteatro/hotelyteatro")
}

exports.resize_viewmodel = function() {
  //var view = args.object;
  viewmodel.set("sign", !viewmodel.get("sign"));
  viewmodel.set("resize", !viewmodel.get("resize"));
  viewmodel.set("htmlString", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.19233623234!2d-58.3838516!3d-34.609267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7ad5404e98d8613!2sTeatro+Avenida!5e0!3m2!1ses!2sar!4v1470673305099" width="100%" height="+"resize"+" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');
}

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
