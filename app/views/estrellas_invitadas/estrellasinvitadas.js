var observable      = require("data/observable");
var observableArray = require("data/observable-array").ObservableArray
var LabelModule = require("ui/label");
var ImageModule = require("ui/image");

var viewmodel = new observable.Observable({});

var name;
var lastName;
var country;
var imgPath;
var currentIndex = 0;
var layout;

var  magicians = [
    {name: "Alex Nebur", country: "Argentina", imgPath: "~/images/artists/alexNebur - argentina.png"},
    {name: "Ariel Junior", country: "Uruguay", imgPath: "~/images/artists/arielJunior - uruguay.png"},
    {name: "Biktor Chavez", country: "Mexico", imgPath: "~/images/artists/biktorChavez - mexico.png"},
    {name: "Bodie Blake", country: "Brasil", imgPath: "~/images/artists/bodieBlake - brasil.png"},
    {name: "Brando Silvana", country: "España", imgPath: "~/images/artists/brandoSilvana - españa.png"},
    {name: "Byron", country: "Bolivia", imgPath: "~/images/artists/byron - bolivia.png"},
    {name: "Cristian Magic", country: "Argentina", imgPath: "~/images/artists/cristianMagic - argentina.png"},
    {name: "Dani Daortiz", country: "España", imgPath: "~/images/artists/daniDaortiz - españa.png"},
    {name: "Daniel Garber", country: "Argentina", imgPath: "~/images/artists/danielGarber - argentina.png"},
    {name: "Daniel Raley", country: "Argentina", imgPath: "~/images/artists/danielRaley - argentina.png"},
    {name: "Fantasio", country: "Argentina", imgPath: "~/images/artists/fantasio - argentina.png"},
    {name: "Fernando Arribas", country: "España", imgPath: "~/images/artists/fernandoArribas - españa.png"},
    {name: "Fernando Arsenian", country: "Argentina", imgPath: "~/images/artists/fernandoArsenian - argentina.png"},
    {name: "Fred Karis", country: "USA", imgPath: "~/images/artists/fredKaris - USA.png"},
    {name: "Gaferlo", country: "Mexico", imgPath: "~/images/artists/gaferlo - mexico.png"},
    {name: "Gustav", country: "Argentina", imgPath: "~/images/artists/gustav - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
    {name: "", country: "Argentina", imgPath: "~/images/artists/ - argentina.png"},
  ];

exports.swipeStack = function(args) {
  // args.direction
  // 1 if left
  // 2 if right
  if(args.direction === 1) {
    if(currentIndex === 0) {
      currentIndex = magicians.length-1;
      update();
    }
    else {
      currentIndex--;
      update();
    }
  }
  else if(args.direction === 2) {
    if(currentIndex === magicians.length-1) {
      currentIndex = 0;
      update();
    }
    else {
      currentIndex++;
      update();
    }
  }
}

var animateLayout = function(layout, val) {
  layout.animate({
    opacity: val, duration: 400
  })
}

exports.pageLoaded = function(args) {
  page = args.object;
  layout = page.getViewById('myContainer')
  page.bindingContext = viewmodel;
  update();
}

var update = function() {
  layout.opacity = 0;
  name = magicians[currentIndex].name;
  lastName = magicians[currentIndex].lastName;
  country = magicians[currentIndex].country;
  imgPath = magicians[currentIndex].imgPath;
  viewmodel.set("name", name);
  viewmodel.set("country", country);
  viewmodel.set("imgPath", imgPath);
  animateLayout(layout, 1);
}
