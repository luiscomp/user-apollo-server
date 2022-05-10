const User = require('./User');
const Perfil = require('./Perfil');
const SolarPlate = require('./SolarPlate');

module.exports = {
	...User,
	...Perfil,
	...SolarPlate
};