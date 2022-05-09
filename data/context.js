const jwt = require('jwt-simple');
module.exports = ({ req }) => {
	if([ 'IntrospectionQuery', 'login' ].includes(req.body.operationName)) {
		return;
	}

	const authorization = req.headers.authorization || '';
	const token = authorization.split(' ')[1];
	const agora = Math.floor(Date.now() / 1000);

	let user = null;
	let admin = false;
	let accessError = new Error('Access denied.');

	try {
		let infoToken = jwt.decode(token, 'segredo');
		if(infoToken.exp <= agora) {
			throw new Error('Token expired.');
		}
		user = infoToken;
	} catch(e) {
		throw new Error('Invalid token.');
	}

	admin = !user && user.perfil.name === 'admin';

	return {
		user,
		admin,
		validUser() {
			if(!user) throw accessError;
		},
		validAdmin() {
			if(!admin) throw accessError;
		}
	};
};