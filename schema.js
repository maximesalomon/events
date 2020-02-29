const db = require("./data/helpers");
const uuidv4 = require("uuid/v4");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = require("graphql");

// User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    type: { type: GraphQLString },
  })
});

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

// Query
const Query = new GraphQLObjectType({
  name: "Query",
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

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = {
          id: uuidv4(),
          email: args.email,
          password: args.password,
          type: args.type
        };
        return db.register(user).then(res => {
          return user;
        });
      }
    },
    addEvent: {
      type: EventType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
        poster: { type: GraphQLString }
      },
      resolve(parent, args) {
        const event = {
          id: uuidv4(),
          name: args.name,
          date: args.date,
          location: args.location,
          description: args.description,
          poster: args.poster
        };
        return db.addEvent(event).then(res => {
          return event;
        }); // TO UPDATE???
      }
    },
    updateEvent: {
      type: EventType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
        poster: { type: GraphQLString }
      },
      resolve(parent, args) {
        return db.updateEvent(args).then(res => {
          return args;
        }); // TO UPDATE???
      }
    },
    deleteEvent: {
      type: EventType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return db.deleteEvent(args.id).then(res => {
          return args;
        }); // TO UPDATE???
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
