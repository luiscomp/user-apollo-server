const { solarPlates } = require('../../data/db');
module.exports = {
	listSolarPlates() {
		return solarPlates;
	},
	findSolarPlateById(_, { id }, context) {
		context && context.validUser();
        
		const solarPlate = solarPlates.find(u => u.id === id);
		if (!solarPlate) {
			throw new Error('SolarPlate not find.');
		}
		return solarPlate;
	},
	findSolarPlateByModel(_, { model }, context) {
		context && context.validUser();
		return solarPlates.filter(u => u.model.toLowerCase().includes(model.toLowerCase()));
	},
	findSolarPlateByManufacturer(_, { manufacturer }, context) {
		context && context.validUser();
		return solarPlates.filter(u => u.manufacturer.toLowerCase().includes(manufacturer.toLowerCase()));
	}
};