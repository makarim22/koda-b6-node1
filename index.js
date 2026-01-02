const fs = require('fs');

const MJ = ["ManinTheMirror.mp3", "BillieJean.mp3", "BlackorWhite.mp3", "HealTheWorld.mp3", "BeatIt.mp3"];
const OASIS = ["DontLookBackInAnger.mp3", "LiveForever.mp3", "SlideAway.mp3", "Wonderwall.mp3", "Supersonic.mp3"];
const THE_BEATLES= ["HeyJude.mp3", "YellowSubmarine.mp3", "Imagine.mp3", "LetItBe.mp3", "PennyLane.mp3"];
const NIRVANA = ["SmellsLikeTeenSpirit.mp3", "HeartShapedBox.mp3", "ComeAsYouAre.mp3", "InBloom.mp3", "DrainYou.mp3"];
const BEE_GEES= ["HowDeepIsYourLove.mp3", "MoreThanAWoman.mp3", "Tragedy.mp3", "ToLoveSomebody.mp3", "StayingAlive.mp3"];

const playlist = [...MJ, ...OASIS, ...THE_BEATLES, ...NIRVANA, ...BEE_GEES];

const artist = ["MJ", "OASIS", "THE_BEATLES", "NIRVANA", "BEE_GEES"];

for (let i = 0; i < artist.length; i++) {
    fs.mkdir(artist[i], (err) => {});
 
for (let i = 0; i < playlist.length; i++) {
  fs.writeFile(
    "./" + artist[i] + "/" + playlist[i],
    "",
    (err) => {}
  );
}
}