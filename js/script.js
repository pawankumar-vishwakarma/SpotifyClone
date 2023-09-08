//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('/songs/Shriman Narayan Hari Hari.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Shriman Narayan Hari Hari", filePath: "/songs/Shriman Narayan Hari Hari.mp3", coverPath: "/img/shreeman.jpg", timeStamp: "04:29"},
    {songName:"Tumhe Kitna Pyaar Karte - Bawaal", filePath: "/songs/Tumhe Kitna Pyaar Karte - Bawaal.mp3", coverPath: "/img/Tumhe Kitna Pyaar Karte.jpg", timeStamp: "05:05"},
    {songName:"Ve Kamleya - Rocky Aur Rani Kii Prem Kahaani", filePath: "/songs/Ve Kamleya - Rocky Aur Rani Kii Prem Kahaani.mp3", coverPath: "/img/Ve Kamleya.jpg", timeStamp: "04:07"},
    {songName:"Yaar Ka Sataya Hua Hai - B Praak", filePath: "/songs/Yaar Ka Sataya Hua Hai - B Praak.mp3", coverPath: "/img/Yaar Ka Sataya Hua Hai.jpg", timeStamp: "04:27"},
    {songName:"Shriman Narayan Hari Hari", filePath: "/songs/Shriman Narayan Hari Hari.mp3", coverPath: "/img/shreeman.jpg", timeStamp: "04:29"},
    {songName:"Tumhe Kitna Pyaar Karte - Bawaal", filePath: "/songs/Tumhe Kitna Pyaar Karte - Bawaal.mp3", coverPath: "/img/Tumhe Kitna Pyaar Karte.jpg", timeStamp: "05:05"},
    {songName:"Ve Kamleya - Rocky Aur Rani Kii Prem Kahaani", filePath: "/songs/Ve Kamleya - Rocky Aur Rani Kii Prem Kahaani.mp3", coverPath: "/img/Ve Kamleya.jpg", timeStamp: "04:07"},
    {songName:"Yaar Ka Sataya Hua Hai - B Praak", filePath: "/songs/Yaar Ka Sataya Hua Hai - B Praak.mp3", coverPath: "/img/Yaar Ka Sataya Hua Hai.jpg", timeStamp: "04:27"},
    {songName:"Shriman Narayan Hari Hari", filePath: "/songs/Shriman Narayan Hari Hari.mp3", coverPath: "/img/shreeman.jpg", timeStamp: "04:29"},    
    {songName:"Shriman Narayan Hari Hari", filePath: "/songs/Shriman Narayan Hari Hari.mp3", coverPath: "/img/shreeman.jpg", timeStamp: "04:29"}
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("duration")[0].innerText = songs[i].timeStamp;
});

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.title = "Pause";
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        masterPlay.title = "Play";
        gif.style.opacity = 0;
    }
});
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/ 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{        
        makeAllPlays();
        songIndex = Array.from(document.getElementsByClassName('songItemPlay')).indexOf(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

//Previous Button
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex >= 1){
        songIndex = songIndex-1;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else{
        songIndex = 0;
    }
});

//Next Button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= (songs.length - 1)){
        songIndex = 0;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        songIndex = songIndex+1
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
});