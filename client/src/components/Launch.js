import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Card, Container, Col, fluid, Image, Row, Table } from "react-bootstrap";
import Moment from 'react-moment';


const LAUNCH_QUERY = gql`
  query LaunchOuery($flight_number: Int!) {
    launch (flight_number: $flight_number){
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        mission_patch
        article_link
      }
    }
  }
`

export class Launch extends Component {
  render() {
    // Getting the matching flight number passed down through props. 
    let { flight_number } = this.props.match.params;
    // Making sure the browser reads the flight number as a number.
    flight_number = parseInt(flight_number);

    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {/* Arrow function inside object */}
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error)

              console.log(data)
              const {
                mission_name,
                launch_year,
                launch_success,
                launch_data_local,
                details,
                rocket: { rocket_id, rocket_name, rocket_type },
                links: { mission_patch, article_link }
              } = data.launch
              return <div>
                <Card style={{ width: '36rem', margin: "auto" }}>
                  <Card.Img
                    variant="top"
                    src={mission_patch}
                    style={{ width: '300px', margin: 'auto' }}
                  />
                  <Card.Body>
                    <Card.Title>{mission_name}</Card.Title>
                    <Card.Text>
                      <Table responsive bordered striped>
                        <tbody>
                          <tr>
                            <td>Launch Year</td>
                            <td>-{launch_year}</td>
                          </tr>
                          <tr>
                            <td>Launch Success</td>
                            <td>{launch_success}</td>
                          </tr>
                          <tr>
                            <td>Time of Launch</td>
                            <td>
                              <Moment format="MM-DD-YYYY at HH:mm">
                                {launch_data_local}
                              </Moment>
                            </td>
                          </tr>
                          <tr>
                            <td>Rocket Name</td>
                            <td>{rocket_name}</td>
                          </tr>
                          <tr>
                            <td>Rocket Type</td>
                            <td>{rocket_type}</td>
                          </tr>
                          <tr>
                            <td>Rocket ID</td>
                            <td>{rocket_id}</td>
                          </tr>
                          <tr>
                            <td>Outcome</td>
                            <td>{details}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
