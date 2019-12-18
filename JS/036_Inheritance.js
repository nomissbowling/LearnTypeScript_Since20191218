"use strict";
class Songg {
    constructor(
    //private Artist: string,
    Title) {
        this.Title = Title;
    } //End_Constructor
    Play() {
        console.log("Playing " + this.Title + " by " + this.Title);
    } //End_Method
    static Comparer(a, b) {
        if (a.Title == b.Title) {
            return 0;
        }
        return a.Title > b.Title ? 1 : -1;
    } // End_Method
} //End_Class
class Playlist {
    constructor(Songs) {
        this.Songs = Songs;
    }
    Play() {
        var song = this.Songs.pop();
        if (typeof song != "undefined") {
            song.Play();
        }
    } //End_Method
    Sort() {
        this.Songs.sort(Songg.Comparer);
    } //End_Method
} //End_Class
class RepeatingPlaylist extends Playlist {
    constructor(Songs) {
        super(Songs);
        this.Songs = Songs;
        this.SongIndex = 0;
    } //End_Constructor
    Play() {
        this.Songs[this.SongIndex].Play();
        this.SongIndex += 1;
        if (this.SongIndex >= this.Songs.length) {
            this.SongIndex = 0;
        } //End_If
    } //End_Method
} //End_Class
//# sourceMappingURL=036_Inheritance.js.map