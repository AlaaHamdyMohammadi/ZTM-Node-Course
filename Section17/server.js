const express = require('express');
const { buildSchema } = require('graphql'); // Allows to create schema
const { graphqlHTTP } = require("express-graphql"); // Middleware function, which responds to graphql queries 

const schema = buildSchema(`
    type Query{
        description: String
        price: Float
    }
`)

const root = {
    description: 'Red Shoe',
    price: 42.12
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT} ...`)
})