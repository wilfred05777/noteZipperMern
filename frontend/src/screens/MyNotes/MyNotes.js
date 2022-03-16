import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";

function MyNotes() {
  return (
    <MainScreen title="Welcome Back Wilfred">
      <Link to="createnote">
        <Button
          variant="outline-dark"
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
        >
          Create Note
        </Button>
      </Link>
    </MainScreen>
  );
}

export default MyNotes;
