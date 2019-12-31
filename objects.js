

var playlist = { name: "The Killers", song : "Shadowplay" };


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {["name2"]: artistName, ["song2"]: songTitle})
}
