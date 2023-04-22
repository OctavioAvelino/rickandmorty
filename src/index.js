const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const Cha = require('./modelo/Character');

// definiciones - se importa archivo def
const typeDefs = require('./Defs/character');
// resolver
const resolvers = require('./graphql/resolvers');

//BD
const connectDb = require('./db');
const app = express();
connectDb();


module.exports = app;

async function start(){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start();
    server.applyMiddleware({app});

    app.listen(3000, () => {
        console.log('servidor en puerto 3000')
    });
}

start();

