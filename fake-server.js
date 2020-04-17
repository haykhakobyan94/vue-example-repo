/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const userdb = JSON.parse(fs.readFileSync('./db/users.json', 'UTF-8'))
const sunbscriptdb = JSON.parse(fs.readFileSync('./db/subscribedb.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults())

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload
function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token
function verifyToken(token) {
	return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
	return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

// Check if the user exists in database
function isAuthenticatedEmail({ email }) {
	return userdb.users.findIndex(user => user.email === email) !== -1
}

function isSubscribeEmail({ email }) {
	return sunbscriptdb.subscribe.findIndex(subscribe => subscribe.email === email) !== -1
}

server.post('/api/auth/login', (req, res) => {
	const { email, password } = req.body
	if (isAuthenticated({ email, password }) === false) {
		const status = 422
		const code = 'wrong-email-or-password'
		const message = 'Wrong E-Mail or Password'
		res.status(status).json({ status, code, message })
		return
	}
	const accessToken = createToken({ email, password })
	const refreshToken = createToken({ email, password })
	const userId = 1
	const expiresIn = 1577210900
	res.status(200).json({ userId, accessToken, refreshToken, expiresIn })
})

server.post('/api/auth/login/email', (req, res) => {
	const email = req.body.data.email

	if (isAuthenticatedEmail({ email }) === false) {
		const status = 404
		const code = 'user-not-found'
		const message = 'Пользователя с E-Mail-ом user@example.com не существует..'
		res.status(status).json({ status, code, message })
		return
	}
	const id = 1
	res.status(200).json({ id })
})

server.post('/api/subscribe', (req, res) => {
	const email = req.body.data.email

	if (isSubscribeEmail({ email }) === false) {
		const status = 422
		const code = 'subscription-already-exists'
		const message = 'E-Mail уже подписан на рассылку'
		res.status(status).json({ status, code, message })
		return
	}
	const id = 1
	res.status(201).json({ id })
})

server.post('/api/auth/logout', (req, res) => {
	res.json({ status: 'OK' })
})

server.get('/api/users/:id', (req, res) => {
	res.status(200).json({ user: userdb.users[0] })
})

server.use(/^(?!\/).*$/, (req, res, next) => {
	if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
		const status = 422
		const message = 'Ошибка в формате авторизации'
		res.status(status).json({ status, message })
		return
	}
	try {
		verifyToken(req.headers.authorization.split(' ')[1])
		next()
	} catch (err) {
		const status = 422
		const message = 'Ошибка access_token отменяется'
		res.status(status).json({ status, message })
	}
})

server.use(router)

server.listen(3100, () => {
	console.log('Running fake Auth API Server at http://localhost:3100')
})
