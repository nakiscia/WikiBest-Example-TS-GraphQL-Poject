import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import {ArticleResolver} from './resolvers/ArticleResolver'
import cors from 'cors'

const main = async() => {
    const app = express();
    const apolloServer = new ApolloServer({
        schema : await buildSchema({
            resolvers : [ArticleResolver],
            validate : false,
        }),
        context: ()=>({})
    });

    app.use(cors({
        origin:"http://localhost:3000",
        credentials:true
    }))
    // For create graphql playground for express
    apolloServer.applyMiddleware({app,cors:false});
    
    app.listen(4000, ()=>{
        console.log("Hello from server on port 4000");
    });


}

main().catch((error)=>{console.log(error)});