const { solarPlates, nextSolarPlateId } = require('../../data/db.js');
module.exports = {
	insertSolarPlate(_, { solarPlate }, context) {
		context && context.validUser();

		const newSolarPlate = {
			id: nextSolarPlateId(),
			...solarPlate
		};
		solarPlates.push(newSolarPlate);
		return newSolarPlate;
	},
	updateSolarPlate(_, { id, solarPlate }, context) {
		context && context.validUser();

		const solarPlateIndex = solarPlates.findIndex(u => u.id === id);
		if (solarPlateIndex === -1) {
			throw new Error('SolarPlate not find.');
		}
		const updatedSolarPlate = {
			id,
			...solarPlate
		};
		solarPlates[solarPlateIndex] = updatedSolarPlate;
		return updatedSolarPlate;
	},
	deleteSolarPlate(_, { id }, context) {
		context && context.validUser();

		const solarPlateIndex = solarPlates.findIndex(u => u.id === id);
		if (solarPlateIndex === -1) {
			throw new Error('SolarPlate not find.');
		}
		const excluido = solarPlates.splice(solarPlateIndex, 1)[0];
		return excluido;
	}
};