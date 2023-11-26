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

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
        products: async (parent) =>{
            const product = await Promise.resolve(parent.products);
            return product;
        },
        orders: (parent) => {
            return parent.orders
        }
    }
  }
});


const root = {
 products: require('./products/products.model'),
 orders: require('./orders/orders.model'),
 
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running GraphQL server on port ${PORT} ...`);
});
