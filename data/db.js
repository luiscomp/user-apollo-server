const { faker } = require('@faker-js/faker');
let currentId = 1;

function nextId() {
	return currentId++;
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
	id: nextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextId(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: faker.internet.password()
}, {
	id: nextId(),
	name: faker.name.findName(),
	email: 'test@email.com',
	perfil: getRandomPerfil(),
	status: getRandomStatus(),
	password: '123'
} ];

module.exports = { users, perfis, nextId };