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
		const user = users.find(u => u.name.toLowerCase().includes(name.toLowerCase()));
		if (!user) {
			throw new Error('User not find.');
		}
		return user;
	},
	deleteUser(_, { id }) {
		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
			throw new Error('User not find.');
		}
		const excluido = users.splice(userIndex, 1)[0];
		return excluido;
	},
	listPerfis() {
		return perfis;
	}
};