import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ParticlesBg from "particles-bg";

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [50, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: '../SpaceXLogo.png',
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 15,
      backgroundRepeat: "repeat"
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          // ctx.scale({ x: 4, y: 9 });
          ctx.closePath();
        }
      });
    }
    return (
      <Fragment>
        <div className="container">
          <h4 style={{ textAlign: "center" }}>Launches</h4>
          <MissionKey style={{ textAlign: "center" }} />
          <Query query={LAUNCHES_QUERY}>
            {/* Arrow function inside object */}
            {
              ({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>
                if (error) console.log(error)

                console.log(data)
                return <Fragment>
                  {
                    data.launches.map(launch => (
                      <LaunchItem
                        key={launch.flight_number}
                        launch={launch}
                      />
                    ))
                  }
                  {/* <ParticlesBg type="circle" config={config} bg={true} style={{ backgroundRepeat: "repeat" }} /> */}
                </Fragment>
              }
            }
          </Query>
        </div>
      </Fragment>
    )
  }
}

export default Launches;
