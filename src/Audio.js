
import React, { useEffect, useState } from 'react';

function App() {

  // use Audio constructor to create HTMLAudioElement
  const audioTune = new Audio('<deveram.mp3>');

  // variable to play audio in loop
  const [playInLoop, setPlayInLoop] = useState(false);

  // load audio file on component load
  useEffect(() => {
    audioTune.load();
  }, [])

  // set the loop of audio tune
  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop])

  // play audio sound
  const playSound = () => {
    audioTune.play();
  }

  // pause audio sound
  const pauseSound = () => {
    audioTune.pause();
  }

  // stop audio sound
  const stopSound = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
  }

  return (
    <div className="App">
      <h3 className="mb-4">Play an mp3 file - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>

      <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
      <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound}></input>
      <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>

      <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
    </div>
  );
}

export default App;

