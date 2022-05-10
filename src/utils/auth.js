const jwt = require('jwt-simple');
module.exports = {
	getUserToken(user) {
		const agora = Math.floor(Date.now() / 1000);

		const userInfo = {
			id: user.id,
			name: user.name,
			email: user.email,
			perfil: user.perfil,
			iat: agora,
			exp: agora + (3 * 24 * 60 * 60)
		};

		return jwt.encode(userInfo, 'segredo');
	}
};