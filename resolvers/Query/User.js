const { users } = require('../../data/db.js');
const { getUserToken } = require('../../src/utils/auth.js');

module.exports = {
	login(_, { user }) {
		const loggedUser = users.find(u => u.email === user.email && u.password === user.password);
		if (!loggedUser) {
			throw new Error('Usuário ou senha inválidos');
		}
		loggedUser.token = getUserToken(loggedUser);

		console.log(loggedUser);

		return loggedUser;
	},
	listUsers() {
		return users;
	},
	findUserById(_, { id }, context) {
		context && context.validUser();

		const user = users.find(u => u.id === id);
		if (!user) {
			throw new Error('User not find.');
		}
		return user;
	},
	findUserByName(_, { name }, context) {
		context && context.validUser();
		return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
	}
};