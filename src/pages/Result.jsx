import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const { videoId } = useParams();
  const [qna, setQna] = useState([]);
  const [videoName, setVideoName] = useState("");

  useEffect(() => {
    // this code is executed when the page is loaded/reloaded
    // fetch sends a query to our server with the id of the Youtube video
    // change the url as required
    fetch(`/magic?id=${videoId}`)
      .then(r => r.json())
      .then(data => {
        setQna(data.qna);
        setVideoName(data.name);
      });
  }, []);

  return (
    <div className="Result">
      <h1>
        {videoName}
      </h1>
      <div className="qna">
        {qna.map((element, idx) => (
          <Card className="qnaCard" id={idx}>
            <Card.Header className="qnaQuestion">
              <strong>Q: </strong>{element.question}
            </Card.Header>
            <Card.Text className="qnaAnswer">
              <strong>A: </strong>{element.answer}
            </Card.Text>
          </Card>
        ))}
      </div>
   </div>
  );
}

export default Result;