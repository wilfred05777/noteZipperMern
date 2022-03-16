//// https://github.com/piyush-eon/notezipper/blob/master/frontend/src/screens/MyNotes/MyNotes.js

// https://www.youtube.com/watch?v=ekqeN_89F-M&list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo&index=7

import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";
import notes from "../../data/notes";

function MyNotes({ history, search }) {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title="Welcome Back Wilfred">
      <Link to="/createnote">
        <Button
          variant="outline-dark"
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
        >
          Create Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ margin: 10 }} key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                // onClick={() => ModelShow(note)}
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <p>{note.content}</p>
                <blockquote className="blockquote mb-0">
                  {/* <ReactMarkdown>{note.content}</ReactMarkdown> */}
                  <footer className="blockquote-footer">
                    Created on{" "}
                    {/* <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite> */}
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes;
