const { users, perfis } = require('../data/db.js');
module.exports = {
	insertUser(_, { user }) {
		let perfil = perfis.find(perfil => perfil.id === user.perfil.id);

		if (!perfil) {
			throw new Error('Perfil not valid.');
		}

		const newUser = {
			id: users.length + 1,
			...user,
			perfil
		};
		users.push(newUser);
		return newUser;
	},
	updateUser(_, { id, user }) {
		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
			throw new Error('User not find.');
		}
		const newUser = {
			id,
			...user
		};
		users[userIndex] = newUser;
		return newUser;
	},
	deleteUser(_, { id }) {
		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
			throw new Error('User not find.');
		}
		const excluido = users.splice(userIndex, 1)[0];
		return excluido;
	}
};