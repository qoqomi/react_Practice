import logo from "./logo.svg";
import "./App.css";
//button 부트스트랩
import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import mainColor from "./img/mainColor.jpeg";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LookAt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img className="main-bg" src={mainColor} alt="mainColor"></img>
      <Row>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </div>
  );
}

export default App;
