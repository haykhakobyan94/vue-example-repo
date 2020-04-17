/* eslint-disable no-undef */
import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {
	// define a base url for a REST API
	baseURL() {
		return 'https://stage.aromo.ru/api'
	}

	constructor(...args) {
		args.length ? super(...args) : super()
	}

	static config(config) {
		const self = this.instance()
		self.config(config)

		return self
	}

	config(config) {
		this.config = config
		return config
	}

	// implement a default request method
	request(config) {
		Object.assign(config, this.config);
		return this.$http.request(config)
	}

	getFormData(data) {
		const formData = new FormData()
		Object.keys(data).forEach(key => formData.append(key, data[key]))
		return formData
	}

	_create() {
		return this.request({
			method: 'POST',
			url: this.endpoint(),
			data: this.getFormData(this),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		}).then(response => {
			const self = Object.assign(this, response.data)
			return self
		})
	}
}