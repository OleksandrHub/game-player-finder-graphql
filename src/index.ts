import { readFileSync } from 'node:fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';

const typeDefs = readFileSync(new URL('./schema.graphql', import.meta.url), 'utf8');

const resolvers = {
  Query: {
    health: () => 'ok',
  },
};

const port = Number(process.env.PORT ?? 4000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/game_player_finder';

await mongoose.connect(mongoUri);
console.log('MongoDB підключено');

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port } });
console.log(`GraphQL API: ${url}`);
