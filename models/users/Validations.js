/* eslint-disable no-useless-constructor */
import Model from '../Model'

export default class UserValidation extends Model {
	resource() {
		return 'users/validation'
	}
}