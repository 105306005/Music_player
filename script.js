const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

//Music
const songs = [
  {
    name: "cali",
    displayName: "Cali",
    artist: "Wataboi",
  },
  {
    name: "I_Wonder",
    displayName: "I Wonder",
    artist: "DreamHeaven",
  },
  {
    name: "50",
    displayName: "50",
    artist: "Tobylane",
  },
];

//Check if play
let isPlaying = false;

//Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

//Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

//Play or Pause Event Listener
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

//Update DOM
