const { users, perfis } = require('../data/db.js');
module.exports = {
	serverInfo() {
		return {
			name: 'GraphQL',
			version: '1.0.0'
		};
	},
	listUsers() {
		return users;
	},
	findUserById(_, { id }) {
		const user = users.find(u => u.id === id);
		if (!user) {
			throw new Error('User not find.');
		}
		return user;
	},
	findUserByName(_, { name }) {
		const user = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
		if (!user) {
			throw new Error('User not find.');
		}
		return user;
	},
	listPerfis() {
		return perfis;
	}
};