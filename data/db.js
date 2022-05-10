const { faker } = require('@faker-js/faker');
let currentUserId = 1;
let currentSolarPlateId = 1;

function nextUserId() {
	return currentUserId++;
}

function nextSolarPlateId() {
	return currentSolarPlateId++;
}

function getRandomStatus() {
	return faker.random.arrayElement([ 'ACTIVE', 'INACTIVE', 'BLOCKED' ]);
}

function getRandomPerfil() {
	return faker.random.arrayElement(perfis);
}

const perfis = [ {
	id: 1,
	name: 'admin'
}, {
	id: 2,
	name: 'operator'
} ];

const users = [ {
	id: nextUserId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextUserId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextUserId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextUserId(),
	name: faker.name.findName(),
	email: 'test@email.com',
	perfil: perfis[0],
	status: 'ACTIVE',
	password: '123'
} ];

const solarPlates = [ {
	id: nextSolarPlateId(),
	model: faker.random.word(),
	manufacturer: faker.random.word(),
	power: faker.datatype.number({ min: 110, max: 220 })
} ];

module.exports = { users, perfis, solarPlates, nextUserId, nextSolarPlateId };