var observable    = require("data/observable");
var gestures      = require("ui/gestures");
var webViewModule = require("ui/web-view");
var frameModule   = require("ui/frame");

// Our new Observable view model for data binding
var viewmodel = new observable.Observable({});

function pageLoaded(args) {
    //code in order to show the iframe
    var page = args.object
    viewmodel.set("htmlString_teatro", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.19233623234!2d-58.3838516!3d-34.609267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7ad5404e98d8613!2sTeatro+Avenida!5e0!3m2!1ses!2sar!4v1470673305099" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');
    viewmodel.set("htmlString_hotel", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.358185078869!2d-58.3807014!3d-34.6018971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x482fc4977f2c5f44!2sHotel+Panamericano+Buenos+Aires!5e0!3m2!1ses!2sar!4v1470673406238" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');
    page.bindingContext = viewmodel;
}
exports.pageLoaded = pageLoaded;

exports.resize_viewmodel_teatro = function() {
  //var view = args.object;
  viewmodel.set("sign_teatro", !viewmodel.get("sign_teatro"))
  viewmodel.set("resize_teatro", !viewmodel.get("resize_teatro"));
  viewmodel.set("htmlString_teatro", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.19233623234!2d-58.3838516!3d-34.609267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7ad5404e98d8613!2sTeatro+Avenida!5e0!3m2!1ses!2sar!4v1470673305099" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');
}

exports.resize_viewmodel_hotel = function() {
  //var view = args.object;
  viewmodel.set("sign_hotel", !viewmodel.get("sign_hotel"));
  viewmodel.set("resize_hotel", !viewmodel.get("resize_hotel"));
  viewmodel.set("htmlString_hotel", '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.358185078869!2d-58.3807014!3d-34.6018971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x482fc4977f2c5f44!2sHotel+Panamericano+Buenos+Aires!5e0!3m2!1ses!2sar!4v1470673406238" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="" class="img-responsive"></iframe>');
}
