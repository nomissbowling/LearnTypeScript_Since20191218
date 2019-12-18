"use strict";
class PlayList {
    constructor(name_) {
        this.Songs = [];
        this.Name = name_;
    }
    AddSong(song) {
        if (this.Songs.length >= PlayList.MaxSongCount) {
            throw new Error("Playlist is full");
        }
        this.Songs.push(song);
    } //End_Method
} //End_Class
PlayList.MaxSongCount = 30;
// インスタンスの作成
let playlist = new PlayList("My Playlist");
let name_ = playlist.Name;
playlist.AddSong(new Song("Therapy?", "Crooked Timber"));
let maxSong = PlayList.MaxSongCount;
//# sourceMappingURL=034_PropertyAndMethod.js.map