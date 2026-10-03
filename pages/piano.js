
// const synth = new TransformStream.Synth().toDestination();

// synth.triggerAttackRelease("C4", "8n");

notes = {
  'Escape': "C2",
    'q': "C#2",
  'a': "D3",
    'w': "D#3",
  's': "E3",
  'd': "F3",
    'r': "F#3",
  'f': "G3",
    't': "G#3",
  'g': "A3",
    'y': "A#3",
  'h': "B3",
  'j': "C4",
    'u': "C#4",
  'k': "D4",
    'i': "D#4",
  'l': "E4",
  ';': "F4",
    'p': "F#4",
  "'": "G4",
    '[': "G#4",
  '#': "A4",
    ']': "A#4",
  'Enter': "B4",
}

function playNote(keyboardKey = "a") {
  // create a synth
  const synth = new Tone.Synth().toDestination();

  // convert keyboard key to keyboard note
  keyboardNote = notes[keyboardKey];

  // play a note from that synth
  synth.triggerAttackRelease(keyboardNote, "8n");
}


const p = document.querySelector("p");

document.body.addEventListener("keydown", (event) => {
  // synth.triggerAttackRelease("C4", "8n");
  p.textContent = event.key;
  console.log(event);
  playNote(event.key);
  // synth.triggerAttackRelease("C4", "8n");
})

