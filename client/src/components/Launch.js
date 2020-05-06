import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchOuery($flight_number: Int!) {
    launch (flight_number: $flight_number){
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
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
              return <Fragment>
                {
                  <h1>Test</h1>
                }
              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
