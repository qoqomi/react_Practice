import "./App.css";
//button 부트스트랩
import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import mainColor from "./img/mainColor.jpeg";
import styled from "styled-components";
import { useState } from "react";
//
import data from "./data";
import ShoesMain from "./ShoesMain";

function App() {
  let [shoes] = useState(data);
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
      <div>
        <ShoesMain shoes={shoes}></ShoesMain>
      </div>
    </div>
  );
}
const YellowBtn = styled.button`
  background-color: ${(props) => props.hello};
  color: black;
  padding: 10px;
`;
export default App;
