const path = require('path');
const express = require("express");
// const { buildSchema } = require("graphql"); // Allows to create schema
const { graphqlHTTP } = require("express-graphql"); // Middleware function, which responds to graphql queries
const { loadFilesSync } = require('@graphql-tools/load-files'); // let to read any function matching some pattern
const { makeExecutableSchema } = require('@graphql-tools/schema');


// const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
 resolvers: resolversArray
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running GraphQL server on port ${PORT} ...`);
});
