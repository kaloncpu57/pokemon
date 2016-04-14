String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pokemonList = localStorage.getItem("pokemonList");
var corrections = {122: "Mr. Mime", 386: "Deoxys", 413: "Wormadam", 439: "Mime Jr.", 487: "Giratina", 492: "Shaymin", 550: "Basculin", 555: "Darmanitan", 641: "Tornadus", 642: "Thundurus", 645: "Landorus", 647: "Keldeo", 648: "Meloetta", 678: "Meowstic", 681: "Aegislash", 710: "Pumpkaboo", 711: "Gourgeist"};
if (!pokemonList) {
  $.getJSON("http://pokeapi.co/api/v2/pokemon/?limit=721&callback=").success(function (data) {
    window.pokemonList = data;
    for (var i in corrections) {
      pokemonList.results[i - 1].name = corrections[i];
    }
    localStorage.setItem("pokemonList", JSON.stringify(data));
  });
} else {
  pokemonList = JSON.parse(pokemonList);
  for (var i in corrections) {
    pokemonList.results[i - 1].name = corrections[i];
  }
}

function getRandMon() {
  var x = rand(1, pokemonList.results.length);
  var choice = pokemonList.results[x - 1];
  var leadx = x;
  if (x < 100) {
    leadx = "0" + leadx;
  }
  if (x < 10) {
    leadx = "0" + leadx;
  }
  var pokemon = {
    name: choice.name.capitalize(),
    url: choice.url,
    sprite: "http://pokeapi.co/media/sprites/pokemon/" + x + ".png"
  };

  return pokemon;
}

$(function () {
  $(".pokemon").click(function () {
    var pokemon = getRandMon();
    var main = this;
    $(this).find('.sprite').html('');
    $(this).find('h2').text('');
    $(this).find('.sprite').append("<div class='slot-line'></div>");
    var slot = $(this).find('.sprite').find("div");
    $(slot).append("<div class='slot-tile'><img src='" + pokemon.sprite + "' /></div>");
    for (var i = 0; i < 10; i++) {
      var filler = getRandMon();
      $(slot).append("<div class='slot-tile'><img src='" + filler.sprite + "' /></div>");
    }
    var machine = $(slot).slotMachine({active: 5, delay: 500, direction: 'down'});
    machine.setRandomize(function () {return 0});
    machine.shuffle();
    setTimeout(function () {
      machine.stop();
      $(main).find("h2").text(pokemon.name.capitalize());
    }, 1500);
  });

  $("#thanks-btn").click(function () {
    BootstrapDialog.show({
      title: "Thanks to All These People",
      message: $("#thanks").html(),
      size: "size-wide",
      nl2br: false
    });
  });

  $("#instructions-btn").click(function () {
    BootstrapDialog.show({
      title: "Instructions",
      message: $("#instructions").html(),
      size: "size-wide",
      nl2br: false
    });
  });
});
