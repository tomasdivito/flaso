var Image = require("ui/image").Image;
var TextView = require("ui/text-view").TextView;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var layout = require("ui/layouts/grid-layout");

var  magicians = [
    {name: "Alex Nebur", country: "Argentina", imgPath: "~/images/artists/alexNebur - argentina.png"},
    {name: "Ariel Junior", country: "Uruguay", imgPath: "~/images/artists/arielJunior - uruguay.png"},
    {name: "Biktor Chavez", country: "Mexico", imgPath: "~/images/artists/biktorChavez - mexico.png"},
    {name: "Bodie Blake", country: "Brasil", imgPath: "~/images/artists/bodieBlake - brasil.png"},
    {name: "Brando Silvana", country: "Espana", imgPath: "~/images/artists/brandoSilvana - espana.png"},
    {name: "Byron", country: "Bolivia", imgPath: "~/images/artists/byron - bolivia.png"},
    {name: "Cristian Magic", country: "Argentina", imgPath: "~/images/artists/cristianMagic - argentina.png"},
    {name: "Dani Daortiz", country: "Espana", imgPath: "~/images/artists/daniDaortiz - espana.png"},
    {name: "Daniel Garber", country: "Argentina", imgPath: "~/images/artists/danielGarber - argentina.png"},
    {name: "Daniel Raley", country: "Argentina", imgPath: "~/images/artists/danielRaley - argentina.png"},
    {name: "Fantasio", country: "Argentina", imgPath: "~/images/artists/fantasio - argentina.png"},
    {name: "Fernando Arsenian", country: "Argentina", imgPath: "~/images/artists/fernandoArsenian - argentina.png"},
    {name: "Fred Karis", country: "USA", imgPath: "~/images/artists/fredKaris - USA.png"},
    {name: "Gaferlo", country: "Mexico", imgPath: "~/images/artists/gaferlo - mexico.png"},
    {name: "Gustav", country: "Argentina", imgPath: "~/images/artists/gustav - argentina.png"},
    {name: "Hector Mancha", country: "Espana", imgPath: "~/images/artists/hectorMancha - espana.png"},
    {name: "Henry Evans", country: "Argentina", imgPath: "~/images/artists/henryEvans - argentina.png"},
    {name: "Hernic", country: "Argentina", imgPath: "~/images/artists/hernic - argentina.png"},
    {name: "Jim", country: "Mexico", imgPath: "~/images/artists/jim - mexico.png"},
    {name: "Juan Pablo Ibanez", country: "Argentina", imgPath: "~/images/artists/juanPabloIbanez - argentina.png"},
    {name: "Karim", country: "Espana", imgPath: "~/images/artists/karim - espana.png"},
    {name: "Luis Otero", country: "Venezuela", imgPath: "~/images/artists/luisOtero - venezuela.png"},
    {name: "Marcelo Bonetti", country: "Argentina", imgPath: "~/images/artists/marceloBonetti - argentina.png"},
    {name: "Marcius Matias", country: "Argentina", imgPath: "~/images/artists/marciusMatias - argentina.png"},
    {name: "Marko", country: "Panama", imgPath: "~/images/artists/marko - panama.png"},
    {name: "Norberto De Sabato", country: "Argentina", imgPath: "~/images/artists/norbertoDeSabato - argentina.png"},
    {name: "Red Star Seong", country: "Korea", imgPath: "~/images/artists/redStarSeong - korea.png"},
    {name: "Rene Arboleda", country: "Ecuador", imgPath: "~/images/artists/reneArboleda - ecuador.png"},
    {name: "Richard Sarmiento", country: "Colombia", imgPath: "~/images/artists/richardSarmiento - colombia.png"},
    {name: "Roberto Giobbi", country: "Suiza", imgPath: "~/images/artists/robertoGiobbi - suiza.png"},
    {name: "Rodo", country: "Argentina", imgPath: "~/images/artists/rodo - argentina.png"},
    {name: "Spider", country: "Mexico", imgPath: "~/images/artists/spider - mexico.png"},
    {name: "Uno Medio", country: "Argentina", imgPath: "~/images/artists/unoMedio - argentina.png"},
    {name: "Volkane", country: "Argentina", imgPath: "~/images/artists/volkane - argentina.png"},
    {name: "Zerrot", country: "Argentina", imgPath: "~/images/artists/zerrot - argentina.png"},
    // Nuevos invitados agregados
    // Added
    {name: "Boris Wild", country: "Francia", imgPath: "~/images/artists/boris.png"},
    {name: "Juan Luis Rubiales", country: "España", imgPath: "~/images/artists/juanluis.png"},
    {name: "Caio Fereira", country: "Brasil", imgPath: "~/images/artists/caio.png"},
    {name: "Merpin", country: "Argentina", imgPath: "~/images/artists/mepin.png"},
    {name: "Agustin Vigione", country: "Argentina", imgPath: "~/images/artists/agus.png"},
    {name: "Matus", country: "Argentina", imgPath: "~/images/artists/matus.png"}
  ];

var loadGridGallery = function(gg) {
  for(var i = 0; i < magicians.length; i++) {
    var stackLayout = new StackLayout();
    layout.GridLayout.setColumn(stackLayout, i);
    gg.addChild(stackLayout);

    var img = new Image();
    img.src = magicians[i].imgPath;
    var txtname = new TextView();
    txtname.text = magicians[i].name;
    var txtcountry = new TextView();
    txtcountry.text = magicians[i].country;

    stackLayout.addChild(img);
    stackLayout.addChild(txtname);
    stackLayout.addChild(txtcountry);
  }
}

exports.pageLoaded = function(args) {
  var page = args.object;
  var gridgallery = page.getViewById('gridgallery')
  loadGridGallery(gridgallery);
}
