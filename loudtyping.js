// List of funny sound files (must be in sounds/ folder)
const sounds = [
  "sounds/catmeow.mp3.wav",
  "sounds/clownfunny.mp3.wav",
  "sounds/cowmoo.mp3.wav",
  "sounds/creaturelaugh.mp3.wav",
  "sounds/disappoint.mp3.wav",
  "sounds/sadhorn.mp3.wav",
  "sounds/sneeze.mp3.wav"
];

document.getElementById("typeArea").addEventListener("keydown", (event) => {
  // Pick a random sound
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);

  // Make CAPS sound louder 😏
  if (event.key === event.key.toUpperCase() && event.key.match(/[A-Z]/)) {
    audio.volume = 1;
  } else {
    audio.volume = 0.5;
  }

  audio.play();
});