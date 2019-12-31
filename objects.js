

var playlist = { name: "The Killers", song : "Shadowplay" };


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[name] : artistName, [song]: songTitle})
}
