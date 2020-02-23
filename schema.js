const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

// Event Type
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    description: { type: GraphQLString },
    poster: { type: GraphQLString }
    // artists: { type: GraphQLList }
  })
});

// // Artist Type
// const ArtistType = new GraphQLObjectType({
//     name: 'Artist',
//     fields: () => ({
//         id: { type: GraphQLInt },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         picture: { type: GraphQLString },
//         songs: { type: GraphQLList },
//         events: { type: GraphQLList }
//     })
// })

// // Song Type
// const SongType = new GraphQLObjectType({
//     name: 'Song',
//     fields: () => ({
//         id: { type: GraphQLInt },
//         name: { type: GraphQLString },
//         link: { type: GraphQLString },
//     })
// })

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    events: {
      type: GraphQLList(EventType),
      resolve(parent, args) {}
    }
  }
});


module.exports = new GraphQLSchema({
    query: RootQuery
})