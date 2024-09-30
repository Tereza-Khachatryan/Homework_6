function Playlist (){
    this.songArray = []
    this.currentIndex = 0
}

function Song (name ,author){
    this.name = name
    this.author = author
}

Playlist.prototype.add = function (song){
     this.songArray.push(song)
}

Playlist.prototype.play = function (song){
    if(this.songArray.length > 0){
        const currentSong = this.songArray[this.currentIndex]
        return `${currentSong.name} started to play`
    } else {
        return "No songs in the playlist"
    }
}

Playlist.prototype.stop = function (song){
    const currentSong = this.songArray[this.currentIndex]
    if(currentSong){
    return `${currentSong.name} stopped`
    } else {
        return "No song is playing "
    }
}

Playlist.prototype.next = function (){
    const currentSong = this.songArray[this.currentIndex]
    if(currentSong){
        this.currentIndex = (this.currentIndex + 1) % this.songArray.length
        const nextSong = this.songArray[this.currentIndex]
        return `${currentSong.name} stopped, ${nextSong.name} started`
    } else {
        return "No song is playing"
    }
}

const playlist = new Playlist()
const heyJude = new Song("Hey Jude", "The Beatles")
const jaded = new Song("Jaded", "Aerosmith")


playlist.add(heyJude)
playlist.add(jaded);
console.log(playlist.play())
console.log(playlist.next())
console.log(playlist.next())
console.log(playlist.stop())
console.log(playlist.play())



