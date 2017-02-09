var Image = require("ui/image").Image;
var TextView = require("ui/text-view").TextView;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var layout = require("ui/layouts/grid-layout");
var scrollViewModule = require("ui/scroll-view");

var images = [
  { day: 1, path: "~/images/gallery/image1.jpg" },
  { day: 1, path: "~/images/gallery/image2.jpg"},
  { day: 2, path: "~/images/gallery/image3.jpg" },
  { day: 3, path: "~/images/gallery/image3.jpg" }
]

function loadGallery(gallery) {
  // Generate Day 1 gallery
  var dayone = images.filter(function(obj) {
      if (obj.day === 1) {
        return true
      }
    })

  if(dayone.length > 0) {
    var stackLayout = new StackLayout();
    gallery.addChild(stackLayout);

    var textDay = new TextView();
    textDay.text = "Day 1";
    stackLayout.addChild(textDay);

    var scroll = new scrollViewModule.ScrollView();
    scroll.cssClass = 'scroll';
    gallery.addChild(scroll);

    var grid = new layout.GridLayout();
    grid.cssClass = 'grid';

    for (var i = 0; i < dayone.length; i++) {
      var stack = new StackLayout();
      stack.cssClass = 'gallery-image';

      grid.addColumn(new layout.ItemSpec(400, layout.GridUnitType.pixel));
      layout.GridLayout.setColumn(stack, i);
      grid.addChild(stack);

      var image = new Image();
      image.src = dayone[i].path;
      stack.addChild(image);
    }
    scroll._addView(grid);
  }
  // Generate Day 2 gallery
  var daytwo = images.filter(function(obj) {
      if (obj.day === 2) {
        return true
      }
    })

  if(daytwo.length > 0) {
    var stackLayout = new StackLayout();
    gallery.addChild(stackLayout);

    var textDay = new TextView();
    textDay.text = "Day 2";
    stackLayout.addChild(textDay);

    var scroll = new scrollViewModule.ScrollView();
    scroll.cssClass = 'scroll';
    gallery.addChild(scroll);

    var grid = new layout.GridLayout();
    grid.cssClass = 'grid';

    for (var i = 0; i < daytwo.length; i++) {
      var stack = new StackLayout();
      stack.cssClass = 'gallery-image';

      grid.addColumn(new layout.ItemSpec(400, layout.GridUnitType.pixel));
      layout.GridLayout.setColumn(stack, i);
      grid.addChild(stack);

      var image = new Image();
      image.src = daytwo[i].path;
      stack.addChild(image);
    }
    scroll._addView(grid);
  }
  // Generate Day 3 gallery
  var daythree = images.filter(function(obj) {
      if (obj.day === 3) {
        return true
      }
    })

  if(daythree.length > 0) {
    var stackLayout = new StackLayout();
    gallery.addChild(stackLayout);

    var textDay = new TextView();
    textDay.text = "Day 3";
    stackLayout.addChild(textDay);

    var scroll = new scrollViewModule.ScrollView();
    scroll.cssClass = 'scroll';
    gallery.addChild(scroll);

    var grid = new layout.GridLayout();
    grid.cssClass = 'grid';

    for (var i = 0; i < daythree.length; i++) {
      var stack = new StackLayout();
      stack.cssClass = 'gallery-image';

      grid.addColumn(new layout.ItemSpec(400, layout.GridUnitType.pixel));
      layout.GridLayout.setColumn(stack, i);
      grid.addChild(stack);

      var image = new Image();
      image.src = daythree[i].path;
      stack.addChild(image);
    }
    scroll._addView(grid);
  }
  // Generate Day 4 gallery
  var dayfour = images.filter(function(obj) {
      if (obj.day === 4) {
        return true
      }
    })

  if(dayfour.length > 0) {
    var stackLayout = new StackLayout();
    gallery.addChild(stackLayout);

    var textDay = new TextView();
    textDay.text = "Day 4";
    stackLayout.addChild(textDay);

    var scroll = new scrollViewModule.ScrollView();
    scroll.cssClass = 'scroll';
    gallery.addChild(scroll);

    var grid = new layout.GridLayout();
    grid.cssClass = 'grid';

    for (var i = 0; i < dayfour.length; i++) {
      var stack = new StackLayout();
      stack.cssClass = 'gallery-image';

      grid.addColumn(new layout.ItemSpec(400, layout.GridUnitType.pixel));
      layout.GridLayout.setColumn(stack, i);
      grid.addChild(stack);

      var image = new Image();
      image.src = dayfour[i].path;
      stack.addChild(image);
    }
    scroll._addView(grid);
  }

  // Generate Day 5 gallery
  var dayfive = images.filter(function(obj) {
      if (obj.day === 5) {
        return true
      }
    })

  if(dayfive.length > 0) {
    var stackLayout = new StackLayout();
    gallery.addChild(stackLayout);

    var textDay = new TextView();
    textDay.text = "Day 5";
    stackLayout.addChild(textDay);

    var scroll = new scrollViewModule.ScrollView();
    scroll.cssClass = 'scroll';
    gallery.addChild(scroll);

    var grid = new layout.GridLayout();
    grid.cssClass = 'grid';

    for (var i = 0; i < dayfive.length; i++) {
      var stack = new StackLayout();
      stack.cssClass = 'gallery-image';

      grid.addColumn(new layout.ItemSpec(400, layout.GridUnitType.pixel));
      layout.GridLayout.setColumn(stack, i);
      grid.addChild(stack);

      var image = new Image();
      image.src = dayfive[i].path;
      stack.addChild(image);
    }
    scroll._addView(grid);
  }

}

var pageLoaded = function (args) {
  var page = args.object;
  var gallery = page.getViewById('gallery');
  loadGallery(gallery);
}
exports.pageLoaded = pageLoaded;
