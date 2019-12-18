class Song{
    constructor(private Artist: string, private Title: string) {
    } //End_Constructor

    public Play(){
        console.log("Playing " + this.Title + " by " + this.Artist);
    } //End_Method
} //End_Class

class JukeBox {
    constructor(private Songs: Song[]){}

    public Play(){
        var song = this.GetRandomSong();
        song.Play();
    }

    private GetRandomSong(){
        var songCount = this.Songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.Songs[songIndex];
    } //End_method
} //End_Class

var songs = [
    new Song("unti", "magephone"),
    new Song("Unpi", "pipip"),
    new Song("ngngng", "ngogogo"),
]

var jukeBox = new JukeBox(songs);
jukeBox.Play();