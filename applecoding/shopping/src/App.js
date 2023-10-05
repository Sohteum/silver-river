import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Card shoes={shoes[0].title}></Card>
          <Card shoes={shoes[1].title}></Card>
          <Card shoes={shoes[2].title}></Card>
          <Col sm>
            
          </Col>
          <Col sm>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src="/shoes1.jpg" width="80%" alt="" />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].price}</p>
    </Col>
  );
}

export default App;


