const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
	typeDefs: importSchema('./src/schemas/index.graphql'), 
	resolvers
});

server.listen(5000).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});