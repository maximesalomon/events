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
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    poster: { type: GraphQLString }
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

// Hardcoded Data

const events = [
  {
    id: 1,
    name: "Marvellous Island Festival 2020",
    date: "Du samedi 30 mai 2020 au lundi 1 juin 2020",
    location: "Route de Lagny, 77200 Torcy, Ile-De-France, France",
    description:
      "Les 30 & 31 MAI 2020, célébrons l’arrivée de l’été ensemble, l’espace d’un week-end qui s’annonce flamboyant, sous le soleil, au bord de l’eau et les pieds dans le sable.",
    poster:
      "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/83991772_3022274161130208_3737444776786526208_o.jpg"
  },
  {
    id: 2,
    name: "Mosimann & Friends: Grand Bleu, Amine Edge & Dance & more",
    date: "Mercredi 26 février 2020",
    location: "5 boulevard Poissonnière, 2e, 75002 Paris, France",
    description: null,
    poster:
      "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/82498781_3972544119429804_2010696399980593152_o.jpg"
  },
  {
    id: 3,
    name: "FASTer & LOUDer - Positive Techno Party",
    date: "Samedi 29 février 2020",
    location: "50 Rue Saint-Sabin, 75011 Paris, France",
    description:
      "On est de retour aux Caves Saint Sabin ! Suite au gros bordel de la dernière teuf on a décidé de remettre le couvert : même lieu, même concept mais 2 fois plus de son et 2 fois plus d'ambiance 😈",
    poster:
      "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/78252999_158574152202520_6673126649556369408_n.jpg"
  }
];

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    event: {
      type: EventType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        for(let i = 0; i < events.length; i++) {
            if(events[i].id === args.id) {
                return events[i]
            }
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
