interface Audio{
    Play(): any;
} //End_Interface

class Songg implements Audio {
    constructor(
        //private Artist: string,
        private Title: string
    ){} //End_Constructor

    public Play(): void{
        console.log("Playing " + this.Title + " by " + this.Title);
    } //End_Method

    public static Comparer(a: Songg, b: Songg): number{
        if(a.Title == b.Title){ return 0}
        return a.Title > b.Title ? 1 : -1;
    } // End_Method
} //End_Class

class Playlist {
    constructor(
        public Songs: Songg[]
    ){}

    public Play(): void {
        var song = this.Songs.pop();
        if(typeof song != "undefined") { song.Play()}
    } //End_Method

    public Sort(): void {
        this.Songs.sort(Songg.Comparer);
    } //End_Method
} //End_Class

class RepeatingPlaylist extends Playlist {
    private SongIndex = 0;
    constructor(
        public Songs: Songg[]
    ){
        super(Songs)
    } //End_Constructor

    public Play(): void {
        this.Songs[this.SongIndex].Play();
        this.SongIndex += 1;
        if (this.SongIndex >= this.Songs.length){
            this.SongIndex = 0;
        } //End_If
    } //End_Method
} //End_Class