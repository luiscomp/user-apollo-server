const User = require('./User');
const SolarPlate = require('./SolarPlate');

module.exports = {
	...User,
	...SolarPlate
};