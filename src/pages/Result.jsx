import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Result = () => {
  const { videoId } = useParams();
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // this code is executed when the page is loaded/reloaded
    // fetch sends a query to our server with the id of the Youtube video
    // change the url as required
    fetch(`/transcript?videoId=${videoId}`)
      .then(r => r.json())
      .then(data => {
        setTranscript(data.transcript);
      });
  }, []);

  return (
    <div className="Result">
      <h1>
        Video ID: {videoId}
      </h1>
      <h3>
        Transcript
      </h3>
      <p>
        {transcript}
      </p>
    </div>
  );
}

export default Result;