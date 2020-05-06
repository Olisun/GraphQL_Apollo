import React, { Component } from 'react';
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


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
                <Card.Subtitle className="mb-2 text-muted">
                  Launch Date:
                  <Moment format="MM-DD-YYYY HH:mm">
                    {launch_date_local}
                  </Moment>
                </Card.Subtitle>
              </Col>
              <Col sm={3}>
                <Link
                  to={`/launch/${flight_number}`}
                  variant="info"
                  className="btn btn-primary"
                  style={{ width: "130px", borderRadius: "20px" }}>
                  Launch Details
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}