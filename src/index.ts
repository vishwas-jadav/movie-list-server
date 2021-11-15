import * as dotenv from 'dotenv';
dotenv.config();
import { createDbConnection } from './database';
import 'reflect-metadata';
import config from './config';
import { getManager } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/HelloResolver';
import { MoviesResolver } from './resolvers/MoviesResolver';

const app = express();

const { port } = config;
const main = async () => {
	try {
		await createDbConnection();

		
		const manager = getManager();

		const apolloServer = new ApolloServer({
			schema: await buildSchema({
				resolvers: [HelloResolver, MoviesResolver],
				validate: false,
			}),
			context: () => ({ manager }),
		});

		await apolloServer.start();

		apolloServer.applyMiddleware({ app });

		app.listen(port, () => {
			console.log(`app running on port : ${port}`);
		});

		return app;
	} catch (error) {
		console.log(error);
	}
};

main();

export default app;