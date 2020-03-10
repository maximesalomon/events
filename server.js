const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () =>
  console.log(`Server running --> http://localhost:${PORT}`)
);
