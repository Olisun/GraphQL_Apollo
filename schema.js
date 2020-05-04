const axios = require('axios');

// bringing in graphql datatypes
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    flight_number: { type: GraphQLInt },
    rocket: { type: RocketType },
    // links: { type: FlickerImageLinkType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// const FlickerImageLinkType = new GraphQLObjectType({
//   name: 'FlickerImage',
//   fields: () => ({
//     flickr_images: { type: GraphQLList }
//   })
// });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // All launches
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/launches')
          .then(res => res.data)
      }
    },
    // Single launch
    launch: {
      type: LaunchType,
      // to fetch the data with the id
      args: {
        flight_number: { type: GraphQLInt }
      },
      // resolve function fetching the data
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data)
      }
    },
    // All rockets
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/rockets')
          .then(res => res.data)
      }
    },
    // Single rocket
    rocket: {
      type: RocketType,
      // to fetch the data with the id
      args: {
        rocket_id: { type: GraphQLString }
      },
      // resolve function fetching the data
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});