import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        witdh: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
      bg="dark"
      variant="dark"
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Note Zipper</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
