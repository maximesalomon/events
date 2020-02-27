const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors())

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
