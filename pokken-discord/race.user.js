// ==UserScript==
// @name         $race Tier List
// @namespace    https://github.com/kaloncpu57
// @version      0.1.0
// @description  Add $race game to tier list maker
// @updateURL    https://kaloncpu57.github.io/pokemon/pokken-discord/race.user.js
// @author       kaloncpu57
// @match        https://quetzle.github.io/smash-apps/tier/
// @grant        none
// ==/UserScript==

function race() {
  $("#1").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/dolphin.svg)");
  $("#2").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/koala.svg)");
  $("#3").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/bear.svg)");
  $("#4").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/crab.svg)");
  $("#5").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/penguin.svg)");
  $("#6").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/beetle.svg)");
  $("#7").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/panda.svg)");
  $("#8").css("background-image", "url(https://kaloncpu57.github.io/pokemon/pokken-discord/characters/unicorn.svg)");
  $(".character").each(function () {
    if(Number($(this).attr("id")) > 8) {
      $(this).remove();
    }
  });
  $("#controls").find("span").text("$race");
}

var raceBtn = $("<button id='switchRace'>$race</button>").click(race);
$("#switchButtons").append(raceBtn);
