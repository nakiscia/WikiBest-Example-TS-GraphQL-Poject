import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import {ArticleResolver} from './resolvers/article'


const main = async() => {
    const app = express();
    const apolloServer = new ApolloServer({
        schema : await buildSchema({
            resolvers : [ArticleResolver],
            validate : false,
        }),
        context: ()=>({})
    });

    // For create graphql playground for express
    apolloServer.applyMiddleware({app});

    app.listen(4000, ()=>{
        console.log("Hello from server on port 4000");
    });


}

main().catch((error)=>{console.log(error)});