const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express(); // EXPRESS
const PORT = process.env.PORT || 7000; // PORT

app.use(helmet()); // HEADER + SEO
app.use(cors()); // CORS
app.use(bodyParser.json()); // BODY PARSER

// GRAPHQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// APP
app.listen(PORT, () =>
  console.log(`Server running --> http://localhost:${PORT}`)
);
