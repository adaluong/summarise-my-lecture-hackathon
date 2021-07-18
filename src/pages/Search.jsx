import './Search.css';
import React, { useState } from 'react';
import { Form, Button, Card, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [linkInput, setLinkInput] = useState("");
  const[activeTab, setActiveTab] = useState("youtube");

  const onChange = (e) => {
    e.preventDefault();
    setLinkInput(e.target.value);
  }

  const onSubmit = (youtubeLink) => {
    // regex to parse video id from
    // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    const reg = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = youtubeLink.match(reg);
    if (!match || match[7].length !== 11) {
      // do nothing i guess
      return;
    }
    const videoId = match[7];
    history.push(`/result/${videoId}`);
  }

  return (
    <div className="Search">
      <h1>
        Summarise My Lecture
      </h1>
      <Card className="formCard">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="youtubeTab">
            <Nav.Item>
              <Nav.Link eventKey="youtubeTab" onSelect={() => setActiveTab("youtube")}>
                Youtube
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="uploadTab" onSelect={() => setActiveTab("upload")}>
                Upload
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="formCardBody">
          {activeTab === "youtube" &&(
            <Form name="youtubeForm" onSubmit={() => onSubmit(linkInput)}>
              <Form.Group className="mb-3" controlId="formVideoLink">
                <Form.Control
                  type="text"
                  placeholder="Enter Youtube link"
                  onChange={onChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">Summarise!</Button>
            </Form>)}
          {activeTab === "upload" && (
            <Form name="uploadForm">
              <Form.Group controlId="uploadTranscript" className="mb-3">
                <Form.Label>Upload lecture recording</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="uploadChat" className="mb-3">
                <Form.Label>Upload chat records</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Summarise!
              </Button>
            </Form>
          )}
        </Card.Body>
     </Card>
   </div>
  );
}

export default Search;