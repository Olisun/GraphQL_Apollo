import React, { Component } from 'react';
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import classNames from 'classnames';


export default function LaunchItem({
  // Destructuring inside the args to bring in props
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="mb-3 px-0">
      <Card style={{ width: '54rem', margin: "auto" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col sm={9}>
                <Card.Title>{mission_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Flight Number: {flight_number}</Card.Subtitle>
                {/* Using classnames lib to color code launch sucess */}
                <Card.Subtitle className="mb-2 text-muted">Mission Name: {''}
                  <span
                    className={classNames({
                      'text-success': launch_success,
                      'text-danger': !launch_success
                    })}
                  >
                    {mission_name}
                  </span>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Launch Date: {launch_date_local}</Card.Subtitle>
              </Col>
              <Col sm={3}>
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