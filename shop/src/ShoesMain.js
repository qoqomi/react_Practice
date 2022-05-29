import React from "react";
import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";

import { useState } from "react";
const ShoesMain = (props) => {
  const a = props.shoes;

  return (
    <Row>
      {a.map((a, i) => {
        <Col>
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            width="80%"
          ></img>
          <h4>{a[i]}</h4>
          <p>{}</p>
        </Col>;
      })}
    </Row>
  );
};

export default ShoesMain;
