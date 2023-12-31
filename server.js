var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return "Hello, world!"
  },
}

var app = express()
app.use(
    "/graphql", 
    graphqlHTTP({
        schema: schema,
        rootValue: rootValue,
        graphiql: true,
    })
)
app.listen(4000)
console.log("Running a Graphql API server")