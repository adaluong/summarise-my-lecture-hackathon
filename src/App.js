import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [dummyTranscript, setDummyTranscript] = useState("");

  useEffect(() => {
    fetch('/dummy_transcript')
      .then(r => r.json())
      .then(data => {
        setDummyTranscript(data.transcript);
      })
  }, []);

  return (
    <div className="App">
      <main>
        {dummyTranscript}
      </main>
    </div>
  );
}

export default App;
