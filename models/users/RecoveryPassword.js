/* eslint-disable no-useless-constructor */
import Model from '../Model'

export default class UserRecoveryPassword extends Model {
	resource() {
		return 'users/passwords/recovery/code'
	}
}