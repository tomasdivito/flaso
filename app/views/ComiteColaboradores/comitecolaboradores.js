var Image = require("ui/image").Image;
var TextView = require("ui/text-view").TextView;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var layout = require("ui/layouts/grid-layout");

var colaboradores = [
  {name: "Adrian Garde", subtitle: "RRPP", imgPath: "~/images/comite/colaboradores/adrian garde - rrpp.png"},
  {name: "Alexander", subtitle: "Secretaria Administrativa", imgPath: "~/images/comite/colaboradores/alexander - secretaria administrativa.png"},
  {name: "Daniel Raley", subtitle: "Feria de dealers", imgPath: "~/images/comite/colaboradores/daniel raley - feria de dealers.png"},
  {name: "Fantasio", subtitle: "Asesor artistico", imgPath: "~/images/comite/colaboradores/fantasio - asesor artistico.png"},
  {name: "Gustavo Valentini", subtitle: "Director de Competencias", imgPath: "~/images/comite/colaboradores/gustavo valentini - director de competencias.png"},
  {name: "Henry Evans", subtitle: "Asesor artistico", imgPath: "~/images/comite/colaboradores/henry evans - asesor artistico.png"},
  {name: "Multtán", subtitle: "Director artistico", imgPath: "~/images/comite/colaboradores/multtan - director artistico.png"},
  {name: "Natalia Cahiza", subtitle: "RRPP", imgPath: "~/images/comite/colaboradores/natalia cahiza - rrpp.png"},
  {name: "Ramsor", subtitle: "Responsable de hoteleria", imgPath: "~/images/comite/colaboradores/ramsor - responsable de hoteleria.png"},
]

var loadGridGallery = function(gg) {
  for(var i = 0; i < colaboradores.length; i++) {
    var stackLayout = new StackLayout();
    stackLayout.cssClass = "col_container";
    layout.GridLayout.setColumn(stackLayout, i);
    gg.addChild(stackLayout);

    var img = new Image();
    img.cssClass = "col_img"
    img.src = colaboradores[i].imgPath;
    var txtname = new TextView();
    txtname.cssClass = "name";
    txtname.text = colaboradores[i].name;
    var txtsubtitle = new TextView();
    txtsubtitle.cssClass = "subtitle"
    txtsubtitle.text = colaboradores[i].subtitle;

    stackLayout.addChild(img);
    stackLayout.addChild(txtname);
    stackLayout.addChild(txtsubtitle);
  }
}

exports.pageLoaded = function(args) {
  var page = args.object;
  var gridgallery = page.getViewById('gridgallery')
  loadGridGallery(gridgallery);
}
