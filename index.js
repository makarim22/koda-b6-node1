const fs = require('fs');
const path = require('path'); 

const MJ = ["ManinTheMirror.mp3", "BillieJean.mp3", "BlackorWhite.mp3", "HealTheWorld.mp3", "BeatIt.mp3"];
const OASIS = ["DontLookBackInAnger.mp3", "LiveForever.mp3", "SlideAway.mp3", "Wonderwall.mp3", "Supersonic.mp3"];
const THE_BEATLES = ["HeyJude.mp3", "YellowSubmarine.mp3", "Imagine.mp3", "LetItBe.mp3", "PennyLane.mp3"];
const NIRVANA = ["SmellsLikeTeenSpirit.mp3", "HeartShapedBox.mp3", "ComeAsYouAre.mp3", "InBloom.mp3", "DrainYou.mp3"];
const BEE_GEES = ["HowDeepIsYourLove.mp3", "MoreThanAWoman.mp3", "Tragedy.mp3", "ToLoveSomebody.mp3", "StayingAlive.mp3"];

const artists = ["MJ", "OASIS", "THE_BEATLES", "NIRVANA", "BEE_GEES"];
const playlists = [MJ, OASIS, THE_BEATLES, NIRVANA, BEE_GEES];

for (let i = 0; i < artists.length; i++) {
    const artist = artists[i]; 
    const songs = playlists[i]; 
    const dirPath = path.join(__dirname, artist); 

    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            return; 
        }
        for (let j = 0; j < songs.length; j++) {
            const filePath = path.join(dirPath, songs[j]);
            fs.writeFile(filePath, '', (err) => {});
        }
    });
}
