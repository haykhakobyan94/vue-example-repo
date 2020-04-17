/* eslint-disable no-useless-constructor */
import Model from '../../Model'
import ConfirmationCode from './ConfirmationCode'

export default class UserRegistration extends Model {
	resource() {
		return 'users/accounts'
	}

	confirmationCode() {
		return this.hasMany(ConfirmationCode)
	}
}