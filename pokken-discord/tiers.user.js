// ==UserScript==
// @name         Extra Tier Lists
// @namespace    https://github.com/kaloncpu57
// @version      0.5.0
// @description  Add extra games to tier list maker
// @updateURL    https://kaloncpu57.github.io/pokemon/pokken-discord/tiers.user.js
// @author       kaloncpu57
// @match        https://quetzle.github.io/smash-apps/tier/
// @grant        none
// ==/UserScript==

function gameChanger(game) {
  currentGameChars = [];
  currentGameChars = game;
  currentGame = game[0];
  var ext = ".png";
  if (currentGame == "$race") {
    ext = ".svg";
  }
  $(".character").each(function () {
    $(this).remove();
  });
  for (var i = 1; i < game.length; i++) {
    $("#char div:last-child").after(singleChar);
    $("#char div:last-child").css({"background-image": "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/" + game[i] + (currentGame == "Pokkén" ? "-dx" : "") + ext, "background-size": "100% 100%"});
    $("#char div:last-child").attr("id", i);
  }
  $("h1 span").text(currentGame);
  updateTiers();
}

var race = ["$race", "dolphin", "koala", "bear", "crab", "penguin", "beetle", "panda", "unicorn"];
var pokken = ["Pokkén", "darkrai", "blaziken", "pikachu", "lucario", "gardevoir", "pikachu-libre", "scizor", "croagunk", "sceptile", "gengar", "decidueye", "machamp", "braixen", "empoleon", "mewtwo", "chandelure", "suicune", "weavile", "charizard", "garchomp", "shadow-mewtwo", "litten", "popplio", "emolga", "fennekin", "snivy", "lapras", "frogadier", "eevee", "mismagius", "ninetales", "jirachi", "whimsicott", "croagunk-support", "sylveon", "farfetchd", "electrode", "pachirisu", "magikarp", "cubone", "diglett", "magneton", "quagsire", "espeon", "umbreon", "rotom", "togekiss", "dragonite", "victini", "reshiram", "cresselia", "yveltal", "latios"];

$("#switchButtons").append($("<hr/>"));
var raceBtn = $("<button id='switchRace'>$race</button>").click(function () {
  gameChanger(race);
});
$("#switchButtons").append(raceBtn);
$("#switchButtons button:last-child").after(" ");
var pokkenBtn = $("<button id='switchPokken'>Pokk&#233;n Tournament</button>").click(function () {
  gameChanger(pokken);
});
$("#switchButtons").append(pokkenBtn);

$(window).unload(function () {
  var customGames = ["$race", "Pokkén"];
  var stored = localStorage.getItem("TierListMakerCode").split("==")[0];
  if (customGames.indexOf(stored) != -1) {
    localStorage.removeItem("TierListMakerCode");
  }
});
