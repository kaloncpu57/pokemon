// ==UserScript==
// @name         $race Tier List
// @namespace    https://github.com/kaloncpu57
// @version      0.0.1
// @description  Add $race game to tier list maker
// @updateURL    https://kaloncpu57.github.io/pokemon/pokken-discord/race.user.js
// @author       kaloncpu57
// @match        https://quetzle.github.io/smash-apps/tier/
// @grant        none
// ==/UserScript==

function race() {
  $("#1").css("background-image", "url(https://discordapp.com/assets/e7479bab4adffd1e04a83d8068929cdb.svg)");
  $("#2").css("background-image", "url(https://discordapp.com/assets/1b78123a5286af3af12ae91b105233b7.svg)");
  $("#3").css("background-image", "url(https://discordapp.com/assets/6ab348e4b840f727d585c68cbc8dc074.svg)");
  $("#4").css("background-image", "url(https://discordapp.com/assets/aa41a897bc1bc175c41689b00b99e1ea.svg)");
  $("#5").css("background-image", "url(https://discordapp.com/assets/4c896778d815af37a1a3f82e271b77b2.svg)");
  $("#6").css("background-image", "url(https://discordapp.com/assets/83c94a65a51a850f3d43aed9eb60e042.svg)");
  $("#7").css("background-image", "url(https://discordapp.com/assets/495e6dc58a86913df2477399e3e78838.svg)");
  $("#8").css("background-image", "url(https://discordapp.com/assets/bffd9a1668dbc714adda404b93489286.svg)");
  $(".character").each(function () {
    if(Number($(this).attr("id")) > 8) {
      $(this).remove();
    }
  });
}

var raceBtn = $("<button id='switchRace'>$race</button>").click(race);
$("#switchButtons").append(raceBtn);
