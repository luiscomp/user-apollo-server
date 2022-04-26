const { faker } = require('@faker-js/faker');
let nextId = 1;

function getNextId() {
	return nextId++;
}

function getRandomStatus() {
	return faker.random.arrayElement([ 'ACTIVE', 'INACTIVE', 'BLOCKED' ]);
}


function getRandomPerfil() {
	return faker.random.arrayElement(perfis);
}

const perfis = [ {
	id: 1,
	name: 'Administrador'
}, {
	id: 2,
	name: 'Gestor'
} ];

const users = [ {
	id: getNextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus()
}, {
	id: getNextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus()
}, {
	id: getNextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus()
} ];

module.exports = { users, perfis, nextId };