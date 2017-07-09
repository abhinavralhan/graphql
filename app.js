import express from "express";
import graphQLHTTP from "express-graphql";
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
var { makeExecutableSchema } = require('graphql-tools');

import schema from "./schema";

let app = express();

app.use(
    "/backend",
    graphQLHTTP({
        schema,
        graphiql: true
    })
);

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(5000);

console.log("Server started on port 5000");
