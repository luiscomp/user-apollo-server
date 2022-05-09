const User = require('./User');
const Perfil = require('./Perfil');

module.exports = {
	...User,
	...Perfil
};