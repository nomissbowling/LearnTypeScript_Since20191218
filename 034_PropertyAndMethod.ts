class PlayList{
	private Songs: Song[] = [];
	public Name: string;
	public static MaxSongCount = 30;

	public constructor(name_: string){
		this.Name = name_;
	}

	public AddSong(song: Song): void{
		if(this.Songs.length >= PlayList.MaxSongCount){
			throw new Error("Playlist is full");
		}
		this.Songs.push(song);
	} //End_Method
} //End_Class

// インスタンスの作成
let playlist = new PlayList("My Playlist");
let name_ = playlist.Name;
playlist.AddSong(new Song("Therapy?", "Crooked Timber"));
let maxSong = PlayList.MaxSongCount;
