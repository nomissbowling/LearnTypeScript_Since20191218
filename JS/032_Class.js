"use strict";
class Song {
    constructor(Artist, Title) {
        this.Artist = Artist;
        this.Title = Title;
    } //End_Constructor
    Play() {
        console.log("Playing " + this.Title + " by " + this.Artist);
    } //End_Method
} //End_Class
class JukeBox {
    constructor(Songs) {
        this.Songs = Songs;
    }
    Play() {
        var song = this.GetRandomSong();
        song.Play();
    }
    GetRandomSong() {
        var songCount = this.Songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.Songs[songIndex];
    } //End_method
} //End_Class
var songs = [
    new Song("unti", "magephone"),
    new Song("Unpi", "pipip"),
    new Song("ngngng", "ngogogo"),
];
var jukeBox = new JukeBox(songs);
jukeBox.Play();
//# sourceMappingURL=032_Class.js.map