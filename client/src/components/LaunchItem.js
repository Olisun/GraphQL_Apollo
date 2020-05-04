import React, { Component } from 'react';

import { Button, Card, Container, Col, Row } from "react-bootstrap";

export default function LaunchItem({
  // Destructuring inside the args to bring in props
  launch: { flight_number, mission_name, launch_date_local }
}) {
  return (
    <div className="card card-body mb-3">
      <Card style={{ width: '54rem', margin: "auto" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Title>{mission_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Flight Number: {flight_number}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Launch Date: {launch_date_local}</Card.Subtitle>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <div className="col-md-4">
                  <Button variant="info" style={{ width: "130px", borderRadius: "20px" }}>Launch Details</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}