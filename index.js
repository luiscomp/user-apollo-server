const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const resolvers = require('./resolvers');
const context = require('./data/context');

const server = new ApolloServer({ 
	typeDefs: importSchema('./src/schemas/index.graphql'), 
	resolvers,
	context
});

const PORT = process.env.PORT || 3200;

server.listen(PORT).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});