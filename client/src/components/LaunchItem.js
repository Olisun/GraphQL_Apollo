import React, { Component } from 'react';

import { Button, Card } from "react-bootstrap";

export default function LaunchItem({
  // Destructuring inside the args to bring in props
  launch: { flight_number, mission_name, launch_date_local }
}) {
  return (
    <div className="card card-body mb-3">
      <Card style={{ width: '27rem' }}>
        <Card.Body>

          <Card.Title>{mission_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Flight Number: {flight_number}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Launch Date: {launch_date_local}</Card.Subtitle>
          <div className="col-md-3">
            <Button variant="info">Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}