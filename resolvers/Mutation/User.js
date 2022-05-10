const { users, perfis, nextUserId } = require('../../data/db.js');
module.exports = {
	insertUser(_, { user }, context) {
		context && context.validUser();

		let perfil = perfis.find(perfil => perfil.id === user.perfil.id);

		if (!perfil) {
			throw new Error('Perfil not valid.');
		}

		const newUser = {
			id: nextUserId(),
			...user,
			perfil
		};
		users.push(newUser);
		return newUser;
	},
	updateUser(_, { id, user }, context) {
		context && context.validUser();

		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
			throw new Error('User not find.');
		}
		const updatedUser = {
			...user
		};
		users[userIndex] = updatedUser;
		return updatedUser;
	},
	deleteUser(_, { id }, context) {
		context && context.validAdmin();

		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
			throw new Error('User not find.');
		}
		const excluido = users.splice(userIndex, 1)[0];
		return excluido;
	}
};