const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

const db = require("./data/helpers");

// Event Type
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    poster: { type: GraphQLString }
  })
});

// // Artist Type
// const ArtistType = new GraphQLObjectType({
//     name: 'Artist',
//     fields: () => ({
//         id: { type: GraphQLString },
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
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         link: { type: GraphQLString },
//     })
// })

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    event: {
      type: EventType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return db.findEventById(args.id);
      }
    },
    events: {
      type: GraphQLList(EventType),
      resolve(parent, args) {
        return db.findEvents();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
