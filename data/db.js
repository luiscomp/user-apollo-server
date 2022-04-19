const perfis = [ {
	id: 1,
	name: 'Administrador'
}, {
	id: 2,
	name: 'Gestor'
} ];

const users = [ {
	id: 1,
	name: 'Luis Eduardo',
	email: 'luizeduardo354@gmail.com',
	perfil: {
		id: 1
	},
	status: 'ACTIVE'
}, {
	id: 2,
	name: 'Thays Ferreira',
	email: 'thaysfer@gmail.com',
	perfil: {
		id: 1
	},
	status: 'INACTIVE'
}, {
	id: 3,
	name: 'Daniela Smith',
	email: 'danielasmith@gmail.com',
	perfil: {
		id: 2
	},
	status: 'BLOCKED'
} ];

module.exports = { users, perfis };