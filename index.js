const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
	typeDefs: importSchema('./src/schemas/index.graphql'), 
	resolvers
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});