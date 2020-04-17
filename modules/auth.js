const authOptions = {
	redirect: false,

	strategies: {
		local: {
			endpoints: {
				login: {
					url: '/users/accounts/token',
					method: 'post',
					propertyName: 'jwt',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				},
				logout: false,
				user: false
			}
		}
	}
}

module.exports = authOptions