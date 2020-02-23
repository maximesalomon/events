const express = require("express");
const db = require("./data/db");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema')

const app = express();
const PORT = process.env.PORT || 7000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
