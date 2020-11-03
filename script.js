const songs = [
    "04. Ed Sheeran - I Don't Care - (SongsLover.com).mp3",
    "05. Shawn Mendes - Señorita - (SongsLover.com).mp3",
    "Kanye West Ft. Post Malone & Justin Bieber - Jealous - (SongsLover.com).mp3",
    "Post Malone - Goodbyes (feat. Young Thug) - (SongsLover.com) (1).mp3",
    "Quavo - Too Much Shaft (with Saweetie) - (SongsLover.com).mp3"
]

const createSongList = () => {
    
    const list = document.createElement('ol');
    for(let song of songs) {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(song));
       list.appendChild(li);
    }
    return list;
}
document.getElementById('songList').appendChild(createSongList());

songList.onclick = (event) => {
    const clickedItem = event.target;
    const source = document.getElementById('source');
    source.src = 'songs/' + clickedItem.innerText;
    document.getElementById('currentSong').innerText = clickedItem.innerText;
    document.getElementById("currentlyPlayingSong").innerText = "Playing: "
    player.load();
    player.play();
}

const playAudio = () => {
    if(player.readyState) player.play();
}

const pauseAudio =() => {
    player.pause();
}

const slider = document.getElementById('volumeSlider');

slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

const updateProgress = () => {
    const progressBar = document.getElementById('progress');
    if (player.readyState && player.currentTime > 0){
    progressBar.value = (player.currentTime / player.duration) * 100 ; }
}